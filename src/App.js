import React from 'react';
import './App.css';
import KanBanBoard from './components/KanBanBoard';
import Footer from './components/Footer';

function App() {
  return (
    // WHOLE PAGE
    <div className="App">
    {/* PAGE TITLE */}
      <section>
        <h1 className="board-title">KANBAN BOARD</h1>
      </section>
      {/* KANBAN BOARD */}
      <section>
        <KanBanBoard />
      </section>
      {/* FOOTER */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
