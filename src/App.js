
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Settings from "./components/pages/settings/Settings";
import TopBar from "./components/topbar/TopBar";
import Write from "./components/write/Write";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Singlepost from "./components/singlepost/Singlepost";

function App() {
  const user = false;
  return (

    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Singlepost />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/home" element={user ? <Register /> : <Home />} />
        <Route path="/home" element={user ? <Login /> : <Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single />} />


      </Routes>
    </Router>





  );
}

export default App;
