import React from "react";

class Product extends React.Component{
    render(){
       const {item}= this.props
      
        return(
          <>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-1">itemNo.</p>
        <p className="text-xs text-gray-600">
          
        </p>
      </div>


     </>
        )
    }
}

export default Product;