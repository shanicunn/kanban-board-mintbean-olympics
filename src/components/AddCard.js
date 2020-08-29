import React from 'react';
import KanBanCard from './KanBanCard';

// FUNCTION TO ADD A CARD
class AddCard extends React.Component { 
    constructor() {
        super();
        // Default state for the add card btn
        this.state = {
            clicked: false,
        }
    }
    // When clicked set clicked state to true
    //  setState was undefined without arrow function in button onClick
    setTrue() {
        this.setState(
                { clicked: true }
            )
            }
    // When clicked set clicked state to fale
    setFalse() {
        this.setState(
            { clicked: false }
            )
    }
    render () {
        // Variable for conditional statement
        const addACardClicked = this.state.clicked;
        // When clicked a card will render along with the add card btn
        // Only 1 task generates
        // NO CARD DISPLAYED ON DEFAULT
        while (addACardClicked === false) {
            console.log("Button currently set to false");
            return ( 
                <span>
                    <button onClick={() => this.setTrue()} className="card-add">
                        +
                    </button>
                    {/* <KanBanCard /> */}
            </span>
            )
        } 
            // DISPLAYS CARD ON CLICK
            
        while (addACardClicked === true) {
            console.log("Button currently set to true");
            
            console.log("ID number: ", this.count);
            return (
                <span>
                    <button onClick={() => this.setFalse()} className="card-add">
                        +
                    </button>
                    
                    <KanBanCard id={this.count}/>
                    
                </span>
            )
        }
        
        return (
            <main>
                {/* <button onClick={this.setTrue} className="card-add">
                    +
                </button> */}
            </main>
            
        )
    }
}
export default AddCard;