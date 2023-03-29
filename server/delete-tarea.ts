import { Response, Request } from 'express';
import { TAREAS } from './db-data';
import { Tarea } from './tarea.interface';

export function deleteTarea(req: Request, res: Response) {
  console.log('Deleting Tarea');

  const id: number = Number.parseInt(req.params['tareaId']);

  let elementDeleted = TAREAS.splice(getIndexFromTAREASbyId(id), 1);

  setTimeout(() => {
    res.status(200).json(elementDeleted.length >= 0 ? elementDeleted[0] : null);
  }, 1000);
}

function getIndexFromTAREASbyId(id: number): number {
  return TAREAS.findIndex((t: Tarea) => t.id === id);
}
