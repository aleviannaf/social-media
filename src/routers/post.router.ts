import { Router } from "express";
import middlewares from "../middlewares";
import { postControllers } from "../controllers";

const postRouter: Router = Router()

postRouter.post("", middlewares.verifyUserIdBody, postControllers.create)

postRouter.use("/:id", middlewares.verifyPostIdParams)

postRouter.get("/:id", postControllers.retrieve)
postRouter.patch("/:id", middlewares.verifyUserIdBody, postControllers.update)

export default postRouter