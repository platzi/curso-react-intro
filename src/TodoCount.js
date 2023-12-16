import './css/TodoCount.css';


function TodoCount({total, completed}){
    return(
        <h1 style={{
            
        }}>Ya completaste {completed} de {total} TODO's</h1>
    )
}

export {TodoCount}