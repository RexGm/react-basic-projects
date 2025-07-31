
import Calculator from './components/Calculator/Calculator';
import HistoryPanel from './components/HistoryPanel/HistoryPanel';
import styles from './App.module.css';
import './App.css';
function App() {

  return (
    <div className="App">
      <h1 className="project-title"> Basic Calculator Project</h1>
      <div className={styles.calculatorContainer}>
        <Calculator />
        <HistoryPanel />
      </div>
    </div>
  );
}

export default App;
