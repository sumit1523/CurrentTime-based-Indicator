import React from 'react';
import './App.css';
import TimeIndicator from './TimeIndicator';
import StoreOpenTime from './StoreOpenTime';
import  OpeningHours from './OpeningHours';
import WorkingTime from './WorkingTime';
function App() {
  return (
    <div className="App">
      <TimeIndicator />
      <StoreOpenTime />
      <OpeningHours />
      <WorkingTime />
    </div>
  );
}

export default App;
