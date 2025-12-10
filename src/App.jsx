import { Routes, Route } from "react-router-dom";
import Principal from "./Principal";
import Uno from "./Uno";
import Dos from "./Dos";
import Tres from "./Tres";
import Cuatro from "./Cuatro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/uno" element={<Uno />} />
      <Route path="/dos" element={<Dos />} />
      <Route path="/tres" element={<Tres />} />
      <Route path="/cuatro" element={<Cuatro />} />
    </Routes>
  );
}

export default App;