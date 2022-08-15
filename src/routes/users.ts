import express from "express";

const router = express.Router();

function sendResponse(req, res){
    res.json({avi: '1'});
};

router.get('/api/users/:username', sendResponse);

export default router;