import * as express from 'express';
import { Application } from 'express';
import { createNewTarea } from './create-tarea.route';
import { deleteTarea } from './delete-tarea';
import { getAllTareas } from './get-tareas.route';
import { saveTarea } from './save-tarea.route';

const cors = require('cors');
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

// Set up CORS
app.use(
  cors({
    origin: true, // "true" will copy the domain of the request back
    // to the reply. If you need more control than this
    // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
    // authenticated via either a session cookie
    // or Authorization header. Otherwise the
    // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE', // Make sure you're not blocking
    // pre-flight OPTIONS requests
  })
);

app.route('/api/tareas').get(getAllTareas);

app.route('/api/tarea').post(createNewTarea);

app.route('/api/tarea/:tareaId').put(saveTarea);

app.route('/api/tarea/:tareaId').delete(deleteTarea);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
