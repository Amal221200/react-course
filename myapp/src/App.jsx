
function App() {

  return (
    <>
      <h1 className="text-center font-bold mx-6">Hello {["Amal", "Sunny", "Harjeet"].reduce((total, name) => `${total} ${name}`)}</h1>
    </>
  )
}

export default App
