import React from 'react';
import '../hojas-de-estilo/Boton.css'

// Desestructuracion
function Boton({texto, esBotonDeClick, manejarClick}){
    return(
        <button
         className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
         onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Boton;