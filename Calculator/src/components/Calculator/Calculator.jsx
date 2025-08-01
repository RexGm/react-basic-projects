import styles from './Calculator.module.css';
import React, { useState, useEffect } from 'react';

const BUTTONS = [
  { label: 'sin', type: 'function' },
  { label: 'cos', type: 'function' },
  { label: 'tan', type: 'function' },
  { label: 'log', type: 'function' },
  { label: 'ln', type: 'function' },
  { label: 'x²', type: 'function' },
  { label: 'x³', type: 'function' },
  { label: '√', type: 'function' },
  { label: '∛', type: 'function' },
  { label: 'x^y', type: 'function' },
  { label: 'π', type: 'function' },
  { label: 'e', type: 'function' },
  { label: 'n!', type: 'function' },
  { label: 'EE', type: 'function' },
  { label: 'Rand', type: 'function' },
  { label: 'GCF', type: 'function' },
  { label: 'LCM', type: 'function' },
  { label: 'mod', type: 'function' },
  { label: 'AC', type: 'clear' },
  { label: '÷', type: 'operator' },
  { label: '7', type: 'number' },
  { label: '8', type: 'number' },
  { label: '9', type: 'number' },
  { label: '×', type: 'operator' },
  { label: '2nd', type: 'scientific' },
  { label: '4', type: 'number' },
  { label: '5', type: 'number' },
  { label: '6', type: 'number' },
  { label: '-', type: 'operator' },
  { label: 'Deg', type: 'scientific' },
  { label: '1', type: 'number' },
  { label: '2', type: 'number' },
  { label: '3', type: 'number' },
  { label: '+', type: 'operator' },
  { label: 'Rad', type: 'scientific' },
  { label: '0', type: 'number', span: 2 },
  { label: '.', type: 'number' },
  { label: '=', type: 'equals' }
];

