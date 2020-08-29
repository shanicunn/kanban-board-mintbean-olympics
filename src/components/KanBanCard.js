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
    onDescrVisible = () => {
        this.setState({
            descrVisibility: true,
        })
    }
    onDescrHide = () => {
        this.setState({
            descrVisibility: false,
        })
    }
    render() {
       
        return (
            // OUTER CARD
            <main className="card" id={this.state.id}>
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
                
                
            </main>
        )
    }
}

export default KanBanCard;