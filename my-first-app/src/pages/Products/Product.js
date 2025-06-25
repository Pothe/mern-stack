import React from "react";
import Database from "../../database/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./ProductIterm";

// import ProductList from "./ProductIterm";
class ProductScreen extends React.Component {
   
   constructor(props) {
  super(props);
  this.state = {
    ProductItemList: [],
  };
}

componentDidMount() {
  this.setState({ ProductItemList: [...Database.Products] });
}

        HandleProductVote(productid){
            console.log(productid + " was voted")
        }

        HandleClickVoteup=(id)=>{
            this.HandleProductVote(id)
        }

      

   render() { 
  const products = this.state.ProductItemList || [];

  const ProductListSort = [...products].sort((a, b) => a.votes - b.votes);

  const ProductListing = ProductListSort.map(product => (
    <div className="col-sm-12 col-md-6 col-lg-6" key={product.id}>
      <ProductList 
        id={product.id}
        title={product.title}
        description={product.description}
        votes={product.votes}                   
        onVote={this.HandleProductVote}
      />
    </div>
  ));

  return (
    <div className="container">
      <div className="row g-1">{ProductListing}</div>   
    </div>
  );
}

}
 
export default ProductScreen;