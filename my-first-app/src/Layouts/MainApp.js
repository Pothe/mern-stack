import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavbarMenu from "../components/navbar";
class MainApp extends React.Component {
    state = {  } 
    render() { 
        return (
            <Router>    
             <NavbarMenu/>
            <Routes>
            <Route />
            </Routes>
             </Router>
        );
    }
}
 
export default MainApp;