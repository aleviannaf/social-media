import { Router } from "express";
import { userControllers } from "../controllers";
import uniqueEmail from "../middlewares/uniqueEmail.middleware";
import uniqueUsername from "../middlewares/uniqueUsername.middleware";

const userRouter: Router = Router()

userRouter.post(
    "", 
    uniqueEmail, 
    uniqueUsername, 
    userControllers.create
)

userRouter.get("/:id")
userRouter.delete("/:id")
userRouter.patch("/:id")

userRouter.post("/:id/profile")

export default userRouter