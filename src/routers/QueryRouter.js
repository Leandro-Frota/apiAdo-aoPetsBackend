import { Router} from "express";
import { QueryController } from "../controllers/QueryController.js";


const queryRouter = Router()
const queryController = new QueryController()


queryRouter.get('/', queryController.getPets);


export {queryRouter}