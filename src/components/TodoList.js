// Este componente usa la prop especial "children".
// Todo lo que pongas entre <TodoList> y </TodoList> en App.js
// llegará aquí como props.children.
function TodoList({ children }) {
     return (
          <section>
               <ul>
                    {children}
               </ul>
          </section>
     );
}

export { TodoList };
