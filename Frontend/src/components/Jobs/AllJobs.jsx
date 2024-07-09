import React, { useState } from "react";
import { Link } from "react-router-dom";

function AllJobs() {
    const [jobs, setJobs] = useState([{
        _id: 1,
        title: "Software Engineer",
        category: "IT",
        location: "Bangalore"
    }, {
        _id: 2,
        title: "Content manager",
        category: "Social Media",
        location: "Delhi"
    }, {
        _id: 2,
        title: "Content manager",
        category: "Social Media",
        location: "Delhi"
    }, {
        _id: 2,
        title: "Content manager",
        category: "Social Media",
        location: "Delhi"
    }]);

    return (
        <div className="w-full h-40 p-4">
            <h1 className="text-2xl font-bold text-center mb-4 bg-sky-400 p-2 rounded-md">Available Jobs</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    jobs && jobs.map((element) => (
                        <div key={element._id} className="flex-row flex-1 bg-slate-300 w-4/5 h-full m-2 p-2 justify-center text-left rounded-md shadow-md">
                            <p><b>Title: </b>{element.title}</p>
                            <p><b>Category: </b>{element.category}</p>
                            <p><b>Location: </b>{element.location}</p>
                            <Link to={`/job/${element._id}`}>
                                <button className="bg-amber-800 p-1 rounded-md shadow-md w-32 mt-2 text-white font-bold">
                                    Job Details
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AllJobs;