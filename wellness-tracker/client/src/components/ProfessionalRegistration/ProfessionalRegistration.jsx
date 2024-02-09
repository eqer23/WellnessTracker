import React from "react";
import "./ProfessionalRegistration.css";

const ProfessionalRegistration = () => {
    return (
        <div className="wrapper">
            <h1>Professional Registeration</h1>
            <div className="professional-name">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <imput type="text" placeholder="Gender" />
                <input type="number" placeholder="Age" required />
                {/* may be incorrect syntax */}
            </div>

            <div className="other-info">
                {/* probably built in way to get city and state -- loke google maps API
                 but may not need ot go into that much depth for this project */}
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="State" required />
                <input type="text" placeholder="Speciality" required />
                {/* may want to make specuality into a dropdown with pre-selected options?? */}
            </div>
        </div>
    );
};

export default ProfessionalRegistration;
