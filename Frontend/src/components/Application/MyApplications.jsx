import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

function MyApplications() {
    const { isAuthorized, user } = useContext(AppContext);
    const [applications, setApplications] = useState([
        
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [resumeImageUrl, setResumeImageUrl] = useState("");
    const navigateTo = useNavigate();

    const deleteApplication = () => {

    }

    const openModal = (imageUrl) => {
        setResumeImageUrl(imageUrl);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <section className="">
            {user && user.role === "Job Seeker" ? (
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-center mb-4 bg-sky-200 p-2 rounded-md">My Applications</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {applications.length <= 0 ? (
                            <>
                                {" "}
                                <h4 className="text-2xl align-middle font-bold">No Applications Found!</h4>{" "}
                            </>
                        ) : (
                            applications.map((element) => {
                                return (
                                    <JobSeekerCard
                                        element={element}
                                        key={element._id}
                                        deleteApplication={deleteApplication}
                                        openModal={openModal}
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            ) : (
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-center mb-4 bg-sky-200 p-2 rounded-md">Applications From Job Seekers</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {applications.length <= 0 ? (
                            <>
                                <h4 className="text-2xl align-middle font-bold">No Applications Found!</h4>
                            </>
                        ) : (
                            applications.map((element) => {
                                return (
                                    <EmployerCard
                                        element={element}
                                        key={element._id}
                                        openModal={openModal}
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            )}
            {modalOpen && (
                <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
            )}
        </section>
    );
}


const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
    return (
        <>
            <div className="bg-slate-200 p-2 flex flex-row items-center shadow-md rounded-md">
                <div className="flex flex-row justify-center items-center">
                    <div>
                        <p>
                            <span>Name:</span> {element.name}
                        </p>
                        <p>
                            <span>Email:</span> {element.email}
                        </p>
                        <p>
                            <span>Phone:</span> {element.phone}
                        </p>
                        <p>
                            <span>Address:</span> {element.address}
                        </p>
                        <p>
                            <span>CoverLetter:</span> {element.coverLetter}
                        </p>
                        <div className="p-2 bg-red-500 rounded-md font-bold text-white mt-2">
                            <button onClick={() => deleteApplication(element._id)}>
                                Delete Application
                            </button>
                        </div>
                    </div>
                    <div className="w-24">
                        <img
                            src={element.resume.url}
                            alt="resume"
                            onClick={() => openModal(element.resume.url)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const EmployerCard = ({ element, openModal }) => {
    return (
        <>
            <div className="bg-slate-200 p-2 flex flex-row items-center shadow-md rounded-md">
                <div>
                    <p>
                        <span>Name: </span> {element.name}
                    </p>
                    <p>
                        <span>Email: </span> {element.email}
                    </p>
                    <p>
                        <span>Phone: </span> {element.phone}
                    </p>
                    <p>
                        <span>Address: </span> {element.address}
                    </p>
                    <p>
                        <span>CoverLetter: </span> {element.coverLetter}
                    </p>
                </div>
                <div className="w-24">
                    <img
                        src={element.resume.url}
                        alt="resume"
                        onClick={() => openModal(element.resume.url)}
                    />
                </div>
            </div>
        </>
    );
}

export default MyApplications;

// -- dummy data --
// {
//     _id: 1,
//     name: "Shashank Vishwakarma",
//     email: "shashank@gmail.com",
//     phone: 1234567,
//     coverLetter: "This is cover letter",
//     address: "bangalore, India",
//     resume: {
//         url: "image.png"
//     }
// },
// {
//     _id: 2,
//     name: "Yash Mishra",
//     email: "yash@gmail.com",
//     phone: 1234567,
//     coverLetter: "This is cover letter",
//     address: "bangalore, India",
//     resume: {
//         url: "image.png"
//     }
// },
// {
//     _id: 3,
//     name: "Prasoon Pathak",
//     email: "prasoon@gmail.com",
//     phone: 1234567,
//     coverLetter: "This is cover letter",
//     address: "bangalore, India",
//     resume: {
//         url: "image.png"
//     }
// }