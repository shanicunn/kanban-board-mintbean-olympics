import React from 'react';
import KanBanCard from './KanBanCard';

// FUNCTION TO ADD A CARD
let clickedCount = 0;

class AddCard extends React.Component { 
    constructor() {
        super();
        // Default state for the add card btn
        this.state = {
            clicked: false,
            // cardArray: [],
            // card: null,
        }
        this.newCard = this.newCard.bind(this);
    }
    cardArray = new Array(clickedCount);
    
    // When clicked set clicked state to true
    //  setState was undefined without arrow function in button onClick
    setTrue() {
        this.setState(
                { clicked: true }
        )
    }
    // When clicked set clicked state to false
    setFalse() {

        this.setState(
            { clicked: false }
            )
    }
    
    newCard() {
        clickedCount ++;
        this.cardArray.push(<KanBanCard />);
        console.log("New card has been clicked", clickedCount, "times and there should be", this.cardArray.length, "cards.")
        // this.cardArray.join();
        console.log(this.cardArray);
        if (this.cardArray) {
            const card = this.cardArray.map((id) => (
                <div key={id}>
                    <KanBanCard />
                </div>
            ))
            return card
        }

    }
    render () {

        const addACardClicked = this.state.clicked;
        
        // Variable for conditional statement
        
        // When clicked a card will render along with the add card btn
        // Only 1 task generates
        // NO CARD DISPLAYED ON DEFAULT
        if (addACardClicked === false) {
            console.log("Button currently set to false");
            return ( 
                <div>
                    <button onClick={() => this.setTrue()} className="card-add">
                        +
                    </button>
                    {/* <KanBanCard /> */}
            </div>
            )
        } 
            // DISPLAYS CARD ON CLICK
            
        if (addACardClicked === true) {
            console.log("Button currently set to true");
            return (
                <span>
                    <button onClick={this.newCard} className="card-add">
                        +
                    </button>
                    
                    <KanBanCard />
                    
                </span>
            )
        }
        
        return (
            <main>
                <button onClick={this.newCard} className="card-add">
                    +
                </button>
                <button onClick={this.newCard} className="card-add">
                    +
                </button>
                <div>
                    
                </div>
            </main>
            
        )
    }
}
export default AddCard;