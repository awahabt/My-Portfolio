import { useState } from 'react'

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-primary overflow-hidden'>
      <div className='px-8 '>
        <div>
          <Navbar/>
          <Header/>
          <Container/>
        </div>
      </div>
    </div>
  )
}

export default App
