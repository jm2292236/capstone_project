import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css"
import { Button } from "../styles";

import Admin from "./Admin";
import Lookup from "./Lookup";
import MyProfile from "./MyProfile";
import Error from "./Error";
import Login from "./Login";
import Pricing from "./Pricing";
import OwnerList from "./OwnerList";
import FAQList from "./FAQList";

function App() {
    const [user, setUser] = useState(null);
    // const navigate = useNavigate()

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

                <Link to="/home">Properties</Link>
                <Link to="/owners">Owners</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/faq">FAQ</Link>
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
                <Route path="/home" element={<Lookup />} />
                <Route path="/owners" element={<OwnerList />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<FAQList />} />
                <Route path="/profile" element={<MyProfile user={user} onUpdate={setUser} />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
