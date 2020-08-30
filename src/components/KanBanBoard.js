import React from 'react';
import KanBanColumn from './KanBanColumn';

// https://www.youtube.com/watch?v=3OjNAp5GPYY
// Column index directionals
// const moveLeft = -1;
// const moveRight = 1;

class KanBanBoard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // Setting states for default columns and cards
    //     this.state = {
    //         columns: [
    //             {
    //                 columnTitle: "Todo",
    //                 cards: [
    //                     {
    //                         cardTitle: "Title Task",
    //                     },
    //                 ]
    //             },
    //             {
    //                 columnTitle: "In Progress",
    //                 cards: [
    //                     {
    //                         cardTitle: "Title Task",
    //                     },
    //                 ]
    //             },
    //             {
    //                 columnTitle: "Done",
    //                 cards: [
    //                     {
    //                         cardTitle: "Title Task",
    //                     },
    //                 ]
    //             },
    //         ]
    //     }
    // }    
    // addCard = columnIndex => {
    //     const name = window.prompt
    // }

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