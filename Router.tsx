import React, { useContext } from "react";
import Home from './src/assets/pages/Home'
import Teste from './src/assets/pages/Teste'
import CadLivro from "./src/assets/pages/CadLivro";
import { BrowserRouter as Router, Routes, Route, Navigate, redirect, useNavigate } from "react-router-dom";
import { Context } from "./src/assets/contexts/Autorizacao";
import Login from "./src/assets/components/Login";
import PRoutes from "./src/assets/components/PRoutes";


function AppRoutes() {
    const { autenticado } = useContext(Context);

    /*
    if (autenticado) {
        return (
            <Router>
                <Routes>
                    <Route path="/Listagem" element={<Home/>}></Route>
                    <Route path="/Livro/" element={<CadLivro/>}></Route>
                    <Route path="/Livro/:id" element={<CadLivro />} />
                </Routes>
            </Router>
        )
    } */

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Teste/>}></Route>
                <Route path="/*" element={<Navigate to={"/"} />}></Route>
                <Route element={<PRoutes />}>
                    <Route path="/Listagem" element={<Home/>}></Route>
                    <Route path="/Livro/" element={<CadLivro/>}></Route>
                    <Route path="/Livro/:id" element={<CadLivro />} />
                </Route>
            </Routes>
        </Router>
    )
    
    
}

export default AppRoutes