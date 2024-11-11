import { Router} from "express";
import { QueryController, QueryController } from "../controllers/QueryController";


const QueryRouter = Router()
const QueryController = new QueryController()


QueryRouter.get('/pets', QueryController.getPets);


