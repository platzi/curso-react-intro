import './TodoCounter.css';
import React from "react";
import { TodoContext } from '../../TodoContext';


function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext)
  const percentage = totalTodos === 0 ? (totalTodos === 0 && completedTodos === 0 ? 0 : 0) : Math.round((completedTodos / totalTodos) * 100);

  // SVG properties for the circular progress
  const size = 250;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className='todo-counter-container'>
      <div className='circular-progress'>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1E56" />
              <stop offset="50%" stopColor="#FFAC41" />
              <stop offset="100%" stopColor="#FF1E56" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track */}
          <circle
            className="circle-background"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />

          {/* Progress Circle */}
          <circle
            className="circle-progress"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="url(#circleGradient)"
            style={{ filter: 'url(#glow)' }}
          />
        </svg>

        <div className="counter-content">
          <span className="percentage">{percentage}%</span>
          <span className="label">COMPLETADO</span>
        </div>

        {/* Decorative particles to match the image */}
        <div className="particles">
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
          <div className="particle p5"></div>
          <div className="particle p6"></div>
        </div>
      </div>

      {totalTodos === completedTodos && totalTodos !== 0 && (
        <h2 className="congrats-msg">¡Felicidades! Has completado todas tus tareas</h2>
      )}
    </div>
  );
}

export { TodoCounter };
