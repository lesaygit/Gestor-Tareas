import { TareaStatus } from './tarea-status.enum';
import { Tarea } from './tarea.interface';

export const TAREAS: Array<Tarea> = [
  {
    id: 1,
    titulo: 'Estudiar Angular Material',
    description: 'Estudiar Angular Material componetes',
    status: TareaStatus.EN_PROCESO,
  },
  {
    id: 2,
    titulo: 'Aprender sistema de control de versiones',
    description: 'Aprender sistema de control de versiones github.com',
    status: TareaStatus.TERMINADA,
  },
  {
    id: 3,
    titulo: 'Estudiar Observables',
    description: 'Estudiar todos los destintos operadores',
    status: TareaStatus.EN_PROCESO,
  },
  {
    id: 4,
    titulo: 'Install Ubuntu 20.04',
    description: 'Install Ubuntu 20.04',
    status: TareaStatus.PENDIENTE,
  },
];

export function findTareaById(tareaId: number): Tarea {
  return TAREAS[tareaId - 1];
}

export function findTareaByStatus(tareaStatus: TareaStatus): Tarea[] {
  return TAREAS.filter((tarea: Tarea) => tarea.status === tareaStatus);
}
