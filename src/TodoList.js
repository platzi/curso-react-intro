function TodoList(props){
    return (
        <ul>
            {/* Se deben colocar las propiedades necesarias apra tener los hijos  en el componente */}
            {props.children}
        </ul>
    );
  };

export {TodoList};