import React from 'react';
import KanBanColumn from './KanBanColumn';

class KanBanBoard extends React.Component {
    render() {
        return (
            // OUTER BOARD
            <main className="board">
               <KanBanColumn columnTitle="Todo" />
               <KanBanColumn columnTitle="In Progress" />
               <KanBanColumn columnTitle="Done" />

            </main>
        )
    }
}

export default KanBanBoard;