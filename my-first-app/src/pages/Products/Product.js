import React from "react";
import Database from "../../database/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./ProductIterm";

// import ProductList from "./ProductIterm";
class ProductScreen extends React.Component {

    render() { 
       const  ProductListing = 
               Database.Products.map((product)=>(
               <div className="col-5  bg-light" >
                   <ProductList key={product.id} 
                   id={product.id}
                   title={product.title}
                   description={product.description}
                   votes={product.votes}
                   />
               </div>
                
                
                    
               ))
   

        return (
             <div className="container">
                <div className="row g-1">
                    {ProductListing}
                </div>
               
                    
            
             
            </div>
        );
    }
}
 
export default ProductScreen;