import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import { Gallery, About, Projects, HomePage, Services } from "./components/pages";
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
    </>
  );
}

export default App;
