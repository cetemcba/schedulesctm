import express from 'express'
import { CreateLocals } from './use-cases/createLocals';
import { CreateMaterials } from './use-cases/createMaterial';
import { CreateSchedules } from './use-cases/createSchedules';
import { CreateUsers} from './use-cases/createUsers'
import { ListDisponibleLocals } from './use-cases/listLocals';
import { ListSchedulesPerUsers } from './use-cases/listSchedulesPerUsers';
import { MySchedules } from './use-cases/mySchedules';


const routes = express.Router();

const createUser = new CreateUsers();
const createSchedule = new CreateSchedules();
const createLocal = new CreateLocals()
const createMaterial = new CreateMaterials();
const findUserShedules = new ListSchedulesPerUsers();
const findLocals = new ListDisponibleLocals();
const mySchedules = new MySchedules(); 


routes.post("/user", createUser.handle);
routes.post("/schedule", createSchedule.handle);
routes.post("/local", createLocal.handle);
routes.post("/material", createMaterial.handle);
routes.get("/user/:id",findUserShedules.handle );
routes.get("/schedule", findLocals.handle);
routes.get("/mySchedules/:authorId", mySchedules.handle);

export { routes };


