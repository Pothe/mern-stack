import React from "react";
import EditableTimeList from "./edittimetable/EditableTimerList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ToggleableTimerForm from "./ToggleableTimerForm";
class App extends React.Component{
  render(){
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
        
    )
  }
}
export default App;