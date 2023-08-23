import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/js/Navbar";
import Home from "./Components/js/Home";
import OurGoal from "./Components/js/OurGoal";
import Team from "./Components/js/Team";
import Services from "./Components/js/Services";
import logo1 from "./Components/img/logo.svg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <OurGoal />
        <Services />
        <Team />
      </BrowserRouter>
      <footer>
        <img id="foot" src={logo1} alt="" />
      </footer>
    </div>
  );
}

export default App;
