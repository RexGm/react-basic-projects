// components/HistoryPanel/HistoryPanel.jsx
import styles from './HistoryPanel.module.css';

function HistoryPanel({ history, setHistory }) {
  const clearHistory = () => setHistory([]);

  return (
    <div className={styles.historyPanel}>
      <div className={styles.historyTitle}>History</div>
      <div className={styles.historyContent}>
        <table className={styles.historyTable}>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{item.operation}</td>
                <td>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button 
        className={styles.historyClear}
        onClick={clearHistory}
      >
          CLEAR
      </button>
    </div>
  );
}

export default HistoryPanel;