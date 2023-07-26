function TodoItem(){ // Creando un complemento que por dentro lleva los elementos que se mostraran en el navegador y se podran reutilizar si es necesario
    return(
      <li>
        <span>V</span>
        <p>Pecho Plano</p>
        <span>X</span>
      </li>
    )
}
export {TodoItem} // Todos los componenetes se deben exportar al finalizarlo y una buena practica para no exportarlo por default lo hacemos con la sintaxis de un objeto