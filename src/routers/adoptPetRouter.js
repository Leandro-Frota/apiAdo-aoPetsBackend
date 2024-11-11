import { Router } from "express";
import { adoptPetController } from "../controllers/adoptPetController.js";

const adoptPetRouters = Router()
const adoptController = new adoptPetController()



export {adoptPetRouters}