import express from 'express'
import { CreateUsersUsecases } from './use-cases/createUsers'

const routes = express.Router();

const createUser = new CreateUsersUsecases();
//const createSchedule = new CreateShedulesUsecases();
const createLocal = new CreateUsersUsecases();

routes.post("/user", createUser.handle);
//routes.post("/schedules", createSchedule.handle);
routes.post("/Local", createLocal.handle);


export { routes };


