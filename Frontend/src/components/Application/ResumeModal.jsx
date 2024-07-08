import React from "react";

function ResumeModal({ imageUrl, onClose }) {
    return (
        <div className="">
            <div className="">
                <span className="" onClick={onClose}>
                    &times;
                </span>
                <img src={imageUrl} alt="resume" />
            </div>
        </div>
    );
}

export default ResumeModal;