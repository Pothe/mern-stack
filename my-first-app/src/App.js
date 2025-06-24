import logo from './logo.svg';
import './App.css';
import Navbarmenu from './components/navbar';
import Homescreen from './pages/Homescreen';
import AboutScreen from './pages/Aboutscreen';
import PriceScreenn from './pages/Costscreen';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
   return (
    <BrowserRouter>
      <Navbarmenu/>
     <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        <Route path='/cost' element={<PriceScreenn/>}/>       
     </Routes>
    </BrowserRouter>
  );
}

export default App;
