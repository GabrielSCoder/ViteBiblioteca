import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "../contexts/Autorizacao";

function PRoutes() {
    const {autenticado} = useContext(Context)

    return (
        autenticado ? <Outlet /> : <Navigate to={"/login"}/>
    )
}

export default PRoutes