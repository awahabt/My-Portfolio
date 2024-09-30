import { Navbar, Sidebar } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" bg-primary overflow-hidden flex flex-col justify-center">
      <div className="w-[1700px] min-h-[90vh] px-10 border mt-10">
        {/* <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[1] position blur-[100px] opacity-75" />
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[0] position-2 blur-[100px] opacity-30" /> */}
          <Sidebar />
        <div className="flex">
          <div className=" text-color montserrat w-full Container pl-[378px] max-[1475px]:pl-0 ">
            <Navbar />
            <div><Outlet/></div>
            
          </div>
        </div> 
      </div>
     <div><p className="text-end pr-10 text-white montserrat">Made with ❤️</p></div>
    </div>
  );
}

export default App;
