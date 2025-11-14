import { Route, Routes } from "react-router-dom";
import Faqpage from "../pages/Faq";
import Home from "../pages/Home";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/faq" element={<Faqpage/>}/>            
            <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
    )
}
export default Router;