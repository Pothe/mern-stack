import React from "react";
import Database from "../../database/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./ProductIterm";

// import ProductList from "./ProductIterm";
class ProductScreen extends React.Component {
   
   constructor(props) {
  super(props);
  this.HandleClickVoteup = this.HandleClickVoteup.bind(this);
  this.state = {
    ProductItermList: [],
    listiterm :[],
  };
}
componentDidMount(){
    this.setState({  ProductItermList: [...Database.Products] });  
}
// componentDidMount() {
//   this.setState({ ProductItermList: [...Database.Products] });}

        HandleProductVote(productid){         
            console.log(productid +" was voted");
          //  this.setState(prevState=>({listiterm:[...prevState.listiterm,"Pothe"]}));
//            this.setState(prevState => ({
//     listiterm: [...prevState. listiterm, "pothe"]
//   })
// );
          
        }
       

        HandleClickVoteup=(id)=>{
            this.HandleClickVoteup(id) 
        }

      

   render() { 
     
     console.log(this.state.listiterm)    
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

  return (
    <div className="container">
      <div className="row g-1">{ProductListing}</div>   
    </div>
  );
}

}
 
export default ProductScreen;