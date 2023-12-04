import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { UsersPage } from "../pages/UsersPage"
import { Navigate } from 'react-router-dom';


export const UserRoutes = ({index, handlerLogout}) => {
    return(
        <>
        <Navbar index={index} handlerLogout={handlerLogout}></Navbar>
        <Routes>
            <Route path="users" element={<UsersPage/>}/>
            <Route path="/" element={<Navigate to="/users"/>}/>
        </Routes>
        </>
    ) 

}