import React from "react";
import productsData from "./data";
import Product from "./ProductLIst/Products";


class Voting extends React.Component{


    render(){
    
        const ProductListIterm = productsData.map((product)=>{
            return(
            <Product key={product.id}
            title ={product.title}
            des = {product.description}
            price ={product.price}
            // id={product.id}
            />
            )
        })
    //    const products = [
    //     {
    //     id: 1,
    //     title: 'Yellow Pail',
    //     description: 'On-demand sand castle construction expertise.',        
    //     },
    //      {
    //     id: 2,
    //     title: 'Red Pail',
    //     description: 'On-demand sand castle construction expertise.',        
    //     },
    //      {
    //     id: 3,
    //     title: 'Black Pail',
    //     description: 'On-demand sand castle construction expertise.',        
    //     }
    // ];
// const item = products[0];
        return(
            <div>    
            {/* pass data to child component by props*/}            
                {/* <Product 
                id={item.id}
                title ={item.title}
                des={item.description}
                 /> */}

                 {ProductListIterm}
         
               </div>
        )
    }
}
export default Voting;