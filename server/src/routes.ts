import express from 'express'
import { CreateLocalsUsecases } from './use-cases/createLocals';
import { CreateUsersUsecases } from './use-cases/createUsers'

const routes = express.Router();

const createUser = new CreateUsersUsecases();
//const createSchedule = new CreateShedulesUsecases();
const createLocal = new CreateLocalsUsecases()

routes.post("/user", createUser.handle);
//routes.post("/schedules", createSchedule.handle);
routes.post("/local", createLocal.handle);


export { routes };


