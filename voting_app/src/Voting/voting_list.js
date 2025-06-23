import React from "react";
import Product from "./ProductLIst/Products";

class Voting extends React.Component{
    render(){

        const data ={
            name:"pothe",
            sex:"M",
            description:" i am teacher computer at Idea Source School" ,            
        }
        
        return(
            <div>    
            {/* pass data to child component by props*/}            
                <Product item ={data}  />
            </div>
        )
    }
}
export default Voting;