import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function MyJobs() {
    const [myJobs, setmyJobs] = useState([
        {
            _id: 1,
            title: "Software Engineer",
            country: "India",
            city: "Bangalore",
            category: "IT",
            fixedSalary: 20000,
            expired: false,
            description: "This is a job",
            location: "Bangalore, India"
        },
        {
            _id: 2,
            title: "Software Engineer",
            country: "India",
            city: "Bangalore",
            category: "IT",
            fixedSalary: 20000,
            expired: false,
            description: "This is a job",
            location: "Bangalore, India"
        }
    ]);
    // const [editingMode, setEditingMode] = useState(null); // it is equated to job id
    const editingMode = 2;
    const { isAuthorized, user } = useContext(AppContext);

    const handleInputChange = (jobId, field, value) => {
        setmyJobs(
            (prevJobs) => prevJobs.map((job) =>
                job._id === jobId ? { ...job, [field]: value } : job
            )
        );
    }

    return (
            <div className="p-2">
                <h1 className="text-2xl font-bold text-center m-4 bg-sky-400 p-2 rounded-md">Your Posted Jobs</h1>
                <div>
                    {myJobs.length > 0 ? (
                        <>
                            <div className="m-2">
                                {myJobs.map((element) => (
                                    <div className="p-2 m-2 bg-slate-300 rounded-md shadow-lg" key={element._id}>
                                        <div>
                                            <div>
                                                <div className="inline-block m-2">
                                                    <span><b>Title: </b></span>
                                                    <input
                                                        type="text"
                                                        disabled={
                                                            editingMode !== element._id ? true : false
                                                        }
                                                        value={element.title}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                element._id,
                                                                "title",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                    />
                                                </div>
                                                <div className="inline-block m-2">
                                                    {" "}
                                                    <span><b>Country: </b></span>
                                                    <input
                                                        type="text"
                                                        disabled={
                                                            editingMode !== element._id ? true : false
                                                        }
                                                        value={element.country}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                element._id,
                                                                "country",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                    />
                                                </div>
                                                <div className="inline-block m-2">
                                                    <span><b>City: </b></span>
                                                    <input
                                                        type="text"
                                                        disabled={
                                                            editingMode !== element._id ? true : false
                                                        }
                                                        value={element.city}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                element._id,
                                                                "city",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                    />
                                                </div>
                                                <div className="inline-block m-2">
                                                    <span><b>Category: </b></span>
                                                    <select
                                                        value={element.category}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                element._id,
                                                                "category",
                                                                e.target.value
                                                            )
                                                        }
                                                        disabled={
                                                            editingMode !== element._id ? true : false
                                                        }
                                                        className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                    >
                                                        <option value="Graphics & Design">Graphics & Design</option>
                                                        <option value="Mobile App Development">Mobile App Development</option>
                                                        <option value="Frontend Web Development">Frontend Web Development</option>
                                                        <option value="MERN Stack Development">MERN STACK Development</option>
                                                        <option value="Account & Finance">Account & Finance</option>
                                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                                        <option value="Video Animation">Video Animation</option>
                                                        <option value="MEAN Stack Development">MEAN STACK Development</option>
                                                        <option value="MEVN Stack Development">MEVN STACK Development</option>
                                                        <option value="Data Entry Operator">Data Entry Operator</option>
                                                    </select>
                                                </div>
                                                <div className="inline-block m-2">
                                                    <span>
                                                        <b>Salary: </b>{" "}
                                                        {element.fixedSalary ? (
                                                            <input
                                                                type="number"
                                                                disabled={
                                                                    editingMode !== element._id ? true : false
                                                                }
                                                                value={element.fixedSalary}
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        element._id,
                                                                        "fixedSalary",
                                                                        e.target.value
                                                                    )
                                                                }
                                                                className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                            />
                                                        ) : (
                                                            <div>
                                                                <input
                                                                    type="number"
                                                                    disabled={
                                                                        editingMode !== element._id ? true : false
                                                                    }
                                                                    value={element.salaryFrom}
                                                                    onChange={(e) =>
                                                                        handleInputChange(
                                                                            element._id,
                                                                            "salaryFrom",
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                    className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                                />
                                                                <input
                                                                    type="number"
                                                                    disabled={
                                                                        editingMode !== element._id ? true : false
                                                                    }
                                                                    value={element.salaryTo}
                                                                    onChange={(e) =>
                                                                        handleInputChange(
                                                                            element._id,
                                                                            "salaryTo",
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                    className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                                />
                                                            </div>
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="inline-block m-2">
                                                    {" "}
                                                    <span><b>Expired: </b></span>
                                                    <select
                                                        value={element.expired}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                element._id,
                                                                "expired",
                                                                e.target.value
                                                            )
                                                        }
                                                        disabled={
                                                            editingMode !== element._id ? true : false
                                                        }
                                                        className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                    >
                                                        <option value={true}>TRUE</option>
                                                        <option value={false}>FALSE</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="m-2">
                                                    <span><b>Location: </b></span>
                                                    <input
                                                        value={element.location}
                                                        disabled={
                                                            editingMode !== element._id ? true : false
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                element._id,
                                                                "location",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-80 p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md"
                                                    />
                                                </div>
                                                <div className="m-2">
                                                    <span><b>Description: </b></span>{" "}
                                                    <textarea
                                                        rows="10"
                                                        cols="100"
                                                        value={element.description}
                                                        disabled={
                                                            editingMode !== element._id ? true : false
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                element._id,
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md h-44"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-2 flex justify-end">
                                            <div className="">
                                                {editingMode === element._id ? (
                                                    <>
                                                        <button
                                                            onClick={() => handleUpdateJob(element._id)}
                                                            className="p-2 bg-sky-500 rounded-md shadow-md font-bold text-white w-32 m-2"
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            onClick={() => handleDisableEdit()}
                                                            className="p-2 bg-sky-500 rounded-md shadow-md font-bold text-white w-32"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        onClick={() => handleEnableEdit(element._id)}
                                                        className="p-2 bg-sky-500 rounded-md shadow-md font-bold text-white w-32 m-2"
                                                    >
                                                        Edit
                                                    </button>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => handleDeleteJob(element._id)}
                                                className="p-2 bg-red-500 rounded-md font-bold text-white m-2 w-32"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>
                            You've not posted any job or may be you deleted all of your jobs!
                        </p>
                    )}
                </div>
            </div>
    );
}

export default MyJobs;