import { Router} from "express";
import { AdoptionProcessController } from "../controllers/adoptionProcessController.js";

const adoptionProcessRouter = Router()
const adoptionProcessController = new AdoptionProcessController()




export{adoptionProcessRouter}

