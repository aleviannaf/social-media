import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { userRouter } from "./routers";
import postRouter from "./routers/post.router";

const app: Application = express()
app.use(json())

app.use("/users", userRouter)
app.use("/posts", postRouter)

app.use(middlewares.handleError);
export { app }
