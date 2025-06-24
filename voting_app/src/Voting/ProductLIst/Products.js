import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

class Product extends React.Component{
  
    render(){

    //   const {iterm } = this.props;
        return(
        <>
        <div className="product-card">
        <div className="product-img">
        <img src="i.jgp" alt="" className="img"/>
        </div>      
        <div className="flex-grow-1">
            <div className="d-flex align-items-center mb-1">
        
      <i className="bi bi-caret-up-fill text-primary me-1" onClick={() => this.props.onVote(this.props.id)}></i>
     
      <span className="vote-count me-2"> {this.props.vote}</span>
    </div>
    <h6 className="mb-1"><a href="#" className="text-decoration-none" >{this.props.title}</a></h6>
    <p className="mb-1">{this.props.des}</p>
    <div className="product-meta">
      Submitted by: <img src={this.props.img} alt="Avatar" className="avatar"/>
    </div>
  </div>
</div>
        </>
        )
    }
}

export default Product;