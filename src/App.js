import React from 'react';
import './App.css';
import KanBanBoard from './components/KanBanBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section>
        <h1 className="board-title">KANBAN BOARD</h1>
      </section>
      <section>
        <KanBanBoard />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
        
      
    </div>
  );
}

export default App;
