import { Response, Request } from 'express';
import { TAREAS } from './db-data';
import { Tarea } from './tarea.interface';

const getTareaValidId = (): number => TAREAS[TAREAS.length - 1].id + 1;

export function createNewTarea(req: Request, res: Response) {
  console.log('Creating a new tarea!!!');

  const changes = req.body;
  const newTarea: Tarea = { id: getTareaValidId(), ...changes };

  TAREAS.push(newTarea);

  res.status(200).json(newTarea);
}
