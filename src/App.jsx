import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/navbar/Navbar";

const App = () => {
  return (
    <div>

      <div>

        {/* Navbar */}
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      
      <div>
        {/* footer */}
      </div>
    </div>
  );
};

export default App;