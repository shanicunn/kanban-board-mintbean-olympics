import React from 'react';
import ShowDescr from './ShowDescr';
// import HideDescr from './HideDescr';

// KANBAN CARD COMPONENT
class KanBanCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "Task Title",
            cardDescr: "Task description goes here",
            descrVisibility: false,
            id: 0,
        }
    }
    // Changes Title With Input
    onCardTitleChange = (e) => {
        this.setState({
            cardTitle: e.target.value,
        })
    }
    // Changes Description With Input
    onCardDescrChange = (e) => {
        this.setState({
            cardDescr: e.target.value,
        })
    }
    // Sets description to visible
    onDescrVisible = () => {
        this.setState({
            descrVisibility: true,
        })
    }
    // Sets description to hidden
    onDescrHide = () => {
        this.setState({
            descrVisibility: false,
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
                    <textarea value={this.state.cardDescr} onChange={this.onCardDescrChange} />
                    {/* <input type="text" value={this.state.cardDescr} onChange={this.onCardDescrChange} /> */}
                </section>
             ;
                
            </main>
        )
    }
}

export default KanBanCard;