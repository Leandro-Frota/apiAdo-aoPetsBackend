import { Router } from "express";
import { adoptPetController } from "../controllers/adoptPetController.js";

const adoptPetRouters = Router()
const adoptController = new adoptPetController()

adoptPetRouters.get('/',adoptController.getAdopter)
adoptPetRouters.get('/:id',adoptController.getAdopterById)
adoptPetRouters.post('/',adoptController.registerAdopter)
adoptPetRouters.put('/:id',adoptController.updateAdopter)
adoptPetRouters.delete('/:id',adoptController.deleteAdopter)

export {adoptPetRouters}