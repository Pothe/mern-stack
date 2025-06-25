import React from "react";
import ProductScreen from "../pages/Products/Product";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarMenu from "../components/navbar";
class MainApp extends React.Component {
    state = {  } 
    render() { 
        return (

            <div className="container">
            <BrowserRouter>    
             <NavbarMenu/>
                <Routes>
                <Route  path="/" element ={<ProductScreen/>}/>
            </Routes>
             </BrowserRouter>
             </div>
        );
    }
}
 
export default MainApp;