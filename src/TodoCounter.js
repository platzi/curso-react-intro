/*function TodoCounter(porp) {
    porp.completed 
    porp.total
*/

function TodoCounter({total, completed}) {

    return(
        <h1> You have completed {completed} of {total} all</h1>
    )
}


export {TodoCounter}