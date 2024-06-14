

import { Container, Sidebar } from './components/index';


function App() {

  return (
    <div className='w-full bg-primary overflow-hidden flex justify-center items-center'>
      <div className='px-8 h-full w-full gap-9 mt-12'>
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[1] position blur-[100px] opacity-75"/>
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[0] position-2 blur-[100px] opacity-30"/>
        
        <div className=''><Sidebar/></div>
          <div className='w-full h-auto flex'><Container/></div>
          
    
      </div>
    </div>
  )
}

export default App
