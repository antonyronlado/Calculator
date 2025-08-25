import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const appendToDisplay = (value) => {
    setInput((prev) => prev + value);
  };

  const clearDisplay = () => setInput('');
  const deleteLast = () => setInput((prev) => prev.slice(0, -1));

  const calculate = () => {
    try {
      const result = Function('"use strict";return (' + input + ')')();
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  return (
    <main className="calculator">
      <div className="solar-panel"></div>
      <section className="display">
        <input type="text" value={input} readOnly />
      </section>
      <section className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay('/')}>÷</button>
        <button onClick={() => appendToDisplay('*')}>×</button>
        <button onClick={deleteLast}>⌫</button>

        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('-')}>−</button>

        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('+')}>+</button>

        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button className="equals" onClick={calculate}>=</button>

        <button className="zero" onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
      </section>
    </main>
  );
};

export default Calculator;
