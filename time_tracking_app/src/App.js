import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import TimersDashboard from "./TimersDashboard";


class App extends React.Component{
  render(){
    return(
      <>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Timers</h2>    
             
              <TimersDashboard/>
              </div>
      
      </>
        

    )
  }
}
export default App;