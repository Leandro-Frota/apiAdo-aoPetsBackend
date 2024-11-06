import { Router } from "express";
import { PetController } from "../controllers/PetController.js";

const petRouters = Router()
const petController = new PetController()



export {petRouters}