import React from "react";
import './style.css';

class Product extends React.Component{
  
    render(){

    //   const {iterm } = this.props;
        return(
        <>
        <div class="product-card">
  <div class="product-img">
   <img src={this.props.img} alt={this.props.img} class="img"/>
  </div>
  <div class="flex-grow-1">
    <div class="d-flex align-items-center mb-1">
      <i class="bi bi-caret-up-fill text-primary me-1"></i>
      <span class="vote-count me-2">{this.props.vote}</span>
    </div>
    <h6 class="mb-1"><a href="#" class="text-decoration-none">{this.props.title}</a></h6>
    <p class="mb-1">{this.props.des}</p>
    <div class="product-meta">
      Submitted by: <img src={this.props.img} alt="Avatar" class="avatar"/>
    </div>
  </div>
</div>
        </>
        )
    }
}

export default Product;