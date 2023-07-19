import { Router } from "express";
import { userControllers } from "../controllers";
import uniqueEmail from "../middlewares/uniqueEmail.middleware";
import uniqueUsername from "../middlewares/uniqueUsername.middleware";
import verifyUserIdParams from "../middlewares/verifyUserIdParams.middleware";

const userRouter: Router = Router()

userRouter.post(
    "", 
    uniqueEmail, 
    uniqueUsername, 
    userControllers.create
)

userRouter.get(
    "/:id",
    verifyUserIdParams, 
    userControllers.retrieve
)

userRouter.delete(
    "/:id",
    verifyUserIdParams, 
    userControllers.destroy
)

userRouter.patch("/:id")

userRouter.post("/:id/profile")

export default userRouter