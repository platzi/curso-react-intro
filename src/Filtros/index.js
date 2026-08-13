import './Filtros.css';

function Filtros({ filter, setFilter }) {

  return (
    <section className='filter'>
        <div className='container__filter'>
            <span 
              className={`filter__option ${filter === 'all' ? 'filter__option--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos
            </span>

            <span 
              className={`filter__option filter__option--completed ${filter === 'completed' ? 'filter__option--active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completados
            </span>

            <span 
              className={`filter__option filter__option--no-completed ${filter === 'pending' ? 'filter__option--active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pendientes
            </span>
        </div>
    </section>
  );
}

export { Filtros };
