# angular-study
This repo is just for study purposes

## Proposito
Esta app se encargara de adminsitrar tareas; crear, cerrar, marcarlas en, espera, proceso o terminadas. Para esto se debe crear una interfaz de usuario que muestre las tareas que estan en espera o recien creadas, las tareas que estan en proceso y cuanto tiempo llevan en proceso y las que estan terminadas.

### Run server side 
* npm run server
    * GET: /api/tareas -> lista de tareas
    * POST: /api/tarea -> crear nueva tarea
    * PUT: /api/tarea/:tareaId -> editar tarea e.g.: http://localhost:9000/api/tarea/4
    * DELETE: /api/tarea/:tareaId -> eliminar tarea e.g.: http://localhost:9000/api/tarea/1

### Run Angular app
* ng serve
