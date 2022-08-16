import express from "express";
import { getPostComments, getPostLikes, getPost, getUserFeed, like, unlike, getPostById } from "../controllers/posts-controller";
import verifyUser from "../middlewares/verify-user";

const router = express.Router();

router.use(verifyUser);

router.get('/api/feed', getUserFeed);
router.get('/api/posts/:postId',getPostById, getPost);
router.get('/api/posts/:postId/comments',getPostById, getPostComments);
router.get('/api/posts/:postId/likes',getPostById, getPostLikes);

router.post('/api/posts/:postId/like', getPostById, like);
router.post('/api/posts/:postId/unlike', getPostById, unlike);

export default router;