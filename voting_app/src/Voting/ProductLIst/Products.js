import React from "react";
import './style.css';

class Product extends React.Component{
    render(){
       const {item}= this.props
      
        return(
          <>
      <div className="container-fluid">        
         <div className="row">
            <div className="col-md-3">sadfsdaf</div>
             <div className="col-md-9">sadfsdaf</div>
         </div>
       
      </div>


     </>
        )
    }
}

export default Product;