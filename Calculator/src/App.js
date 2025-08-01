import Calculator from './components/Calculator/Calculator';
import HistoryPanel from './components/HistoryPanel/HistoryPanel';
import styles from './App.module.css';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <h1 className="project-title"> Basic Calculator Project</h1>
      <div className={styles.calculatorContainer}>
        <Calculator history={history} setHistory={setHistory} />
        <HistoryPanel history={history} setHistory={setHistory} />
      </div>
    </div>
  );
}

export default App;
