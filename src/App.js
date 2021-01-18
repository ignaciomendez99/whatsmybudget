import React, { Fragment, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto'



function App() {

  //Definir el state

  const [ presupuesto, setPresupuesto ] = useState(0);

  const [ restante, setRestante ] = useState(0);
  
  //CARGA CONDICIONAL DE COMPONENTES
  const [mostrarpregunta, actualizarPregunta ] = useState(true);

  const [ gastos, setGastos ] = useState([]);

  const [gasto, guardarGasto] = useState({});

  const [crearGasto, guardarCrearGasto] = useState(false)

  //UseEffect que actualiza el presupuesto restante

  useEffect(() => {

    //AGREGA EL NUEVO PRESUPUESTO
    if(crearGasto){
      setGastos([
        ...gastos, 
        gasto
      ]);

      

      const presupuestoRestante = restante - gasto.cantidad;

      setRestante(presupuestoRestante);
      
      guardarCrearGasto(false)
    }

    //RESETEAR A FALSE
    //
  }, [gasto, crearGasto, gastos, restante ]);



  

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
            {mostrarpregunta ? (<Pregunta 
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              actualizarPregunta={actualizarPregunta}
            />)
            :
            (<div className="row">
                <div className="one-half column">
                  <Formulario 
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}

                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>) }
            
            
            
          </div>
        </header>
      </div>

    </Fragment>
    
  );
}

export default App;
