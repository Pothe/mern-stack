import React from 'react';

import MainApp from './Layouts/MainApp';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      product:[],
    })
   
  }
  
  componentDidMount(){ 
     this.setState({product:[1,2,3]})    
  }

  product =[
    {
      id:1,
      title:"askldfjklsadjf"
    }
  ]
    
  render(){
     
    
    console.log(this.state.product)
    return(
    
        <>
     
        <MainApp/>
        </>
    )
  }
}
export default App;
