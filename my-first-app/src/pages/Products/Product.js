import React from "react";
import Database from "../../database/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./ProductIterm";

// import ProductList from "./ProductIterm";
class ProductScreen extends React.Component {
    constructor(props){
        super(props);
        this.HandleProductVote = this.HandleProductVote.bind(this)
    }
    
        HandleProductVote(productid){
            console.log(productid + " was voted")
        }

        HandleClickVoteup=(value)=>{
            this.props.onVote(value)
        }

      

    render() { 
       const  ProductListing = 
               Database.Products.map((product)=>(
               <div className="col-sm-12 col-md-6 col-lg-6" >
                   <ProductList key={product.id} 
                   id={product.id}
                   title={product.title}
                   description={product.description}
                   votes={product.votes}
                    onVote={this.HandleProductVote}
                  
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