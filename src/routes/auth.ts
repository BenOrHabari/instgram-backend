import express from "express";

const router = express.Router();

function sendResponse(req, res){
    res.json({avi: '1'});
};

router.post('/api/login', sendResponse);
router.post('/api/register', sendResponse);
router.get('/api/user-info', sendResponse);

export default router;