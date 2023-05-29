import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import Sobre from "./Sobre";
import Contact from "./Contact";

function App() {
  return (
  <div>
    <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/Sobre" element={<Sobre/>}/>
 <Route path="/Contact" element={<Contact/>}/>
 </Routes>
 </BrowserRouter>
    
  </div>
    )
}

export default App