import {Router} from "express"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { signUpSchema, signInSchema } from "../schemas/auth.schema.js"
import { signUp, signIn } from "../controllers/user.controller.js"


const authRouter = Router();


authRouter.post("/signup", validateSchema(signUpSchema),signUp );
authRouter.post("/signin", validateSchema(signInSchema), signIn)

export default authRouter;