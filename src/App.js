
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const handelC = () => {
    setInput("");
  }

  const handel1 = (e) => {
    return setInput((prev) => {
      return prev + e.target.id;
    })
  }

  const handelE = () => {
    let data = eval(input)
    setInput(data);
  }

  return (
    < div className="parent">
      < div className="container" >
        <h2 className='h2'>Calculator</h2>
        <input className='input' type="text" value={input} />
        <span><button className='c' onClick={handelC}>C</button></span>
        <br />
        <span><button className='one' id="1" onClick={(e) => handel1(e)} >1</button></span>
        <span><button className='one' id="2" onClick={(e) => handel1(e)}>2</button></span>
        <span><button className='one' id="3" onClick={(e) => handel1(e)}>3</button></span>
        <span><button className='four' id="/" onClick={(e) => handel1(e)}>/</button></span>
        <br />
        <span><button className='one' id="4" onClick={(e) => handel1(e)}>4</button></span>
        <span><button className='one' id="5" onClick={(e) => handel1(e)}>5</button></span>
        <span><button className='one' id="6" onClick={(e) => handel1(e)}>6</button></span>
        <span><button className='four' id="-" onClick={(e) => handel1(e)}>-</button></span>
        <br />
        <span><button className='one' id="7" onClick={(e) => handel1(e)}>7</button></span>
        <span><button className='one' id="8" onClick={(e) => handel1(e)}>8</button></span>
        <span><button className='one' id="9" onClick={(e) => handel1(e)}>9</button></span>
        <span><button className='four' id="+" onClick={(e) => handel1(e)}>+</button></span>
        <br />
        <span><button className='one' id="." onClick={(e) => handel1(e)}>.</button></span>
        <span><button className='one' id="0" onClick={(e) => handel1(e)}>0</button></span>
        <span><button className='one' onClick={handelE}>=</button></span>
        <span><button className='four' id="*" onClick={(e) => handel1(e)}>*</button></span>
      </div >

    </div>
  );
}

export default App;
