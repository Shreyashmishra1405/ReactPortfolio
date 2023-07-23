import Navbar from "./components/Navbar";
import "./App.scss";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useState } from "react";
import Menu from "./components/Menu";
function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="app">
        <Navbar menu={menu} setMenu={setMenu}/>
        <Menu menu={menu} setMenu={setMenu} />
        <div className="sections">
          <Intro />
          {/* <Portfolio /> */}
           <Works /> 
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
