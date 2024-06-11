

import { Navbar, Sidebar } from './components/index';


function App() {

  return (
    <div className='w-full bg-primary overflow-hidden'>
      <div className='px-8 h-screen pt-14 '>
        
          <Sidebar/>
          <Navbar/>

      </div>
    </div>
  )
}

export default App
