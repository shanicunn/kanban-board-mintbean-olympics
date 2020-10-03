import React from 'react';
import KanBanCard from './KanBanCard';



class KanBanColumn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            kanbanList: [],
            
        }
    }
    newCard() {
        const newCard = <div> <KanBanCard /> </div>;
        this.setState(
            { kanbanList: [...this.state.kanbanList, newCard] }
            );
    }
  
    
    render() {
        return (
            // OUTER COLUMN
            <main className="column">
                {/* COLUMN TITLE */}
                <section className="column-title">
                    <h1>{this.props.columnTitle}</h1>
                    
                </section>
                {/* COLUMN CARDS */}
                <section className="column-card">
                    <button onClick={() => this.newCard()} className="card-add"> + </button>

                    <div className="cards-holder">
                        {this.state.kanbanList.map(
                            (card, i) => 
                            <li key= {i}>{card}</li>
                            )}
                    </div>
                </section>
                
                
            </main>
        )
    }
}

export default KanBanColumn;