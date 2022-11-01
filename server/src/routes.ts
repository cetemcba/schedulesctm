import express from 'express'
import { CreateLocalsUsecases } from './use-cases/createLocals';
import { CreateMaterialsUsecases } from './use-cases/createMaterial';
import { CreateSchedulesUsecases } from './use-cases/createSchedules';
import { CreateUsersUsecases } from './use-cases/createUsers'
import { ListSchedulesPerUsers } from './use-cases/listSchedulesPerUsers';


const routes = express.Router();

const createUser = new CreateUsersUsecases();
const createSchedule = new CreateSchedulesUsecases();
const createLocal = new CreateLocalsUsecases()
const createMaterial = new CreateMaterialsUsecases();
const findUserShedules = new ListSchedulesPerUsers();

routes.post("/user", createUser.handle);
routes.post("/schedule", createSchedule.handle);
routes.post("/local", createLocal.handle);
routes.post("/material", createMaterial.handle);
routes.get("/user/:id",findUserShedules.handle );


export { routes };


