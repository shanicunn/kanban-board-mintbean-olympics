import React from 'react';
// import KanBanCard from './KanBanCard';

class AddCard extends React.Component { 
    constructor() {
        super();
        // Default state for the add card btn
        this.state = {
            addACardClicked: false,
        }
    }
    // When clicked set state to true
    addACard() {
        //  setState was undefined without arrow function in button onClick
            this.setState(
            { addACardClicked: true }
            )
            console.log(this.addACardClicked);
    }
    render () {
        // const addACardClicked = this.state.addACardClicked;
        
        // if (addACardClicked) {
        //     console.log(addACardClicked);
        //     return <KanBanCard />
        //     } else {
        //     // Do nothing
        //     console.log(addACardClicked);
        //     }
        return (
            
            <button onClick={() => this.addACard} className="card-add">
                +
            </button>
        )
    }
}
export default AddCard;