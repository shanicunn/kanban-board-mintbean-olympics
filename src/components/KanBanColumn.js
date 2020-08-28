import React from 'react';
import KanBanCard from './KanBanCard';
import AddCard from './AddCard';

class KanBanColumn extends React.Component {

    render() {
        return (
            // OUTER COLUMN
            <main className="column">
                {/* COLUMN TITLE */}
                <section className="column-title">
                    <h1>TEST COLUMN</h1>
                    <AddCard />
                </section>
                {/* COLUMN CARDS */}
                <section className="column-card">
                    <KanBanCard />
                </section>
                
                
            </main>
        )
    }
}

export default KanBanColumn;