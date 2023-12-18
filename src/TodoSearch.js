import './css/TodoSearch.css';
import React from 'react'

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');
    console.log('Los usuarios buscan todos de ' + searchValue)//concatenacion de un console.log, se mostaa el codigo ejecutado gacias a la linea 19
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