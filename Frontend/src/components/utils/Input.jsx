import React from "react";

function Input({ id, name, type, label, onChange}) {
    return (
        <input 
            type={type} 
            id={id}
            name={name}
            placeholder={label}
            className="w-80 p-2 m-1 border-none outline-none text-black rounded-md"
            onChange={onChange}
        />
    );
}

export default Input;