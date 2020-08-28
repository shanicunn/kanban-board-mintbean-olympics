import React from 'react';


 function HideDescr() {
    const closeDescr = () => {
        
        document.querySelector(".card-descr").style.visibility="hidden";
        document.querySelector(".card").style.height="50px";
    }
    return (
        <button onClick={closeDescr} className="card-descr-btn ">
            More
        </button>
    )
}
export default HideDescr;