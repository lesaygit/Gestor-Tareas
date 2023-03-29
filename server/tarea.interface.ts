import { TareaStatus } from "./tarea-status.enum";

export interface Tarea {
    id: number;
    titulo: string;
    description: string;
    status: TareaStatus;
}
