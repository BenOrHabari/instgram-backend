import authRouter from './auth';
import postsRouter from './posts';
import usersRouter from './users';
import express from "express";

const appRouter = express.Router();

appRouter.use(authRouter, postsRouter, usersRouter);

export default appRouter;