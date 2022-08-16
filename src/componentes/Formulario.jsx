import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ paciente, setPaciente , pacientess, setPacientess }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

useEffect(()=>{
if( Object.keys(pacientess).length > 0 ){
setNombre(pacientess.nombre)
setPropietario(pacientess.propietario)
setEmail(pacientess.email)
setAlta(pacientess.alta)
setSintomas(pacientess.sintomas)
}
},[pacientess])



const generarId = ()=>{
  const random = Math.random().toString(36).substr(2)
  const fecha = Date.now().toString(36)

  return fecha + random
}


  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      console.log("hay al menos un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    //objeto de pacientes
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      
    };

    if(pacientess.id){
    //editando registro
    objetoPaciente.id = pacientess.id   
    const pacientesActualizados = paciente.map(pacienteState =>pacienteState.id === pacientess.id ? objetoPaciente : pacienteState )
    setPaciente(pacientesActualizados)
    setPacientess({})

    }else{
      // nuevo registro
      objetoPaciente.id = generarId()
      setPaciente([...paciente, objetoPaciente]);
   
    }
    
    


    
    //reinicar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-6">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-6 mb-10"
      >
        {error && <Error><p>todos lo campon son obligatorios</p></Error>}

        <div className="mb-6">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre y Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="nombre de la mascota"
            className="border-2 w-full p-2 mt-3 placeholder-blue-400 rounded-lg"
            value={nombre}
            onChange={(g) => setNombre(g.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="nombre del propietario"
            className="border-2 w-full p-2 mt-3 placeholder-blue-400 rounded-lg"
            value={propietario}
            onChange={(g) => setPropietario(g.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            EMAIL :
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-3 placeholder-blue-400 rounded-lg"
            value={email}
            onChange={(g) => setEmail(g.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            ALTA :
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-3 placeholder-blue-400 rounded-lg"
            value={alta}
            onChange={(g) => setAlta(g.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            sintomas :
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-3 placeholder-blue-400 rounded-lg"
            placeholder="describe los sintomas"
            value={sintomas}
            onChange={(g) => setSintomas(g.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-color"
          value={pacientess.id ? "Editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
