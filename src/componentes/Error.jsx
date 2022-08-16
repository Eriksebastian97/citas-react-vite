const Error = ({children}) => {
  return (
    <div className="bg-red-600 text-center text-white p-3 uppercase font-bold mb-6 rounded-lg ">
    <p>{children}</p>
  </div>
  )
}

export default Error