// Props: text (string), completed (boolean)
// El operador ternario (?:) permite renderizar JSX de forma condicional.
function TodoItem({ text, completed }) {
     return (
          <li>
               <span>{completed ? '✅' : '⬜'}</span>
               <p>{text}</p>
          </li>
     );
}

export { TodoItem };
