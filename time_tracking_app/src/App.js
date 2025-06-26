import React from "react";
import EditableTimeList from "./edittimetable/EditableTimerList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ToggleableTimerForm from "./ToggleableTimerForm";
class App extends React.Component{
  render(){
    return(
      <>
       <EditableTimeList/>

         <ToggleableTimerForm
          isOpen={true}/>
      </>
        
    )
  }
}
export default App;