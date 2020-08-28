import React from 'react';


export default function ShowDescr() {
    const openDescr = () => {
        document.getElementById("card-descr").style.visibility="visible";
    }
    return (
        <button onClick={openDescr} className="card-descr-btn ">
            More
        </button>
    )
}