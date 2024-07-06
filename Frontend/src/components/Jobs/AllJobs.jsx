import React, { useState } from "react";
import { Link } from "react-router-dom";

function AllJobs() {
    const [jobs, setJobs] = useState([{
        _id: 1,
        title: "Software Engineer",
        category: "IT",
        location: "Bangalore"
    }]);

    return (
        <div className="w-full h-40 p-4">
            <h1 className="text-center font-bold text-3xl mb-2">Available Jobs</h1>
            {
                jobs && jobs.map((element) => (
                    <div key={element._id} className="flex-wrap flex-col flex-1 bg-slate-300 w-1/4 h-fit m-2 p-2 items-center justify-center text-center rounded-md shadow-md">
                        <p>{`Title: ${element.title}`}</p>
                        <p>{`Category: ${element.category}`}</p>
                        <p>{`Location: ${element.location}`}</p>
                        <Link to={`/job/${element._id}`} className="text-white">
                            <button className="bg-amber-800 p-1 rounded-sm mt-2">
                                Job Details
                            </button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default AllJobs;