import React from 'react';
import KanBanColumn from './KanBanColumn';

class KanBanBoard extends React.Component {
    render() {
        return (
            // OUTER COLUMN
            <main className="board">
               <KanBanColumn />
               <KanBanColumn />
               <KanBanColumn />

            </main>
        )
    }
}

export default KanBanBoard;