import React from 'react';


export default function ShowDescr() {
    const openDescr = () => {
        
        document.querySelector(".card-descr").style.visibility="visible";
        document.querySelector(".card").style.height="200px";
    }
    return (
        <button onClick={openDescr} className="card-descr-btn ">
            More
        </button>
    )
}