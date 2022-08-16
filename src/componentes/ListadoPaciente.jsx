
import Pacientes from "./Pacientes";


const ListadoPaciente = ({ paciente , setPacientess, eliminarPaciente}) => {

 
  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">
      {paciente && paciente.length ? (
        <>
          <h2 className="font-black text-3xl text-center">listado paciente</h2>
          <p className="text-lg mt-5 mb-6 text-center">
            Administras tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {paciente.map((paciente) => {
            return <Pacientes key={paciente.id}
             paciente={paciente} 
             setPacientess={setPacientess}
             eliminarPaciente={eliminarPaciente}
             />;
             
          })}
        </>
      ) : (
        <>
        
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-6 text-center">
            Comienza agregando paciente{" "}
            <span className="text-indigo-600 font-bold">Apareceran en este lugar</span>
          </p>
        
        </>
      )}
    </div>
  );
};

export default ListadoPaciente;
