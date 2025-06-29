import React from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';
import TimersDashboard from "./TimersDashboard";

class App extends React.Component{
  render(){
<<<<<<< HEAD
    return(     
        <TimersDashboard/>
=======
    return(
      <>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Timers</h2>    
             <EditableTimeList/>
              <EditableTimeList/>
              

           <ToggleableTimerForm
          isOpen={true}/>       
                            
              </div>
      
      </>
        
>>>>>>> c8a59c2f234e084c7123502931ca8a6ee085847f
    )
  }
}
export default App;