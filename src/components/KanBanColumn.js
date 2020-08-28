import React from 'react';

class KanBanColumn extends React.Component {
    render() {
        return (
            // OUTER COLUMN
            <main className="column">
                {/* COLUMN TITLE */}
                <section className="column-title">

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