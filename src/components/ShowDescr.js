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
    // SET CLICKED TO TRUE
    setTrue() {
        this.setState(
            { clicked: true }
        )
        this.openDescr();
        }
    // SET CLICKED TO FALSE
    setFalse() {
        this.setState(
            { clicked: false }
        )
        this.hideDescr();
    }
    // OPEN DECRIPTION
    openDescr = () => {
        document.querySelector(".card-descr").style.visibility="visible";
        document.querySelector(".card").style.height="200px";
        console.log("Open Desc clicked");
    }
    // HIDE DESCRIPTION
    hideDescr = () => {
        document.querySelector(".card-descr").style.visibility = "hidden";
        document.querySelector(".card").style.height = "50px";
    }
    render() {
        const openDescrClicked = this.state.clicked;
        if (openDescrClicked === true) {
            console.log("Description set to hidden");
            return (
                <button onClick={() => this.setFalse()} className="card-descr-btn ">
                    More
                </button>
            )
        }
        if (openDescrClicked === false) {
            console.log("Description set to visible");
            return (
                <button onClick={() => this.setTrue()} className="card-descr-btn ">
                    More
                </button>
            )
        }
        return (
            <div>
                <button onClick={this.openDescr} className="card-descr-btn ">
                    More
                </button>
            </div>
            
    )
    }
    
}
export default ShowDescr;