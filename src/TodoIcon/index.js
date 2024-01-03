import {ReactComponent as CheckSVG} from './svg/check.svg';
import {ReactComponent as DeleteSVG} from './svg/delete.svg';
    // → Aquí se importan dos imágenes SVG usando la sintaxis de ReactComponent. Estas imágenes se usan como íconos para la lista de tareas.
import './TodoIcon.css'

const iconType = {

    "check": (color) => (
        <CheckSVG 
            className="Icon-svg"  // Clase CSS del SVG
            fill={color}          // Aplicación del color al SVG
        />
    ),

    "delete": (color) => (
        <DeleteSVG 
            className="Icon-svg"  // Clase CSS del SVG
            fill={color}          // Aplicación del color al SVG
        />
    ),
    
};


function TodoIcon({type, color, onClick}){
    //Se define el componente TodoIcon que recibe una propiedad type. Este componente renderiza un ícono (<span>) con una clase CSS basada en el tipo de ícono que recibe.
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
                //  → dependiendo del type del icons que sea, se establecera su css (ya sea check o delete)
            onClick={onClick}> 
                {/* → codigo para que los click de los icons funcionen  */}
                    {iconType[type](color)} 
        </span>//se llama al color como parametro -- Dentro del <span>, se usa iconType[type] para mostrar el componente SVG correspondiente según el tipo proporcionado.
    )
} 


export{ TodoIcon } //Se exporta el componente TodoIcon para que pueda ser utilizado en otras partes de la aplicación.