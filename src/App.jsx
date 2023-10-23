import dollar from './images/icon-dollar.svg'
import profile from './images/icon-person.svg'
import  { useState } from 'react';
import './App.css';

function App() {
  let x = 0
  const [tipPercentage, setTipPercentage] = useState(null);
  const [tip, calcTip] = useState(x.toFixed(2))
  const [group, groupNum] = useState(1)
  const [gtip, calcGTip] = useState(x.toFixed(2))
  const [amount, setAmout] = useState(null)
  const handleTipChange = (value) => {
    setTipPercentage(value);
  };
  const handleCalc = (e) =>{
    e.preventDefault();
      const out = amount*(tipPercentage/100)
    calcTip(out.toFixed(2))
    calcGTip(out.toFixed(2)*group)

  }
  return (
    <>
      <h1 className='logo'>Spli<br/>tter</h1>
      <div className='card'>
        <div className='userIn'>
          <div className='formItem'>
            <label>Bill</label>
            <div className='item'>
              <b><img src={dollar} alt="dollar icon" /></b>
              <input type='number' onChange={e=> setAmout(e.target.value)} />
            </div>
          </div>

          <div className='formItem'>
            <label>Select Tip %</label>
            <div className='options'>
              {[5, 10, 15, 25, 50].map((tipValue, index) => (
                <div className='option' key={index}>
                  <input type="radio" id={`option${index}`} name="tipSelection" value={tipValue} checked={tipPercentage === tipValue} onChange={() => handleTipChange(tipValue)} />
                  <label htmlFor={`option${index}`} className="radio-button">{tipValue}%</label>
                </div>
              ))}
              <div className='option'>
                <input type="radio" id="customTip" name="tipSelection" checked={tipPercentage === null} onChange={() => handleTipChange(null)} />
                <input type="text" id="customTipInput" placeholder="Custom" className="radio-button" />
              </div>
            </div>
          </div>

          <div className='formItem'>
            <label>Number of People</label>
            <div className='item'>
              <b><img src={profile} alt="profile icon" /></b>
              <input type='number'  onChange={e=> groupNum(e.target.value)} />
            </div>
          </div>
        </div>

        <div className='tipCalc'>
          <div className='tips'>
            <div className='tip'>
              <div className='labels'>
                <label>Tip Amount</label>
                <label>/ person</label>
              </div>
              <p>${tip}</p>
            </div>
            <div className='tip'>
              <div className='labels'>
                <label>Total</label>
                <label>/ person</label>
              </div>
              <p>${gtip}</p>
            </div>
          </div>

          <button onClick={handleCalc}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App;
