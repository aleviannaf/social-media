import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";

const userRouter: Router = Router()

userRouter.post(
    "", 
    middlewares.uniqueEmail, 
    middlewares.uniqueUsername, 
    userControllers.create
)

userRouter.use("/:id", middlewares.verifyUserIdParams)

userRouter.get("/:id", userControllers.retrieve)

userRouter.delete("/:id", userControllers.destroy)

userRouter.patch("/:id")

userRouter.post("/:id/profile")

export default userRouter