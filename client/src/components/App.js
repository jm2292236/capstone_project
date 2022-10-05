import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css"
import { Button } from "../styles";

import Admin from "./Admin";
import Home from "./Home";
import Lookup from "./Lookup";
import MyList from "./MyList";
import MyProfile from "./MyProfile";
import Error from "./Error";
import Login from "./Login";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <Login onLogin={setUser} />;
  
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
      }

    {console.log(user.admin)}
    return (        
        <BrowserRouter>
            <div className="App">
                <nav>
                    <h1>Property Finder</h1>

                    <Link to="/">Home</Link>
                    <Link to="/lookup">Lookup</Link>
                    <Link to="/list">My List</Link>
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
                    <Route path="/" element={<Home />} />
                    <Route path="/lookup" element={<Lookup />} />
                    <Route path="/list" element={<MyList />} />
                    <Route path="/profile" element={<MyProfile user={user} onUpdate={setUser} />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
