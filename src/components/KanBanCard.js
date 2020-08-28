import React from 'react';
import ShowDescr from './ShowDescr';

class KanBanCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "Task Title",
            cardDescr: "Task description",
        }
    }
    onCardTitleChange = (e) => {
        this.setState({
            cardTitle: e.target.value,
        })
    }
    onCardDescrChange = (e) => {
        this.setState({
            cardDescr: e.target.value,
        })
    }
    render() {
        return (
            // OUTER CARD
            <main className="card">
                {/* CARD TITLE */}
                <section className="card-title">
                    <input type="text" value={this.state.cardTitle} onChange={this.onCardTitleChange} />
                    <ShowDescr />
                </section>
                {/* CARD DESCRIPTION */}
                <section id="card-descr" className="card-descr">
                    {/* <p>{this.state.cardDescr}</p> */}
                    <input type="text" value={this.state.cardDesc} onChange={this.onCardDescrChange} />
                </section>
                
                
            </main>
        )
    }
}

export default KanBanCard;