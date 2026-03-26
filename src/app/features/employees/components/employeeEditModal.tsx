import { Button } from "../../../shared/components/button";
import Form from "../../../shared/components/form";
import Modal from "../../../shared/components/modal";
import { Step, Wizard } from "../../../shared/components/wizard";
import { EditEmployeeContact, EditEmployeeFormAdminWork, EditEmployeeFormPersonal, EditEmployeeFormWorkerWork } from "./employeeEditModalForms";

export interface props {
  open: boolean;
  setOpen: (value: boolean) => void;
  employee: any;
}

export default function EmployeeEditModal({open, setOpen, employee} : props){
    return(
        <Modal open={open} setOpen={setOpen} >
            <div className="
                w-full py-2 px-0 flex flex-col gap-0 h-full
                /* Configuración de Scroll */
                overflow-y-visible overflow-x-hidden
                /* Estilización del Scrollbar (Chrome, Safari, Edge) */
                scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-primary/20
                [&::-webkit-scrollbar-thumb]:rounded-full
                hover:[&::-webkit-scrollbar-thumb]:bg-primary/50
            ">
                {employee !== null ? (
                    <Wizard>
                        <Step name="Información Personal">
                            <span className="text-primary text-2xl font-bold text-center"> {employee.type} </span>
                            <Form url="" className="py-2">
                                <EditEmployeeFormPersonal />
                                <Button type="submit" rounded wide> Guardar </Button>
                            </Form>
                        </Step>

                        <Step name="Información Laboral">
                            <span className="text-primary text-2xl font-bold text-center"> {employee.type} </span>
                            <Form url="" className="py-2">
                                {employee.type === "Administrativo" && <EditEmployeeFormAdminWork />}
                                {employee.type === "Obrero" && <EditEmployeeFormWorkerWork />}
                                <Button type="submit" rounded wide> Guardar </Button>
                            </Form>
                        </Step>

                        <Step name="Información de Contacto">
                            <span className="text-primary text-2xl font-bold text-center"> {employee.type} </span>
                            <Form url="" className="py-2">
                                <EditEmployeeContact />
                                <Button type="submit" rounded wide> Guardar </Button>
                            </Form>
                        </Step>
                    </Wizard>
                ) : (
                    <>Fallo al cargar empleado</>
                )}
            </div>
        </Modal>
    )
}