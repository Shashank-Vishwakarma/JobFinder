const express = require('express');
const Job = require('../models/job');
const { jwtAuthMiddleware } = require('../auth/jwt');
const router = express.Router();

router.get('/get-all-jobs', jwtAuthMiddleware, async (req, res)=>{
    try {
        const allJobs = await Job.find({ expired: false });
        res.status(200).json({
            jobs: allJobs
        });
    } catch(err) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;