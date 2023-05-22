import { Router } from "express";
import { validateToken } from "../middlewares/validateSession.middleware.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { urlSchema } from "../schemas/url.schema.js";
import { getUrlById, postUrlShort } from "../controllers/url.controllers.js";




const urlRouter = Router()
urlRouter.post("/urls/shorten", validateSchema(urlSchema), validateToken ,postUrlShort);
urlRouter.get("/urls/:id", getUrlById);