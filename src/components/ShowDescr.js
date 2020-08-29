import React from 'react';

// FUNCTION TO SHOW DESCRIPTION ON CLICK
 function ShowDescr() {
    const openDescr = (e) => {
        console.log(e.target);
        document.querySelector(".card-descr").style.visibility="visible";
        document.querySelector(".card").style.height="200px";
    }
    return (
        <button onClick={openDescr} className="card-descr-btn ">
            More
        </button>
    )
}
export default ShowDescr;