import React from "react";
import NavBar from "./component/NavBar";
import './App.css';
import Banner from "./component/Banner";
import Rowpost from "./component/Rowpost";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost/>
    </div>
  );
}

export default App;
