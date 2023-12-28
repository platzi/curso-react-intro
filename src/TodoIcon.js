import {ReactComponent as CheckSVG} from './svg/check.svg';
import {ReactComponent as DeleteSVG} from './svg/delete.svg';
    //Aquí se importan dos imágenes SVG usando la sintaxis de ReactComponent. Estas imágenes se usan como íconos para la lista de tareas.

const iconType = {
    'check' : <CheckSVG/>,
    'delete' : <DeleteSVG/>
} //Se crea un objeto iconType que asocia cadenas ('check' y 'delete') con los componentes <CheckSVG/> y <DeleteSVG/> respectivamente. Esto permite seleccionar dinámicamente el ícono deseado más adelante en base al tipo.

function TodoIcon({type}){//Se define el componente TodoIcon que recibe una propiedad type. Este componente renderiza un ícono (<span>) con una clase CSS basada en el tipo de ícono que recibe.
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {iconType[type]}
        </span>//Dentro del <span>, se usa iconType[type] para mostrar el componente SVG correspondiente según el tipo proporcionado.
    )
} 


export{ TodoIcon } //Se exporta el componente TodoIcon para que pueda ser utilizado en otras partes de la aplicación.