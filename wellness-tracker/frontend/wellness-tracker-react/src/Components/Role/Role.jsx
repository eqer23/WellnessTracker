// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./Role.css";

const Role = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [selectedUserRole, setSelectedUserRole] = useState("");

    const handleUserRoleChange = (event) => {
        setSelectedUserRole(event.target.value);
    };

    // when the user clicks submit, we go into this loop?
    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        // will link pages here based on what the user selected
        switch (selectedUserRole) {
            case "client":
                navigate("/ClientRegistration");
                break;
            case "professional":
                navigate("/ProfessionalRegistration");
                break;
            default:
                // handle default case or show an error
                break;
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleRegisterSubmit}>
                <h1>Register</h1>

                {/* client button */}
                <div className="user-roles">
                    <label>
                        <input
                            type="radio"
                            value="client"
                            checked={selectedUserRole === "client"}
                            onChange={handleUserRoleChange}
                        />
                        Client
                    </label>

                    {/* fitness professional button */}
                    <label>
                        <input
                            type="radio"
                            value="professional"
                            checked={selectedUserRole === "professional"}
                            onChange={handleUserRoleChange}
                        />
                        Fitness Professional
                    </label>
                </div>

                {/* submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Role;
