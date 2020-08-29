import React from 'react';
import './App.css';
import KanBanBoard from './components/KanBanBoard';

function App() {
  return (
    <div className="App">
      <section>
        <h1 className="board-title">KANBAN BOARD</h1>
      </section>
      <section>
        <KanBanBoard />
      </section>
      
    </div>
  );
}

export default App;
