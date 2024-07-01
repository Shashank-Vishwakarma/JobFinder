const express = require('express');
const Job = require('../models/job');
const { jwtAuthMiddleware } = require('../auth/jwt');
const router = express.Router();

router.get('/get-all-jobs', jwtAuthMiddleware, async (req, res) => {
    try {
        const allJobs = await Job.find({ expired: false });
        res.status(200).json({
            jobs: allJobs
        });
    } catch (err) {
        res.status(500).json({ message: `Internal server error ${err}` });
    }
});

router.post('/create-a-job', jwtAuthMiddleware, async (req, res) => {
    const { _id, role } = req.user;
    if (role !== 'Employer') {
        return res.status(400).json({ message: "You cannot post a job." });
    }

    try {
        // create the job
        const job = new Job({
            ...req.body,
            postedBy: _id
        });
        const response = await job.save();
        res.status(200).json({
            message: "Job created successfully!",
            response: response
        });
    } catch (err) {
        res.status(500).json({ message: `Internal server error: ${err}` });
    }
});

module.exports = router;