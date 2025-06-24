import React from "react";
import { Link } from "react-router-dom";

function Navbarmenu(){
    return(


        <div className="container-fluid bg-primary ">
        <div className="container">
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  <Link to={'/'} className="navbar-brand">MySite</Link>  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto text-white">
        <li class="nav-item">
          
           <Link to={'/'} className="nav-link active text-white">Home</Link>  
          
        </li>
        <li class="nav-item">
      
             <Link to={'/about'} className="nav-link">About</Link>  
        </li>
       <li class="nav-item">
      
             <Link to={'/cost'} className="nav-link">Price</Link>  
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
    )
}

export default Navbarmenu;