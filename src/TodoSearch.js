import './css/TodoSearch.css';
import React from 'react'

function TodoSearch({
    searchValue,
    setSearchValue
}){
    //seelimina el codigo del estado searchValue para colocarlo en el componente App, pero para que esto siga  teniendon su funcion; se llaman los estados como parametros en esta funcion
    return(
        <input 
            className='Buscar'
            placecholder='corta algo'
            // onChange = {(event) => {
            //     console.log('escribiste algo en el search ') //mensjae que aparece cuadno escriba algo
            //     console.log(event) // mensaje que aparece y dice que tipo de evento es
            //     console.log(event.target) // mensja que aparece el tipo de evnto mas detallado
            //     console.log(event.target.value) // mensaje que aparece  el valor del search lo cual dependa del usuario
            // } 8jj
            value = {searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value) //valor del usuario al ñlo que escruba en el search
            }}
        />
    )
}

export {TodoSearch}