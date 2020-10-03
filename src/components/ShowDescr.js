import React from 'react';

// FUNCTION TO SHOW DESCRIPTION ON CLICK
 class ShowDescr extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
        this.openDescr = this.openDescr.bind(this);
        this.hideDescr = this.hideDescr.bind(this);
     }
  
    // OPEN DECRIPTION
    openDescr = () => {
        // e.target.style.visibility = "visible";
        document.querySelector(".card-descr").style.visibility="visible";
        document.querySelector(".card").style.height="200px";
        // this.setTrue();
        this.setState(
            { clicked: true }
        )
    }
    // HIDE DESCRIPTION
    hideDescr = () => {
        document.querySelector(".card-descr").style.visibility = "hidden";
        // e.target.style.visibility = "hidden";
        document.querySelector(".card").style.height = "50px";
        // this.setFalse();
        this.setState(
            { clicked: false }
        )
    };

    render() {
        const openDescrClicked = this.state.clicked;
        if (openDescrClicked === true) {
            console.log("Description set to visible");
            return (
                <button onClick={() => this.hideDescr()} className="card-descr-btn ">
                    Show More
                </button>
            )
        }
        if (openDescrClicked === false) {
            console.log("Description set to hidden");
            return (
                <button onClick={() => this.openDescr()} className="card-descr-btn ">
                    Show More
                </button>
            )
        }
        return (
            <div>
                {/* <button onClick={this.openDescr} className="card-descr-btn ">
                    More
                </button> */}
            </div>
            
    )
    }
    
}
export default ShowDescr;