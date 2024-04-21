import './App.css';
import React, {useState} from 'react';
import Add from './component/Add';
import Division from './component/Division';
import Input from './component/Input';
import Multiply from './component/Multiply';
import Reset from './component/Reset';
import Result from './component/Result';
import Subtract from './component/Subtract';

function App() {

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  // const [resetInput, setResultInput] = useState('');
  // const [resetResult, setResultResult] = useState('');


  const handleValue1Change = (event) => {
    setValue1(Number(event.target.value));
  };

  const handleValue2Change = (event) => {
    setValue2(Number(event.target.value));
  };

  const handleOperation = (operation) => {
    switch (operation) {
      case 'add':
        setResult(value1 + value2);
        break;
      case 'subtract':
        setResult(value1 - value2);
        break;
      case 'multiply':
        setResult(value1 * value2);
        break;
      case 'division':
        setResult(value1 / value2);
        break;
      default:
        break;
    }
  };
  return (
    <div className='app'>
      <Input value1={value1} value2={value2} onChange1={handleValue1Change} onChange2={handleValue2Change} />
      <Add onClick={() => handleOperation('add')} label="Add"  />
      <Subtract onClick={() => handleOperation('subtract')} label="Subtract" />
      <Multiply onClick={() => handleOperation('multiply')} label="Multiply" />
      <Division onClick={() => handleOperation('division')} label="Divide" />
      <Reset labelInput="Reset Input" labelResult="Reset Result" />
      <Result result={ result } />
    </div>
  );
}

export default App;
