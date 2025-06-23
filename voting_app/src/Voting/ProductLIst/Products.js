import React from "react";
import './style.css';

class Product extends React.Component{
  
    render(){

    //   const {iterm } = this.props;
        return(
          <>
      <div className="container-fluid">        
         <div className="row">
            <div className="col-md-3">
             {/* <img src={item.imageurl} alt={item.title}/> */}
            </div>
             <div className="col-md-9">
                <span>{this.props.id}</span>
               <h1>{this.props.title}</h1>
               <p> {this.props.des}</p>
                </div>

          
         </div>
       
      </div>


     </>
        )
    }
}

export default Product;