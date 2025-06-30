import React from "react";
import EditableTimerList from "./Components/EditableTimerList";
import ToggleableTimerForm from "./Components/ToggleableTimerForm";
import './TimerDashboard.css';
class TimersDashboard extends React.Component {
    state = {  } 
    render() { 
        return (
       <div className="container">
        <div className="card">
    <EditableTimerList/>
    
    <ToggleableTimerForm 
    isOpent={true}
    />
    </div>
       </div>
       );
    }
}
 
export default TimersDashboard;