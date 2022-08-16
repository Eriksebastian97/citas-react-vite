const Pacientes = ({ paciente, setPacientess, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;

const handleEliminar=()=>{
  const respuesta = confirm("deseas eliminar este paciente ?");
  
  if(respuesta){
eliminarPaciente(id)
  }
}

  return (
    <div className="mx-5 my-5 bg-white shadow-xl px-6 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        NOMBRE : <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        PROPIETARIO :{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        EMAIL : <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        FECHA ALTA : <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas : <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-evenly mt-10">
        <button
          type="button"
          className="py-3 px-10 bg-indigo-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPacientess(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-3 px-10 bg-indigo-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacientes;
