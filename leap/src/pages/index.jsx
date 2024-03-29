import { useState } from 'react';

export default function Index() {

    const [on, setOn] = useState(true);
    
    const handleClick = () => {
        setOn(!on);
    };

    const [number, setNumber] = useState(1);

    const handleIncrement = () => {
        setNumber(number + 1);
    }
    
    const handleDecrement = () => {
       setNumber(number - 1); 
    }

    const styles = {
        backgroundColor: on ? 'red' : 'green'
    };   
    

  return (
    <div>
      <div className="bg-slate-500 py-8">khbjhbhjbkjhbhb
        <button onClick={handleClick} className="w-20 max-w-3 bg-slate-500">
          {on ? 'ON' : 'OFF'}
        </button>
      </div>
      <div>
        <p>Count: {number}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
} 
