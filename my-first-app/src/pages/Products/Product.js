import React from "react";
import Database from "../../database/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./ProductIterm";

// import ProductList from "./ProductIterm";
class ProductScreen extends React.Component {
   
  constructor(props) {
  super(props);  
  this.state = {
    ProductItermList:[], 
  };
 this.HandleClickVoteUp = this.HandleClickVoteUp.bind(this)
}
componentDidMount(){
    this.setState({ProductItermList: [...Database.Products] });       
}

HandleClickVoteUp = (productId) => {
  console.log("Voting on ID:", productId);
  this.setState((prevState) => ({
    ProductItermList:prevState.ProductItermList.map((product) =>
      product.id === productId
        ? {...product,votes: product.votes + 1 }: product
    ),
  }));
};

   render() { 

 const ProductListSort = [...this.state.ProductItermList || []].sort((a,b)=> a.votes - b.votes);
//  const ProductListSort = [...this.state.ProductItermList || []].sort((a, b) => a.votes - b.votes);

  const ProductListing = ProductListSort.map(product => (
    <div className="col-sm-12 col-md-6 col-lg-6" key={product.id}>
      <ProductList 
        id={product.id}
        title={product.title}
        description={product.description}
        votes={product.votes} 
        onVote={() => this.HandleClickVoteUp(product.id)}
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