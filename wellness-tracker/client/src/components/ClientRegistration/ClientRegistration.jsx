import React from "react";
import "./ClientRegistration.css";

const ClientRegistration = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Client Registration</h1>

                <div className="client-name">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>

                <div className="other-info">
                    <imput type="text" placeholder="Gender" />
                    <input type="number" placeholder="Age" required />
                    {/* may be incorrect syntax */}
                </div>
            </form>
        </div>
    );
};

export default ClientRegistration;
