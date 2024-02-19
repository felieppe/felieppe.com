import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path="/contact" element={ <Contact /> } />

        <Route path="/privacy" element={ <Privacy /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
