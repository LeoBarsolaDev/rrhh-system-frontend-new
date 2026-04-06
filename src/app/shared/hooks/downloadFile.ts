import { API_BASE_URL } from "../services/apiClient";

export const downloadFile = (filePath: string | null) => {
    // filePath sería "static/uploads/rrhh/comprobante.pdf"
    const url = `${API_BASE_URL}/${filePath}`;
    
    // Creamos un link temporal y lo "clickeamos"
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', ''); // Fuerza la descarga
    link.target = "_blank"; // Abre en pestaña nueva si el navegador no soporta auto-download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};