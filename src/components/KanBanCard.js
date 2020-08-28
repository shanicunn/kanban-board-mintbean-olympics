import React from 'react';
import ShowDescr from './ShowDescr';

class KanBanCard extends React.Component {

    render() {
        return (
            // OUTER CARD
            <main className="card">
                {/* CARD TITLE */}
                <section className="card-title">
                    <h1> TEST card</h1>
                    <ShowDescr />
                </section>
                {/* CARD DESCRIPTION */}
                <section className="card-descr">
                    <p> Description here</p>
                </section>
                
                
            </main>
        )
    }
}

export default KanBanCard;