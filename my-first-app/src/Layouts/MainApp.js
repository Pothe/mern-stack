import React from "react";
import ProductScreen from "../pages/Products/Product";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarMenu from "../components/navbar";
class MainApp extends React.Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>    
             <NavbarMenu/>
                <Routes>
                <Route  path="/product" element ={<ProductScreen/>}/>
            </Routes>
             </BrowserRouter>
        );
    }
}
 
export default MainApp;