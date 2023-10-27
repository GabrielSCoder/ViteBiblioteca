import React from "react";
import Home from './src/assets/pages/Home'
import Teste from './src/assets/pages/Teste'
import CadLivro from "./src/assets/pages/CadLivro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Teste" element={<Teste/>}></Route>
                <Route path="/Livro/" element={<CadLivro/>}></Route>
                <Route path="/Livro/:id" element={<CadLivro />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes