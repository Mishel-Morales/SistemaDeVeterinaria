import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Pacientes from "./pages/Pacientes";
import Layout from "./components/Layout";
import Citas from "./pages/Citas";
import Owners from "./pages/Owners";
import Queries from "./pages/Queries";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/propietarios" element={<Owners />} />
          <Route path="/consultas" element={<Queries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
