// components/HistoryPanel/HistoryPanel.jsx
import styles from './HistoryPanel.module.css';

const HISTORY_DATA = [
  { operation: '15 + 3', result: '18' },
  { operation: '12 × 5', result: '60' },
  { operation: '√(144)', result: '12' },
  { operation: 'EBOB(18,24)', result: '6' },
  { operation: '5!', result: '120' },
  { operation: '3.14 × 10', result: '31.4' },
  { operation: '2^8', result: '256' },
  { operation: 'log(100)', result: '2' },
  { operation: 'sin(π/2)', result: '1' },
  { operation: 'EKOK(4,6)', result: '12' },
  { operation: '100 ÷ 8', result: '12.5' }
];

function HistoryPanel() {
  const clearHistory = () => {
    console.log('Geçmiş temizlendi');
    // Geçmişi temizleme işlemi burada
  };

  return (
    <div className={styles.historyPanel}>
      <div className={styles.historyTitle}>İşlem Geçmişi</div>
      <div className={styles.historyContent}>
        <table className={styles.historyTable}>
          <thead>
            <tr>
              <th>İşlem</th>
              <th>Sonuç</th>
            </tr>
          </thead>
          <tbody>
            {HISTORY_DATA.map((item, index) => (
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
        Geçmişi Temizle
      </button>
    </div>
  );
}

export default HistoryPanel;