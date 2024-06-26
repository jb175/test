import './App.css';
import React, { useState } from 'react';
import image from './image/BNP_Paribas_2000.svg.png'; // Import the image

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <a href='https://mabanque.bnpparibas/'>
          <img src={image} alt="Description" style={{ width: '30%'}} /> {/* Adjust width and height as needed */}
        </a>
        test
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;