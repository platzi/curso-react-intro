import './TodoList.css';

function TodoList({ children }) {
  return (
    <div className='divContenier'>
      <ul className="TodoList">{children}</ul>
    </div>
  );
}
export { TodoList };