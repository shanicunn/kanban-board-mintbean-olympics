import React from 'react';
import KanBanCard from './KanBanCard';

class KanBanColumn extends React.Component {
    
    render() {
        return (
            // OUTER COLUMN
            <main className="column">
                {/* COLUMN TITLE */}
                <section className="column-title">
                    <h1></h1>
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