import React from 'react';
import './App.css';
import TimeIndicator from './TimeIndicator';
import StoreOpenTime from './StoreOpenTime';
import  OpeningHours from './OpeningHours';
function App() {
  return (
    <div className="App">
      <TimeIndicator />
      <StoreOpenTime />
      <OpeningHours />
    </div>
  );
}

export default App;
