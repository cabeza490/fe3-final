import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Layout from "./Layouot/Layout";


function App() {
  return (
      <div className="App">
        <Routes>
          <Rouote path="/" element={Layout} >
            <Rouote />
            <Rouote />
          </Rouote>
        </Routes>
          <Navbar/>
          <Footer/>
      </div>
  );
}

export default App;