function Calculator({ history, setHistory }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [activeOperator, setActiveOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleButtonClick = (label) => {

    if (label === 'AC') {
      setDisplayValue('0');
      setStoredValue(null);
      setActiveOperator(null);
      setWaitingForOperand(false);
      return;
    }

    if (['sin', 'cos', 'tan', 'log', 'ln', 'x²', 'x³', '√', '∛', 'n!', 'π', 'e', 'Rand'].includes(label)) {
      let input = parseFloat(displayValue);
      let result = input;
      let operationStr = `${label}(${displayValue})`;

      switch (label) {
        case 'sin': result = Math.sin(input); break;
        case 'cos': result = Math.cos(input); break;
        case 'tan': result = Math.tan(input); break;
        case 'log': result = input > 0 ? Math.log10(input) : 'NaN'; break;
        case 'ln': result = input > 0 ? Math.log(input) : 'NaN'; break;
        case 'x²': result = Math.pow(input, 2); break;
        case 'x³': result = Math.pow(input, 3); break;
        case '√': result = input >= 0 ? Math.sqrt(input) : 'NaN'; break;
        case '∛': result = Math.cbrt(input); break;
        case 'n!':
          if (input < 0 || !Number.isInteger(input)) {
            result = 'NaN';
          } else {
            result = 1;
            for (let i = 2; i <= input; i++) result *= i;
          }
          break;
        case 'π':
          result = Math.PI;
          operationStr = 'π';
          break;
        case 'e':
          result = Math.E;
          operationStr = 'e';
          break;
        case 'Rand':
          result = Math.random();
          operationStr = 'Rand';
          break;
        default: break;
      }
      setHistory([...history, { operation: operationStr, result }]);
      setDisplayValue(String(result));
      setWaitingForOperand(true);
      return;
    }

    if (['+', '-', '×', '÷', 'mod', 'x^y', 'GCF', 'LCM'].includes(label)) {
      if (activeOperator && storedValue !== null && !waitingForOperand) {

        let a = storedValue;
        let b = parseFloat(displayValue);
        let result;
        let operationStr = `${a} ${activeOperator} ${b}`;
        if (activeOperator === 'GCF') {
          const gcd = (x, y) => (!y ? x : gcd(y, x % y));
          result = gcd(a, b);
          operationStr = `GCF(${a}, ${b})`;
        } else if (activeOperator === 'LCM') {
          const gcd = (x, y) => (!y ? x : gcd(y, x % y));
          result = (a * b) / gcd(a, b);
          operationStr = `LCM(${a}, ${b})`;
        } else {
          switch (activeOperator) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '×': result = a * b; break;
            case '÷': result = b !== 0 ? a / b : 'NaN'; break;
            case 'mod': result = a % b; break;
            case 'x^y': result = Math.pow(a, b); break;
            default: result = b;
          }
        }
        setHistory([...history, { operation: operationStr, result }]);
        setStoredValue(result);
        setDisplayValue(String(result));
      } else {
        setStoredValue(parseFloat(displayValue));
      }
      setActiveOperator(label);
      setWaitingForOperand(true);
      return;
    }


    if ((label === 'GCF' || label === 'LCM') && storedValue !== null) {
      const a = storedValue, b = parseFloat(displayValue);
      const gcd = (x, y) => (!y ? x : gcd(y, x % y));
      let result, operationStr;
      if (label === 'GCF') {
        result = gcd(a, b);
        operationStr = `LCM(${a}, ${b})`;
      } else {
        result = (a * b) / gcd(a, b);
        operationStr = `LCM(${a}, ${b})`;
      }
      setHistory([...history, { operation: operationStr, result }]);
      setDisplayValue(String(result));
      setStoredValue(null);
      setActiveOperator(null);
      setWaitingForOperand(true);
      return;
    }

    if (label === '=') {
      if (activeOperator && storedValue !== null) {
        let a = storedValue;
        let b = parseFloat(displayValue);
        let result;
        let operationStr = `${a} ${activeOperator} ${b}`;
        if (activeOperator === 'GCF') {
          const gcd = (x, y) => (!y ? x : gcd(y, x % y));
          result = gcd(a, b);
          operationStr = `GCF(${a}, ${b})`;
        } else if (activeOperator === 'LCM') {
          const gcd = (x, y) => (!y ? x : gcd(y, x % y));
          result = (a * b) / gcd(a, b);
          operationStr = `LCM(${a}, ${b})`;
        } else {
          switch (activeOperator) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '×': result = a * b; break;
            case '÷': result = b !== 0 ? a / b : 'NaN'; break;
            case 'mod': result = a % b; break;
            case 'x^y': result = Math.pow(a, b); break;
            default: result = b;
          }
        }
        setHistory([...history, { operation: operationStr, result }]);
        setDisplayValue(String(result));
        setStoredValue(null);
        setActiveOperator(null);
        setWaitingForOperand(true);
      }
      return;
    }

    if (label === '.' && displayValue.includes('.')) return;
    if (waitingForOperand) {
      setDisplayValue(label === '.' ? '0.' : label);
      setWaitingForOperand(false);
    } else if (displayValue === '0' && label !== '.') {
      setDisplayValue(label);
    } else {
      setDisplayValue(displayValue + label);
    }
  };

  useEffect(() => {
    const keyMap = {
      '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
      '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
      '.': '.', '+': '+', '-': '-', '*': '×', '/': '÷',
      '%': 'mod', '^': 'x^y', 'Enter': '=', '=': '=',
      'Backspace': 'AC', 'Delete': 'AC', 'Escape': 'AC',
      's': 'sin', 'c': 'cos', 't': 'tan', 'l': 'log',
      'n': 'ln', 'q': '√', 'w': '∛', 'f': 'n!',
      'p': 'π', 'e': 'e', 'r': 'Rand',
      'b': 'GCF', 'k': 'LCM'
    };

    const handleKeyDown = (e) => {
      let key = e.key;
      if (key.length === 1) key = key.toLowerCase();
      if (keyMap[key]) {
        e.preventDefault();
        handleButtonClick(keyMap[key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleButtonClick, history, setHistory, displayValue, storedValue, activeOperator, waitingForOperand]);

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{displayValue}</div>
      <div className={styles.buttons}>
        {BUTTONS.map((btn) => (
          <button
            key={btn.label}
            className={`${styles.button} ${styles[btn.type]}`}
            onClick={() => handleButtonClick(btn.label)}
            style={btn.span ? { gridColumn: 'span 2' } : {}}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div className={styles.brand}>SCIENTIFIC CALCULATOR - REXGM</div>
    </div>
  );
}

export default Calculator;