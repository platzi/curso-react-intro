import React from 'react';

function Graficos({ total, completed, }) {

  const res = (completed / total)*100;

  return (
    <section className="container mb-5">
      <div className="grafico1">Soy un círculo O</div>

      <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-info" style={{ width: `${res.toFixed(2)}%` }}>{ res }%</div>
      </div>
      <div className="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-black" style={{ width: '25%' }}>25%</div>
      </div>
      <div className="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-black" style={{ width: '50%' }}>50%</div>
      </div>
      <div className="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-info" style={{ width: '75%' }}>75%</div>
      </div>
      <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped bg-info" style={{ width: '100%' }}>100%</div>
      </div>
    </section>
  );
}

export { Graficos };

//Vamos hacer la prueba si no funciona podemos regresar un commit atras
