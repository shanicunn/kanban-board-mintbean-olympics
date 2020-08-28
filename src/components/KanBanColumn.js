import React from 'react';
// import KanBanCard from './KanBanCard';
import AddCard from './AddCard';

function KanBanColumn (props) {
   
        return (
            // OUTER COLUMN
            <main className="column">
                {/* COLUMN TITLE */}
                <section className="column-title">
                    <h1>{props.columnTitle}</h1>
                    
                </section>
                {/* COLUMN CARDS */}
                <section className="column-card">
                <AddCard />
                    {/* <KanBanCard /> */}
                </section>
                
                
            </main>
        )
    }


export default KanBanColumn;