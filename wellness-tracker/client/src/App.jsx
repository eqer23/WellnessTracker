import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import Register from './components/ClientRegistration/ClientRegistration'
import Role from './components/Role/Role'
import Login from './components/LoginForm/LoginForm'
import Dashboard from './components/Dashboard'
import ClientRegistration from './components/ClientRegistration/ClientRegistration'
import ProfessionalRegistration from './components/ProfessionalRegistration/ProfessionalRegistration'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/role" element={<Role />}></Route>
        <Route path="/cregistration" element={<ClientRegistration />}></Route>
        <Route path="/pregistration" element={<ProfessionalRegistration />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import React, { useState, useEffect } from "react";

// import LoginForm from "./components/LoginForm/LoginForm";
// // import Dashboard from "./Components/Dashboard/Dashboard";
// // import Role from "./Components/Role/Role";
// // import ClientRegistration from "./Components/ClientRegistration/ClientRegistration";
// // import ProfessionalRegistration from "./Components/ProfessionalRegistration/ProfessionalRegistration";

// // links all pages together through Routes
// function App() {
//     // const [message, setMessage] = useState("");

//     // useEffect(() => {
//     //     fetch("http://localhost:8000/message")
//     //         .then((res) => res.json())
//     //         .then((data) => setMessage(data.message));
//     // }, []);
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<LoginForm />} exact />
//                     {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
//                     {/* <Route path="/Role" element={<Role />} />
//                     <Route
//                         path="/ClientRegistration"
//                         element={<ClientRegistration />}
//                     />
//                     <Route
//                         path="/ProfessionalRegistration"
//                         element={<ProfessionalRegistration />}
//                     /> */}
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;