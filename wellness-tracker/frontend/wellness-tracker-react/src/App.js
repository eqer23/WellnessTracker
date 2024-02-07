// import logo from "./logo.svg";
// import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState, useEffect } from "react";

import LoginForm from "./Components/LoginForm/LoginForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Role from "./Components/Role/Role";
import ClientRegistration from "./Components/ClientRegistration/ClientRegistration";
import ProfessionalRegistration from "./Components/ProfessionalRegistration/ProfessionalRegistration";

// links all pages together through Routes
function App() {
    // const [message, setMessage] = useState("");

    // useEffect(() => {
    //     fetch("http://localhost:8000/message")
    //         .then((res) => res.json())
    //         .then((data) => setMessage(data.message));
    // }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginForm />} exact />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Role" element={<Role />} />
                    <Route
                        path="/ClientRegistration"
                        element={<ClientRegistration />}
                    />
                    <Route
                        path="/ProfessionalRegistration"
                        element={<ProfessionalRegistration />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginForm from "./Components/LoginForm/LoginForm";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Role from "./Components/Role/Role";
// import ClientRegistration from "./Components/ClientRegistration/ClientRegistration";

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<LoginForm />} exact />
//                     <Route path="/Dashboard" element={<Dashboard />} />
//                     <Route path="/Role" element={<Role />} />
//                     <Route
//                         path="/ClientRegistration"
//                         element={<ClientRegistration />}
//                     />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

// starter code

// function App() {
//     return (
//         <div className="App">
//             <LoginForm />
//             <Dashboard />
//         </div>
//     );
// }

/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>
</header>; */
