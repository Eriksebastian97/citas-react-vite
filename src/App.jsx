import { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import ListadoPaciente from "./componentes/ListadoPaciente";

function App() {
  const [paciente, setPaciente] = useState(
    JSON.parse(localStorage.getItem("paciente")) ?? []
  );
  const [pacientess, setPacientess] = useState({});

  useEffect(() => {
    localStorage.setItem("paciente", JSON.stringify(paciente));
  }, [paciente]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = paciente.filter(
      (pacientess) => pacientess.id !== id
    );
    setPaciente(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientess={pacientess}
          setPacientess={setPacientess}
        />
        <ListadoPaciente
          paciente={paciente}
          setPacientess={setPacientess}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
