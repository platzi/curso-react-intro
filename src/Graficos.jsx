import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './Graficos'

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
    <section className="container mb-5" >
      <div className='Circle'>
        <Doughnut data={data} />
      </div>

      <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-info" style={{ width: `${res.toFixed(2)}%` }}>{ res }%</div>
      </div>
      <div>
        <p>Textos</p>
      </div>
      <div>
        <p>Textos</p>
      </div>
    </section>
  );
}

export { Graficos };

//Vamos hacer la prueba si no funciona podemos regresar un commit atras
