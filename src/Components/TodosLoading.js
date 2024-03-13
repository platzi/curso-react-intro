import '../Styles/TodosLoading.css';

function TodosLoading() {
  return(
    <div className="card">
      <div className="card__skeleton card__checkbox"></div>
      <div className="card__skeleton card__title"></div>
      <div className="card__skeleton card__x"></div>
    </div>
  );
}


export {TodosLoading};