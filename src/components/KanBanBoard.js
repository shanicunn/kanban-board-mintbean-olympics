import React from 'react';
import KanBanColumn from './KanBanColumn';

class KanBanBoard extends React.Component {
    render() {
        return (
            // OUTER BOARD
            <main className="board">
               <KanBanColumn column-title="Todo" />
               <KanBanColumn column-title="In Progress" />
               <KanBanColumn column-title="Done" />

            </main>
        )
    }
}

export default KanBanBoard;