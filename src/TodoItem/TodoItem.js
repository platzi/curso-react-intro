function TodoItem({ text, completed }) {
    return (
      <div className={`TodoItem ${completed ? 'completed' : ''}`}>
        <input type="checkbox" checked={completed} readOnly />
        <p>{text}</p>
      </div>
    );
  }
  

export { TodoItem }
