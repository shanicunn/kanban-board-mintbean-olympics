import React from 'react';
import KanBanColumn from './KanBanColumn';

class KanBanBoard extends React.Component {
    render() {
        return (
            // OUTER COLUMN
            <main className="board">
               <KanBanColumn title="Todo" />
               <KanBanColumn title="In Progress" />
               <KanBanColumn title="Done" />

            </main>
        )
    }
}

export default KanBanBoard;