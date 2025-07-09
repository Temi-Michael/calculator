import './App.css';
import { useState } from 'react';
import Add from './component/Add';
import Division from './component/Division';
import Input from './component/Input';
import Multiply from './component/Multiply';
import Reset from './component/Reset';
import Result from './component/Result';
import Subtract from './component/Subtract';
import Footer from './component/Footer';

function Apps() {

  const [values, setValues] = useState({
    value1: '',
    value2: '',
  })

  const handleValuesChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const [result, setResult] = useState('');


  const handleOperation = (operation) => {
    const v1 = Number(values.value1) || 0;
    const v2 = Number(values.value2) || 0;
    switch (operation) {
      case 'add':
        setResult(v1 + v2);
        break;
      case 'subtract':
        setResult(v1 - v2);
        break;
      case 'multiply':
        setResult(v1 * v2);
        break;
      case 'division':
        let ans = (v1 / v2)
        setResult(ans.toFixed(4));
        break;
      default:
        break;
    }
  };

  const handleResetInput = () => {
    setValues({ value1: '', value2: '' });
  };

  const handleResetResult = () => {
    setResult('');
  };

  const reset = () => {
    setValues({ value1: '', value2: '' });
    setResult('');
  }

  return (
    <div className='app'>
      <h1>Simple Calculator App</h1>
      <Input values={values} onChanges={handleValuesChange} />
      <div id='operations'>
        <Add onClick={() => handleOperation('add')} label="Add" />
        <Subtract onClick={() => handleOperation('subtract')} label="Subtract" />
        <Multiply onClick={() => handleOperation('multiply')} label="Multiply" />
        <Division onClick={() => handleOperation('division')} label="Divide" />
      </div>
      <Reset labelInput="Reset Input" labelResult="Reset Result" reset="Reset" onReset={reset} onResetInput={handleResetInput} onResetResult={handleResetResult} />
      <Result result={result} />
      <Footer />
    </div>
  );
}

export default Apps;