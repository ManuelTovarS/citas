import React, { Fragment, useState } from "react";
import Formulario from "./Components/Formulario";
import Cita from "./Components/Cita";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //Función que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administrar tus citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
            <div className="one-half column">
            <h2>{titulo}</h2>
              {citas.map((cita) => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
