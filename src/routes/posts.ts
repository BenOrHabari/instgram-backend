import express from "express";

const router = express.Router();

function sendResponse(req, res){
    res.json({avi: '1'});
};

router.get('/api/feed', sendResponse);
router.get('/api/posts/:postId', sendResponse);
router.get('/api/posts/:postId/comments', sendResponse);
router.get('/api/posts/:postId/likes', sendResponse);

router.post('/api/posts/:postId/like', sendResponse);
router.post('/api/posts/:postId/unlike', sendResponse);

export default router;