import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarMenu from "../components/navbar";
class MainApp extends React.Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>    
             <NavbarMenu/>
                <Routes>
                <Route  path="/" element ={<HomeScreen/>}/>
            </Routes>
             </BrowserRouter>
        );
    }
}
 
export default MainApp;