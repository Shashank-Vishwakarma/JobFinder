import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Input from "../utils/Input";

function Application() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [resume, setResume] = useState(null);

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    }

    const { isAuthorized, user } = useContext(AppContext);

    return (
        <>
            <h1 className="text-2xl font-bold text-center m-4 bg-sky-400 p-2 rounded-md">Application Form</h1>
            <section className="flex items-center justify-center m-4 p-2 rounded-md">
                <div className="bg-slate-300 shadow-md rounded-md p-4">
                    <form className="grid grid-cols-2 gap-3">
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="number"
                            name="phone"
                            id="phone"
                            label="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            label="Address"
                            value={address}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <textarea
                            placeholder="Cover Letter"
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className="p-2 m-1 border-2 border-solid border-cyan-700 outline-none text-black rounded-md h-44"
                        />
                        <div>
                            <label
                                style={{ textAlign: "start", display: "block", fontSize: "15px", fontWeight: "medium" }}
                            >
                                Select Resume
                            </label>
                            <input
                                type="file"
                                accept=".pdf, .jpg, .png"
                                onChange={handleFileChange}
                                style={{ width: "100%" }}
                            />
                        </div>
                        <button type="submit" className="w-40 h-10 bg-sky-500 rounded-md shadow-md font-bold text-white">
                            Send Application
                        </button>
                    </form>
                </div>
            </section>
        </>

    )
}

export default Application;