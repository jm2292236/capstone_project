import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css"
import { Button } from "../styles";

import Admin from "./Admin";
import Home from "./Home";
import Lookup from "./Lookup";
import MyList from "./MyList";
import MyProfile from "./MyProfile";
import Error from "./Error";
import Login from "./Login";
import Pricing from "./Pricing";

function App() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <Login onLogin={setUser} />;
    // navigate('/home')
  
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
      }

    return (        
        <div className="App">
            <nav>
                <h1>Property Finder</h1>

                <Link to="/home">Home</Link>
                <Link to="/lookup">Lookup</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/profile">My Profile</Link>
                {user.admin ? 
                    <Link to="/admin">Admin</Link>
                    :
                    ""
                }
                <Button variant="outline" onClick={handleLogoutClick}>
                    Logout
                </Button>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/lookup" element={<Lookup />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/profile" element={<MyProfile user={user} onUpdate={setUser} />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
