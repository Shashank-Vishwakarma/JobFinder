import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function JobDetails() {
    const [job, setJob] = useState({
        _id: 1,
        title: "Software Engineer",
        category: "IT",
        city: "Bangalore",
        country: "India",
        location: "Bangalore, India",
        description: "This is a software engineering job.",
        jobPostedOn: "7 july 2024",
        fixedSalary: 20000
    });
    const { isAuthorized, user } = useContext(AppContext);

    return (
        <section className="w-1/2 h-full bg-slate-100 p-4 text-left m-2">
            <div className="w-full p-2">
                <h1 className="text-2xl font-bold text-center mb-4 bg-sky-400 p-2 rounded-md">Job Details</h1>
                <div>
                    <p>
                        <b>Title: </b><span> {job.title}</span>
                    </p>
                    <p>
                        <b>Category: </b><span>{job.category}</span>
                    </p>
                    <p>
                        <b>Country: </b><span>{job.country}</span>
                    </p>
                    <p>
                        <b>City: </b><span>{job.city}</span>
                    </p>
                    <p>
                        <b>Location: </b><span>{job.location}</span>
                    </p>
                    <p>
                        <b>Description: </b><span>{job.description}</span>
                    </p>
                    <p>
                        <b>Job Posted On: </b><span>{job.jobPostedOn}</span>
                    </p>
                    <p>
                        <b>Salary:</b>{" "}
                        {job.fixedSalary ? (
                            <span>{job.fixedSalary}</span>
                        ) : (
                            <span>
                                {job.salaryFrom} - {job.salaryTo}
                            </span>
                        )}
                    </p>
                </div>
                {user && user.role === "Employer" ? (
                    <></>
                ) : (
                    <Link to={`/application/${job._id}`} className="bg-cyan-400 shadow-md rounded-md p-1 mt-2">
                        <button className="mt-4 font-bold">
                            Apply Now
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}

export default JobDetails;