import React from 'react';
import KanBanCard from './KanBanCard';

class AddCard extends React.Component { 
    constructor(props) {
        super(props);
        // State for add card btn
        this.state = {
            addACardClicked: false,
        }
    }
    // When clicked set state to true
    addACard() {
        // console.log(this.addACardClicked)
        this.setState(
            { addACardClicked: true }
            )
       
    }
    render () {
        const addACardClicked = this.state.addACardClicked;
        if (addACardClicked) {
            return <KanBanCard />
            } else {
            // Do nothing
            }
        return (
             <button onClick={this.addACard} className="card-add">
            +
        </button>
    )
    }
}
export default AddCard;