import { Response, Request } from 'express';
import { findTareaById, TAREAS } from './db-data';

export function getAllTareas(req: Request, res: Response) {
  console.log('Getting all Tareas');

  setTimeout(() => {
    res.status(200).json(Object.values(TAREAS));
  }, 1000);
}

export function getTareaById(req: Request, res: Response) {
  const tareaId = req.params['tareaId'];
  const tarea = findTareaById(Number.parseInt(tareaId));

  setTimeout(() => {
    res.status(200).json(tarea);
  }, 1000);
}
