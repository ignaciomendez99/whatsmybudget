import React, {Fragment, useState} from 'react'
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({ setPresupuesto, setRestante, actualizarPregunta }) => {

    //Definir el state

    const [ cantidad, setCantidad ] = useState(0);

    const [ error, setError ] = useState(false);


    //SUBMIT PARA AGREGAR EL PRESUPUESTO

    const agregarPresupuesto = e => {
        e.preventDefault();

        //VALIDAR QUE EL PRESUPUESTO SEA VALIDO

        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }
    
    setError(false)
    setPresupuesto(cantidad)
    setRestante(cantidad)
    actualizarPregunta(false);

    }


    return ( 

        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;