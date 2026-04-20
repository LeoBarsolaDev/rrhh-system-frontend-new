import { getToken, logout } from "./authService";

 
export const API_BASE_URL = 'https://api.consorciosestudio3.com.ar';
// export const API_BASE_URL = 'http://127.0.0.1:5000';

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = getToken();

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers, // Permite sobrescribir headers si es necesario
    };

    const config: RequestInit = {
        ...options,
        headers,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
        // 1. Intentamos leer el JSON del error
        const errorData = await response.json().catch(() => ({}));

        // 2. Creamos un objeto de error que mantenga la estructura de la API
        const error = new Error(errorData.error || 'Error en la petición');
        
        (error as any).data = errorData; 
        (error as any).status = response.status;
        
        throw error;
    }

    return response.json();
}

// Helpers para métodos comunes
export const api = {
    get: <T>(endpoint: string) => apiRequest<T>(endpoint, { method: 'GET' }),
    delete: <T>(endpoint: string) => apiRequest<T>(endpoint, { method: 'DELETE' }),
    post: <T>(endpoint: string, body: any) => apiRequest<T>(endpoint, { 
        method: 'POST', 
        body: JSON.stringify(body) 
    }),
    put: <T>(endpoint: string, body: any) => apiRequest<T>(endpoint, { 
        method: 'PUT', 
        body: JSON.stringify(body) 
    }),
    patch: <T>(endpoint: string, body: any) => apiRequest<T>(endpoint, { 
        method: 'PATCH', 
        body: JSON.stringify(body) 
    }),
};

export const verifySession = async (): Promise<void> => {
    const token = getToken();

    // Si ni siquiera hay token localmente, redirigimos de una vez
    if (!token) {
        logout();
        window.location.href = '/login';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/check-token`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        // Si el backend responde con success: false (o el status no es 200)
        if (!response.ok || data.success === false) {
            console.warn("Sesión inválida:", data.msg);
            logout();
            window.location.href = '/login';
        } else {
            // Si success es true, no hace nada y permite continuar
            console.log("Sesión verificada correctamente");
        }
        
    } catch (error) {
        // En caso de error de red o servidor caído
        console.error("Error verificando sesión:", error);
        // Opcional: podrías no redireccionar aquí si es solo un error de red
        // o ser estricto y mandar a login igual
    }
};