import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainApp from './Layouts/MainApp';
class App extends React.Component{
  render(){
    return(

      <Router>    
          <MainApp/>
          <Routes>
            <Route />
          </Routes>
       </Router>
    )
  }
}
export default App;
