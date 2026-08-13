import React from 'react';
import './TodoCounterLoading.css';

function TodoCounterLoading() {
  return (
    <div className="CounterLoading-container">
      <div style={{ width: '60%', height: '14px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }}></div>
      <div style={{ width: '40%', height: '10px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)' }}></div>
    </div>
  );
}

export { TodoCounterLoading };