import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./pages/Dashboard";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import {GestionDeUsuariosProvider} from "./context/GestionDeUsuariosContext"
import ProtectedRoutes from "./ProtectedRoutes";
import "./App.css";
import toast, {Toaster} from 'react-hot-toast'
function App() {
  return (
    <AuthenticationProvider>
      <GestionDeUsuariosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
           
      <Toaster/>
      </GestionDeUsuariosProvider>
    </AuthenticationProvider>
  );
}

export default App;
