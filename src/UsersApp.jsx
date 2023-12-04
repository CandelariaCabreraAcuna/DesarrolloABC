import { LoginPage } from "./auth/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";

export const UsersApp = () => {

    const {index, handlerLogin, handlerLogout} = useAuth();

    return (
        <Routes>
            {
            index.isAuth
                ? ( 
                    <Route path='/*' element={ <UserRoutes index={index} handlerLogout={handlerLogout} /> }/>
                  ) 
                : 
                <>
                <Route path='/index' 
                        element={<LoginPage 
                        handlerLogin={handlerLogin} />}/>
                <Route path='/*' element={ <Navigate to={"/index"}/> }/>
                </>
                   
            }
    
        </Routes>
    );
}