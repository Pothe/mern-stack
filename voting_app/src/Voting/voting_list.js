import React from "react";
import Product from "./ProductLIst/Products";

class Voting extends React.Component{
    render(){

        const data ={
            name:"pothe",
            sex:"M"
        
            
        }
        return(
            <div>                
                <Product item ={data}  />
            </div>
        )
    }
}
export default Voting;