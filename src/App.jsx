import { Navbar, Sidebar } from "./components/index";
import { Home, Contact } from "./pages/index";

function App() {
  return (
    <div className="w-full bg-primary overflow-hidden flex justify-center">
      <div className="max-w-[1600px] w-full  mt-12">
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[1] position blur-[100px] opacity-75" />
        <div className="bg-radial-gradient w-[250px] h-[250px] fixed z-[0] position-2 blur-[100px] opacity-30" />
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full h-auto flex">
          <div className=" text-color montserrat w-full Container z-[1] pl-[378px] max-[1475px]:pl-10 ">
            <Navbar />
            <Home />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
