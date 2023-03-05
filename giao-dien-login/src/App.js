import "./styles.css";
import "./script.css";
import FormLogin from "./pages/FormLogin.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import DanhMucPage from "./pages/DanhMucPage";
import DanhMucMidPage from "./pages/DanhMucMidPage";
import KhoaPage from "./pages/KhoaPage";
import LopPage from "./pages/LopPage"
import MidPage from "./pages/MidPage";
import QuanTriPage from "./pages/QuanTriPage";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FormLogin/>}/>
        <Route path="/MainPage" element={<MainPage/>}/>
        <Route path="/404" element={<NotFoundPage/>} />
        <Route path="/DanhMucPage" element={<DanhMucPage/>}/>
        <Route path="/DanhMucMidPage" element={<DanhMucMidPage/>}/>
        <Route path="/KhoaPage" element={<KhoaPage/>}/>
        <Route path="/LopPage" element={<LopPage/>}/>
        <Route path="/MidPage" element={<MidPage/>}/>
        <Route path="/QuanTriPage" element={<QuanTriPage/>}/>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  );
}

