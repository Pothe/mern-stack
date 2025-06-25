import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
class ProductList extends React.Component {
    
    render() { 
        return (
            <>
             <div className="g-1">
             
                <div className="row bg-light m-lg-auto">
                <div className="col-3">
                   <div className="img-box">
                       <span> រូបទី {this.props.id}</span>    
                   </div>

                </div>
                <div className="col-9 ">
                    <i className="bi bi-caret-up-fill"onClick={()=>this. HandleClickVoteup(this.props.id)}></i>
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