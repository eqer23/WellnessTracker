import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/ClientRegistration/ClientRegistration";
import Role from "./components/Role/Role";
import Login from "./components/LoginForm/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import ClientRegistration from "./components/ClientRegistration/ClientRegistration";
import ProfessionalRegistration from "./components/ProfessionalRegistration/ProfessionalRegistration";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cregister" element={<Register />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/role" element={<Role />}></Route>
                <Route
                    path="/cregister"
                    element={<ClientRegistration />}
                ></Route>
                <Route
                    path="/pregister"
                    element={<ProfessionalRegistration />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
