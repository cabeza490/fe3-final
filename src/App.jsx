import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Layout from "./Layouot/Layout";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/dentist/:id" element={<Detail />}/>
            <Route path="/favs" element={<Favs />}/>
            <Route path="*" element={<h1>Error 404 - Página no encontrada</h1>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
