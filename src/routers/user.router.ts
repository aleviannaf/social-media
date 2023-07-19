import { Router } from "express";
import { userControllers } from "../controllers";

const userRouter: Router = Router()

userRouter.post("", userControllers.create)

userRouter.get("/:id")
userRouter.delete("/:id")
userRouter.patch("/:id")

userRouter.post("/:id/profile")

export default userRouter