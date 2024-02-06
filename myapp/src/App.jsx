// import UseState from "./Hooks/01 UseState"
// import UseEffect from "./Hooks/02 UseEffect"

// import StateContextProvider from "./Context/StateContext"
// import UseContext from "./Hooks/03 UseContext"

import UseReducer from "./Hooks/04 UseReducer"

function App() {

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <StateContextProvider>
        <UseContext />
      </StateContextProvider> */}
      <UseReducer />
    </main>
  )
}

export default App
