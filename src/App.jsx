import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
      <div className='px-8'>
        <div>
          <Header/>
        </div>
      </div>
    </div>
  )
}

export default App
