import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import Sobre from "./Sobre";
import Contact from "./Contact";
import Footer from "./Footer.jsx";

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
 <Footer/>

  </div>
    )
}

export default App