import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css"

import Admin from "./Admin";
import Home from "./Home";
import Lookup from "./Lookup";
import MyList from "./MyList";
import MyProfile from "./MyProfile";
import Error from "./Error";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <h1>Property Finder</h1>

                    <Link to="/">Home</Link>
                    <Link to="/lookup">Lookup</Link>
                    <Link to="/list">My List</Link>
                    <Link to="/profile">My Profile</Link>
                    <Link to="/admin">Admin</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lookup" element={<Lookup />} />
                    <Route path="/list" element={<MyList />} />
                    <Route path="/profile" element={<MyProfile />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;