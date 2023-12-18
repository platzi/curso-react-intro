import './css/TodoSearch.css';

function TodoSearch(){
    return(
        <input 
            className='Buscar'
            placecholder='corta algo'
            onChange = {(event) => {
                console.log('escribiste algo en el search ')
                console.log(event)
                console.log(event.target)
                console.log(event.target.value)
            } 
            }/>
    )
}

export {TodoSearch}