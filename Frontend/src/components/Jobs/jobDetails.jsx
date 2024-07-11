import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

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
    const navigateTo = useNavigate();

    return (
        <section className="p-4 text-left m-2">
            <h1 className="text-2xl font-bold text-center mb-4 bg-sky-400 p-2 rounded-md">Job Details</h1>
            <div className="w-full p-2 flex flex-row flex-1 justify-around items-center">
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
                <div>
                    {
                        user && user.role === "Employer" ? (
                            <></>
                        ) : (
                            <Link 
                                onClick={ isAuthorized? navigateTo(`/application/${job._id}`): navigateTo('/register') }
                            >
                                <button className="mt-4 font-bold w-40 p-2 bg-cyan-400 shadow-md rounded-md">
                                    Apply Now
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default JobDetails;