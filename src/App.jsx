

import { Navbar, Sidebar } from './components/index';


function App() {

  return (
    <div className='w-full bg-primary overflow-hidden'>
      <div className='px-8 h-screen pt-14 '>
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[0] position blur-[100px] opacity-75"/>
        
          <Sidebar/>
          <Navbar/>

      </div>
    </div>
  )
}

export default App
