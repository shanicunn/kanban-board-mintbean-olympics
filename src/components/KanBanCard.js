import React from 'react';

class KanBanCard extends React.Component {

    render() {
        return (
            // OUTER CARD
            <main className="card">
                {/* CARD TITLE */}
                <section className="card-title">
                    <h1> TEST card</h1>
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