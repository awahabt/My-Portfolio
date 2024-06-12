

import { Header, Navbar, Sidebar } from './components/index';


function App() {

  return (
    <div className='w-full bg-primary overflow-hidden'>
      <div className='px-8 h-screen pt-14 flex gap-9'>
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[0] position blur-[100px] opacity-75"/>
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[0] position-2 blur-[100px] opacity-30"/>
        
          <Sidebar/>
          <Header/>

      </div>
    </div>
  )
}

export default App
