import { Router } from "express";
import { profileControllers, userControllers } from "../controllers";
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

userRouter.patch(
    "/:id",
    middlewares.uniqueEmail, 
    middlewares.uniqueUsername, 
    userControllers.update
)

userRouter.post(
    "/:id/profile",
    middlewares.verifyProfileExists,
    profileControllers.create
)

export default userRouter