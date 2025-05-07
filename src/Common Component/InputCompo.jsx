import React from 'react';

function InputCompo({icon, placeholder = "Enter text", type = "text"}) {
    return (
        <div>
            <label className="input validator">
                {icon && icon}
                <input type={type} placeholder={placeholder} required/>
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
        </div>
    );
}

export default InputCompo;