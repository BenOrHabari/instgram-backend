import express from "express";
import { login, register, userInfo } from "../controllers/auth-controller";
import verifyUser from "../middlewares/verify-user";

const router = express.Router();

router.post('/api/login', login);
router.post('/api/register', register);
router.get('/api/user-info', verifyUser, userInfo);

export default router;