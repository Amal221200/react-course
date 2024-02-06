// import UseState from "./Hooks/01 UseState"
// import UseEffect from "./Hooks/02 UseEffect"

import StateContextProvider from "./Context/StateContext"
import UseContext from "./Hooks/03 UseContext"

function App() {

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      <StateContextProvider>
        <UseContext />
      </StateContextProvider>
    </main>
  )
}

export default App
