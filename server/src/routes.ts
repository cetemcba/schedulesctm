import express from 'express'
import { CreateLocalsUsecases } from './use-cases/createLocals';
import { CreateMaterialsUsecases } from './use-cases/createMaterial';
import { CreateSchedulesUsecases } from './use-cases/createSchedules';
import { CreateUsersUsecases } from './use-cases/createUsers'
import { ListDisponibleLocals } from './use-cases/listLocals';
import { ListSchedulesPerUsers } from './use-cases/listSchedulesPerUsers';


const routes = express.Router();

const createUser = new CreateUsersUsecases();
const createSchedule = new CreateSchedulesUsecases();
const createLocal = new CreateLocalsUsecases()
const createMaterial = new CreateMaterialsUsecases();
const findUserShedules = new ListSchedulesPerUsers();
const findLocals = new ListDisponibleLocals();

routes.post("/user", createUser.handle);
routes.post("/schedule", createSchedule.handle);
routes.post("/local", createLocal.handle);
routes.post("/material", createMaterial.handle);
routes.get("/user/:id",findUserShedules.handle );
routes.get("/schedule", findLocals.handle);

export { routes };


