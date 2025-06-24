import React from "react";
import productsData from "./data";
import Product from "./ProductLIst/Products";


class Voting extends React.Component{
   
constructor(props) {
super(props);
this.handleUpVote = this.handleUpVote.bind(this);
}
// handleProductUpVote(productId) {
// console.log(productId + ' was upvoted.');
// }

// voting function 
handleUpVote(id) {
console.log(id +"was voted")
}
      
   
    render(){
    

        // const ProductList = productsData.products.sort((a,b)=>(
        //     a.votes- b.votes
        // ))
    const ProductList =[...productsData.products].sort((a,b)=> a.votes -b.votes);

        const ProductListIterm = ProductList.map((product)=>{
            return(
            <Product key={'product-'+product.id}
            id ={product.id}
            title ={product.title}
            des = {product.description}
            price ={product.price}     
            vote={product.votes}  
            img ={product.url} 
            onVote ={this.handleUpVote}  
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
// const ProductListIterm = products.map((product)=>{
//     return (
//         <Product
//          key={product.id}
//          title ={product.title}
//          des = {product.description}
//          />
//     )
// })
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