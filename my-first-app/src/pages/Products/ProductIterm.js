import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
class ProductList extends React.Component {
    
    render() { 
        return (
            <>
             <div className="col-12 g-1">
             
                <div className="row bg-light m-lg-auto">
                <div className="col-3">
                    image

                </div>
                <div className="col-9 ">
                    <i class="bi bi-caret-up-fill"></i>
                    <span>{this.props.votes}</span>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>


                </div>

                </div>
               
             </div>
            </>
        );
    }
}
 
export default ProductList;