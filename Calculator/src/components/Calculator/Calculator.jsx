import styles from './Calculator.module.css';


const BUTTONS = [
  // İlk satır
  { label: 'sin', type: 'function' },
  { label: 'cos', type: 'function' },
  { label: 'tan', type: 'function' },
  { label: 'log', type: 'function' },
  { label: 'ln', type: 'function' },
  
  // İkinci satır
  { label: 'x²', type: 'function' },
  { label: 'x³', type: 'function' },
  { label: '√', type: 'function' },
  { label: '∛', type: 'function' },
  { label: 'x^y', type: 'function' },
  
  // Üçüncü satır
  { label: 'π', type: 'function' },
  { label: 'e', type: 'function' },
  { label: 'n!', type: 'function' },
  { label: 'EE', type: 'function' },
  { label: 'Rand', type: 'function' },
  
  // Dördüncü satır
  { label: 'EBOB', type: 'function' },
  { label: 'EKOK', type: 'function' },
  { label: 'mod', type: 'function' },
  { label: 'AC', type: 'clear' },
  { label: '÷', type: 'operator' },
  
  // Beşinci satır
  { label: '7', type: 'number' },
  { label: '8', type: 'number' },
  { label: '9', type: 'number' },
  { label: '×', type: 'operator' },
  { label: '2nd', type: 'scientific' },
  
  // Altıncı satır
  { label: '4', type: 'number' },
  { label: '5', type: 'number' },
  { label: '6', type: 'number' },
  { label: '-', type: 'operator' },
  { label: 'Deg', type: 'scientific' },
  
  // Yedinci satır
  { label: '1', type: 'number' },
  { label: '2', type: 'number' },
  { label: '3', type: 'number' },
  { label: '+', type: 'operator' },
  { label: 'Rad', type: 'scientific' },
  
  // Sekizinci satır
  { label: '0', type: 'number', span: 2 },
  { label: '.', type: 'number' },
  { label: '=', type: 'equals' }
];



function Calculator() {
  return (
  <div className={styles.calculator}>
      <div className={styles.display}>0</div>
      <div className={styles.buttons}>
        {BUTTONS.map((btn) => (
          <button
            key={btn.label}
            className={`${styles.button} ${styles[btn.type]}`}
            //onClick={() => handleButtonClick(btn.label)}
            style={btn.span ? { gridColumn: 'span 2' } : {}}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div className={styles.brand}>SCIENTIFIC CALCULATOR PRO</div>
    </div>

  );
}

export default Calculator;