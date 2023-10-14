import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BsFillDashCircleFill, BsCheckSquareFill } from "react-icons/bs";
import 'chart.js/auto';
import '.'

function Graficos({ total, completed, }) {

  const res = (completed / total)*100;

  //grafico
  const data = {
    labels: ['Completado', 'Restante'],
    datasets: [
      {
        data: [completed, total - completed],
        backgroundColor: ['#61dafa', '#212529'],
        hoverBackgroundColor: ['#61dafa', '#212529'],
      },
    ],
  };

  return (
    <section className="container1 mb-5" >
      <div className='Circle'>
        <Doughnut data={data} />
      </div>

      <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-info" style={{ width: `${res.toFixed(2)}%` }}>{ res.toFixed(2) }%</div>
      </div>
      <div>
        <p>Instrucciones: Para crear una nueva tarea debe precionar 
            el botón azul circular, el cual se encuentra
            en la parte inferior izquierda de su pantalla.  </p>
      </div>
      <div>
      <span className='container-icons'>
        <div>
          <BsFillDashCircleFill/>
          <p>Eliminar: Cuando necesites borrar una tarea puedes dar click a este icono</p>
        </div>

        <div>
          <BsCheckSquareFill/>
          <p>Completado: Cuando hayas finalizado una tarea da click a este icono.</p>
        </div>
      </span>
      </div>
    </section>
  );
}

export { Graficos };

