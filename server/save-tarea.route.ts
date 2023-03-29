import { Response, Request } from 'express';
import { TAREAS } from './db-data';
import { Tarea } from './tarea.interface';

export function saveTarea(req: Request, res: Response) {
  console.log('Saving Tarea!!!');

  const id: number = Number.parseInt(req.params['tareaId']),
    changes = req.body;

  TAREAS[getIndexFromTAREASbyId(id)] = { id, ...changes } as Tarea;

  setTimeout(() => {
    res.status(200).json(Object.values(TAREAS));
  }, 1000);
}

function getIndexFromTAREASbyId(id: number): number {
  return TAREAS.findIndex((t: Tarea) => t.id === id);
}
