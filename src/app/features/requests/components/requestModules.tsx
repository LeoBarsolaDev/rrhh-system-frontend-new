import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../shared/components/button";
import type { Requests } from "../types/requestsType";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export function RequestGeneralInquiry({request} : {request:Requests}){
    return(
        <div className="">
            <h4 className="text-primary font-semibold sm:text-2xl text-xl text-center">Solicitud por Consulta en General </h4>
            <h2 className="text-foreground text-xl font-bold"> Detalles </h2>
            <div className="bg-surface rounded-2xl w-full min-h-24 italic p-4 text-placeholder font-semibold">
                {request.other_explanation === "" ? <>"..."</> : <> "{request.other_explanation}" </>}
            </div>
        </div>
    )
}

export function RequestAdvancesLoans({request} : {request:Requests}){
    const amount = new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(request.amount ?? 0);

    return(
        <div className="flex flex-col gap-2">
            <h4 className="text-primary font-semibold sm:text-2xl text-xl text-center">Solicitud de Prestamo / Adelanto</h4>
            <div className="w-full py-2 px-4 bg-surface text-xl rounded-2xl">
                Monto solicitado: <span className="italic font-bold"> $ {amount}</span>
            </div>

            <h2 className="text-foreground text-xl font-bold"> Detalles </h2>
            <p className="bg-surface rounded-2xl w-full min-h-24 italic p-4 text-placeholder font-semibold">
                {request.other_explanation === null ? <>"..."</> : <> "{request.other_explanation}" </>}
            </p>
        </div>
    )
}

export function RequestSickness({request} : {request:Requests}){
    return(
        <div className="flex flex-col gap-2">
            <h4 className="text-primary font-semibold sm:text-2xl text-xl text-center"> Solicitud por Enfermedad </h4>
            <div className="flex md:flex-row flex-col gap-2">
                <div className="bg-surface rounded-2xl w-full py-2 px-4 text-placeholder font-semibold">
                    {request.diagnosis === null ? <>"Diagnostico: No proporcionado"</> : <> Diagnostico: <span className="italic font-bold"> "{request.diagnosis}"</span> </>}
                </div>

                <Button wide rounded>
                    <FontAwesomeIcon icon={faDownload} />
                    Descargar certificado
                </Button>
            </div>

            <h2 className="text-foreground text-xl font-bold"> Detalles </h2>
            <p className="bg-surface rounded-2xl w-full min-h-24 italic p-4 text-placeholder font-semibold">
                {request.other_explanation === null ? <>"..."</> : <> "{request.other_explanation}" </>}
            </p>
        </div>
    )
}

export function RequestPermits({request} : {request:Requests}){
    return(
        <div className="flex flex-col gap-2">
            <h4 className="text-primary font-semibold sm:text-2xl text-xl text-center">Solicitud de Permiso </h4>

            <div className="flex gap-2">
                <div className="bg-surface rounded-2xl w-full py-2 px-4 text-placeholder font-semibold">
                    {request.requested_quantity === null ? <>Periodo solicitado: "No proporcionado"</> : <> Periodo solicitado: <span className="italic font-bold"> "{request.requested_quantity} {request.period_type}" </span> </>}
                </div>

                <div className="bg-surface rounded-2xl w-full py-2 px-4 text-placeholder font-semibold">
                    {request.init_date === null ? <>Fecha de inicio: "No proporcionada"</> : <> Fecha de inicio: <span className="italic font-bold"> "{request.init_date}"</span> </>}
                </div>
            </div>
            
            <h2 className="text-foreground text-xl font-bold"> Detalles </h2>
            <div className="bg-surface rounded-2xl w-full min-h-24 italic p-4 text-placeholder font-semibold">
                {request.other_explanation === "" ? <>"..."</> : <> "{request.other_explanation}" </>}
            </div>
        </div>
    )
}

export function RequestScheduleChanges({request} : {request:Requests}){
    return(
        <div className="">
            <h4 className="text-primary font-semibold sm:text-2xl text-xl text-center">Solicitud de Cambio de Horario </h4>
            <h2 className="text-foreground text-xl font-bold"> Detalles </h2>
            <div className="bg-surface rounded-2xl w-full min-h-24 italic p-4 text-placeholder font-semibold">
                {request.other_explanation === "" ? <>"..."</> : <> "{request.other_explanation}" </>}
            </div>
        </div>
    )
}

export function RequestLeavesOfAbsence({request} : {request:Requests}){
    return(
        <div className="flex flex-col gap-2">
            <h4 className="text-primary font-semibold sm:text-2xl text-xl text-center">Solicitud de Licencia </h4>

            <div className="flex gap-2">
                <div className="bg-surface rounded-2xl w-full py-2 px-4 text-placeholder font-semibold">
                    {request.other_explanation === "" ? <>"..."</> : <> Motivo: "{request.other_explanation}" </>}
                </div>

                <div className="bg-surface rounded-2xl w-full py-2 px-4 text-placeholder font-semibold">
                    {request.requested_quantity === null ? <>"Dias Solicitados: No proporcionados"</> : <> Dias Solicitados: <span className="italic font-bold"> "{request.requested_quantity} dias" </span> </>}
                </div>
            </div>
            <div className="bg-surface rounded-2xl w-full py-2 px-4 text-placeholder font-semibold">
                {request.requested_quantity === null ? <>"Fecha de Inicio: No proporcionada"</> : <> Fecha de Inicio: <span className="italic font-bold"> "{request.init_date}" </span> </>}
            </div>
        </div>
    )
}

export function RequestOther({request} : {request:Requests}){
    return(
        <div className="">
            <h4 className="text-primary font-semibold sm:text-2xl text-xl text-center">Solicitud de Cambio de Horario </h4>
            <h2 className="text-foreground text-xl font-bold"> Detalles </h2>
            <div className="bg-surface rounded-2xl w-full min-h-24 italic p-4 text-placeholder font-semibold">
                {request.other_explanation === "" ? <>"..."</> : <> "{request.other_explanation}" </>}
            </div>
        </div>
    )
}

export function RenderRequestModule({ request }: { request?: Requests }) {

    if (!request) return null;

    switch (request.reason) {
        case "Consultas en general":
            return <RequestGeneralInquiry request={request} />;

        case "Adelantos/Prestamos":
            return <RequestAdvancesLoans request={request} />;

        case "Enfermedad":
            return <RequestSickness request={request} />;

        case "Permisos":
            return <RequestPermits request={request} />;

        case "Horarios":
            return <RequestScheduleChanges request={request} />;

        case "Licencias (Vacaciones, nacimiento, etc)":
            return <RequestLeavesOfAbsence request={request} />;

        case "Otros":
            return <RequestOther request={request} />;

        default:
            return <div>No se pudo determinar el tipo de solicitud</div>;
    }
}