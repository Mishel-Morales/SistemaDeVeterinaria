import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Pacientes from "./pages/Pacientes";
import Layout from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path="/pacientes" element={<Pacientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
