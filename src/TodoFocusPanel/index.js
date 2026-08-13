import React, { useState, useEffect } from 'react';
import { TodoContext } from '../App/useTodos';
import { BsPlayFill, BsPauseFill, BsArrowCounterclockwise, BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import './TodoFocusPanel.css';

function TodoFocusPanel({ focusedTodo, setFocusedTodo, completeTodo, sendBrowserNotification }) {
  
  // Timer state (25 minutes by default = 1500 seconds)
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [showFinishedModal, setShowFinishedModal] = useState(false);

  // Reset timer if focusedTodo changes
  useEffect(() => {
    if (focusedTodo) {
      setTimeLeft(1500);
      setIsActive(false);
      setShowFinishedModal(false);
    }
  }, [focusedTodo]);

  // Countdown logic
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setShowFinishedModal(true);
      sendBrowserNotification(
        "🎯 ¡Tiempo de Enfoque Terminado!",
        `Has completado la sesión de concentración para: "${focusedTodo?.text}". ¡Es hora de un descanso! ☕`
      );
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, focusedTodo]);

  if (!focusedTodo) return null;

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(1500);
  };

  const handleComplete = () => {
    completeTodo(focusedTodo.text);
    setFocusedTodo(null);
  };

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="focus-panel glass p-4 mb-4 rounded-4">
        <div className="focus-panel-header d-flex justify-content-between align-items-start gap-3">
          <div className="focus-task-info">
            <span className="focus-badge">🎯 Enfoque Activo</span>
            <h3 className="focus-task-text text-truncate-custom">{focusedTodo.text}</h3>
          </div>
          <button 
            className="focus-close-btn" 
            onClick={() => setFocusedTodo(null)}
            title="Quitar enfoque"
          >
            <BsXCircleFill />
          </button>
        </div>

        <div className="focus-timer-section d-flex flex-column align-items-center mt-3">
          <div className={`timer-display ${isActive ? 'pulsing' : ''}`}>
            {formatTime(timeLeft)}
          </div>

          <div className="timer-controls d-flex gap-3 mt-3">
            <button 
              className={`timer-btn play-pause ${isActive ? 'active' : ''}`} 
              onClick={toggleTimer}
              title={isActive ? 'Pausar' : 'Iniciar'}
            >
              {isActive ? <BsPauseFill /> : <BsPlayFill />}
            </button>
            
            <button 
              className="timer-btn reset" 
              onClick={resetTimer}
              title="Reiniciar temporizador"
            >
              <BsArrowCounterclockwise />
            </button>

            <button 
              className="timer-btn complete" 
              onClick={handleComplete}
              title="Marcar como completada"
            >
              <BsCheckCircleFill />
            </button>
          </div>
        </div>
      </div>

      {showFinishedModal && (
        <div className="focus-modal-overlay">
          <div className="focus-modal-content glass">
            <div className="focus-modal-header">
              <h2>🔔 ¡Sesión Completada!</h2>
            </div>
            <div className="focus-modal-body">
              <p className="focus-modal-message">Has terminado tu tiempo de concentración de 25 minutos para la tarea:</p>
              <h3 className="focus-modal-task-title">"{focusedTodo?.text}"</h3>
              <div className="focus-rest-box">
                <span className="rest-icon">☕</span>
                <p className="rest-text">Es momento de tomar un descanso de 5 minutos antes de continuar.</p>
              </div>
            </div>
            <div className="focus-modal-footer">
              <button 
                className="focus-modal-btn focus-modal-btn--primary" 
                onClick={() => setShowFinishedModal(false)}
              >
                Entendido
              </button>
              <button 
                className="focus-modal-btn focus-modal-btn--success" 
                onClick={() => {
                  handleComplete();
                  setShowFinishedModal(false);
                }}
              >
                Completar Tarea
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { TodoFocusPanel };
