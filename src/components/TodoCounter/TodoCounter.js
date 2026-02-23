import './TodoCounter.css';

function TodoCounter({ completed, total }) {
     return (
          <div className="TodoCounter">
               <div className="TodoCounter__card TodoCounter__card--yellow">
                    <p className="TodoCounter__number">{completed}</p>
                    <p className="TodoCounter__label">Tareas<br />Completadas</p>
               </div>

               <div className="TodoCounter__card TodoCounter__card--blue">
                    <p className="TodoCounter__number">{total}</p>
                    <p className="TodoCounter__label">Tareas<br />en Total</p>
               </div>
          </div>
     );
}

export { TodoCounter };
