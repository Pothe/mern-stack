import logo from './logo.svg';
import './App.css';
import Navbarmenu from './components/navbar';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function Home(){
    return(
      <h1>HomeScreen</h1>
    )
  }

  function About(){
    return(
      <h1>About</h1>
    )
  }
 function Cost(){
  return(
    <h1>Cost</h1>
  )
 }
  return (
    <BrowserRouter>
      <Navbarmenu/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cost' element={<Cost/>}/>
       
     </Routes>
    </BrowserRouter>
  );
}

export default App;
