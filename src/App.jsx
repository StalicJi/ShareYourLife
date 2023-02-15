import React from "react";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";

const App = () => {
  // 確認是否有登入註冊user
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/ShareYourLife" element={<Home />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
        <Route
          path="/settings"
          element={user ? <Settings /> : <Register />}
        ></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
