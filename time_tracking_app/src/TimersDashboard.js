import React from "react";
import EditableTimerList from "./Components/EditableTimerList";
import ToggleableTimerForm from "./Components/ToggleableTimerForm";
import './TimerDashboard.css';
class TimersDashboard extends React.Component {
    state = { 
        timers:[
            {
                title:" practice squat",
                project: "Gem Chores",
                elapse:" 5456099",
                runningSince: Date.now(),
             
            },
              {
                title:"Bake squash",
                project: "kitchen Chores",
                elapse:" 5456099",
                runningSince: Date.now(),
             
            }
            

        ]
     } 
    render() { 
      
        return (
       <div className="containers">
        <div className="cards">
            <EditableTimerList timers={this.state.timers}/>
    
     <ToggleableTimerForm 
     isOpent={true}
    />
    </div>
       </div>
       );
    }
}
 
export default TimersDashboard;