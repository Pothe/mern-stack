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
    ListItem:[],
 
  };
  this.HandleClickVoteup = this.HandleClickVoteup.bind(this);
}
componentDidMount(){
    this.setState({  ProductItermList: [...Database.Products] });   
    this.setState({ListItem:[1,2,3,4]})
}

addItemToList = () => {
  this.setState(prevState => ({
    ListItem: [...prevState.ListItem, 4]
  }));
};
// componentDidMount() {
//   this.setState({ ProductItermList: [...Database.Products] });}

       HandleProductVote(productid) {
        console.log(productid +" was voted"); 
        }
      HandleClickVoteup=(id)=>{
            this.HandleProductVote(id)
        }      
   render() { 

    console.log(this.state.ListItem)
// //   const products = ;
 const ProductListSort = [...this.state.ProductItermList || []].sort((a,b)=> a.votes - b.votes);
//  const ProductListSort = [...this.state.ProductItermList || []].sort((a, b) => a.votes - b.votes);

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
<button onClick={this.addItemToList}>Add Item</button>
  return (
    
    <div className="container">
      <button onClick={this.addItemToList}>Add Item</button>
      <div className="row g-1">{ProductListing}</div>   
    </div>
  );
}

}
 
export default ProductScreen;