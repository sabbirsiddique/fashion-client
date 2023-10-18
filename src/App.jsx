import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;