import React from 'react';

function Button({btnText = "Button", styles}) {
    return (
        <button
            className={`lg:text-xl font-Sora hover:bg-accent border-2 border-accent rounded-lg py-[10px] px-[30px] transition duration-300 ease-in-out ${styles}`}>
            {btnText}
        </button>
    );
}

export default Button;