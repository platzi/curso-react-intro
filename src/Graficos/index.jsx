import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BsFillDashCircleFill, BsCheckSquareFill, BsList, BsPencilSquare, BsBullseye } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import 'chart.js/auto';
import './Graficos.css';

function Graficos({ total, completed, theme }) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  const completedColor = theme === 'dark' ? '#10b981' : '#059669';
  const pendingColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.06)';
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  // Chart data
  const data = {
    labels: ['Completados', 'Pendientes'],
    datasets: [
      {
        data: [completed, total - completed],
        backgroundColor: [completedColor, pendingColor],
        borderColor: [completedColor, borderColor],
        borderWidth: 1,
        hoverBackgroundColor: [completedColor, pendingColor],
      },
    ],
  };

  const chartOptions = {
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: true,
  };

  return (
    <section className="containerCircle">
      <div className="Circle">
        <Doughnut data={data} options={chartOptions} />
      </div>

      <div className="progress barra-circle" role="progressbar" aria-label="Progreso de tareas" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: `${percentage}%` }}>
          {percentage > 0 ? `${percentage.toFixed(0)}%` : '0%'}
        </div>
      </div>

      <div className="instructions-card">
        <h4>Guía Rápida</h4>

        <div className="instruction-item">
          <AiFillPlusCircle className="instruction-icon create" />
          <p className="mb-0">
            <strong>Crear Tarea:</strong> Presiona el botón flotante circular de la esquina inferior derecha.
          </p>
        </div>

        <div className="instruction-item">
          <BsCheckSquareFill className="instruction-icon check" />
          <p className="mb-0">
            <strong>Completar:</strong> Haz clic en el ícono de check para marcar la tarea como realizada.
          </p>
        </div>

        <div className="instruction-item">
          <BsFillDashCircleFill className="instruction-icon delete" />
          <p className="mb-0">
            <strong>Eliminar:</strong> Haz clic en el ícono de eliminar para borrar la tarea de la lista.
          </p>
        </div>

        <div className="instruction-item">
          <BsPencilSquare className="instruction-icon edit" />
          <p className="mb-0">
            <strong>Editar:</strong> Abre el modal para modificar el texto.
          </p>
        </div>

        <div className="instruction-item">
          <BsBullseye className="instruction-icon focus" />
          <p className="mb-0">
            <strong>Enfoque:</strong> Activa el panel de Pomodoro y desplaza la pantalla arriba.
          </p>
        </div>

        <div className="instruction-item">
          <BsList className="instruction-icon drag" />
          <p className="mb-0">
            <strong>Ordenar:</strong> Arrastra desde el tirador izquierdo para cambiar posiciones.
          </p>
        </div>
      </div>
    </section>
  );
}

export { Graficos };
