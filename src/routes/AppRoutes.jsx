import { Navigate, Route, Routes} from 'react-router-dom';


import { LoginPage } from '../auth';
import { Marvel,Dc } from '../heroes';
import { Navbar } from '../ui';




export const AppRouter = () => {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="Marvel" element={ <Marvel/>}/>
                <Route path="Dc" element={ <Dc/>}/>

                <Route path="login" element= { <LoginPage/> }/>
                
                <Route path="/" element= { <Marvel/> }/>
            </Routes>
        </>
    )
}