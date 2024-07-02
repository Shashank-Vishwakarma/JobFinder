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

    const { title, description, category, country, city, location, fixedSalary, salaryFrom, salaryTo } = req.body;
    if (!title || !description || !category || !country || !city || !location) {
        return res.status(400).json({ message: "Please provide details for the required fields." });
    }

    if ((!salaryFrom || !salaryTo) && !fixedSalary) {
        return res.status(400).json({ message: "Please either provide fixed salary or ranged salary." });
    }

    if (salaryFrom && salaryTo && fixedSalary) {
        return res.status(400).json({ message: "Cannot Enter Fixed and Ranged Salary together." });
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

router.get('/get-employer-posted-jobs', jwtAuthMiddleware, async (req, res) => {
    const { _id, role } = req.user;
    if (role === 'Job Seeker') {
        return res.status(400).json({ error: "You cannot access all the jobs posted by any other employer." });
    }

    try {
        const jobs = await Job.find({ postedBy: _id });
        res.status(200).json({
            jobs: jobs
        });
    } catch (err) {
        res.status(500).json({ message: `Internal server error ${err}` });
    }
});

router.put('/update/:job_id', jwtAuthMiddleware, async (req, res) => {
    const { role } = req.user;
    if (role === 'Job Seeker') {
        return res.status(400).json({ error: "You do not have the access to update any job." });
    }

    // check if the job exists
    const job_id = req.params.job_id;
    let jobToUpdate = await Job.findById(job_id);
    if (!jobToUpdate) {
        return res.status(404).json({ error: "oops! Job not found." });
    }

    try {
        // update the job
        jobToUpdate = await Job.findByIdAndUpdate(job_id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            message: "Job updated successfully!"
        });
    } catch (err) {
        res.status(500).json({ message: `Internal server error ${err}` });
    }
});

router.delete('/delete/:job_id', jwtAuthMiddleware, async (req, res) => {
    const { role } = req.user;
    if (role === 'Job Seeker') {
        return res.status(400).json({ error: "You do not have the access to delete any job." });
    }

    // check if job exists
    const { job_id } = req.params;
    let jobToDelete = await Job.findById(job_id);
    if (!jobToDelete) {
        return res.status(404).json({ error: `oops! Job not found. ${jobToDelete}` });
    }

    try {
        // delete the job
        jobToDelete = await Job.findByIdAndDelete(job_id);
        res.status(200).json({
            message: "Job deleted successfully!"
        });
    } catch (err) {
        res.status(500).json({ message: `Internal server error ${err}` });
    }
});

module.exports = router;