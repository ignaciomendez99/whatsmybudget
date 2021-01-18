import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, setNombre] = useState('');

    const[ cantidad, setCantidad ] = useState(0);

    const [error, setError] = useState(0);


    //FUNCION QUE SE EJECUTA CUANDO EL USUARIO AGREGA EL GASTO

    const agregarGasto = (e) =>{
        e.preventDefault()

        if(nombre.trim() === '' || isNaN(cantidad) || cantidad <= 0 ){
            setError(true);
            return;
    }

    setError(false)

    //CONSTRUIR EL OBJETO DE GASTO

    const gasto ={
        nombre,
        cantidad,
        id: shortid.generate()
    }

    //PASAR EL GASTO AL COMPONENTE PRINCIPAL

    guardarGasto(gasto);
    guardarCrearGasto(true)

    //RESETEAR EL FORM

    setNombre('');
    setCantidad(0)
    
    }
    return ( 

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>

            {error ? <Error mensaje="¡El gasto ingresado no es válido!"/> : null}

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}

                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />


        </form>
     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;