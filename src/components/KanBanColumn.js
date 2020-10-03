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
    deleteCard(index) {
            const newList = this.state.kanbanList;
            newList.splice(index, 1);
            this.setState({ newList });
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
                    <button onClick={() => this.newCard()} className="card-btn"> + </button>

                    <div className="cards-holder">
                        {this.state.kanbanList.map(
                            (card, i) => 
                            <li key= {i}>
                                {card}
                                <button className="card-btn" onClick={() => this.deleteCard(i)}> - </button>
                            </li>
                            )}
                    </div>
                </section>
                
                
            </main>
        )
    }
}

export default KanBanColumn;