import { useState } from "react"
import { Alunos } from "./components/Alunos"

import UserProvider from "./contexts/user"
import { Footer } from "./components/Footer"
function App() {
  
  return (
    <UserProvider>
      <div>
        <h1>Sistema Acadêmico</h1>
        <br />
        <hr />

        <Alunos/>
      </div>
      <Footer/>
    </UserProvider>
  )
}

export default App
