import React from "react";
import "./App.css";
import {NavBar} from "./components/navBar";
import { Banner} from "./components/banner";
import { Skills} from "./components/skills";
import { Projects} from "./components/projects";
import { Contact } from "./components/contact";

import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
  <div className="App">
   
   < NavBar />
   < Banner />
   < Skills />
   < Projects />
   < Contact />
   <Footer/>
  </div>
  );
}



export default App;
