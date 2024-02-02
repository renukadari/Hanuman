import React from "react";
import Home from "./pages/Home/Home";
import Read from "./pages/Read/Read";
import { Route, Routes } from "react-router-dom";
import Listen from "./pages/Listen/Listen";
import Watch from "./pages/Watch/Watch";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
      <ToastContainer transition={Slide}  />
    </>
  );
}

export default App;
