import React from "react";
import EditableTimerList from "./Components/EditableTimerList";
import ToggleableTimerForm from "./Components/ToggleableTimerForm";
import { helps } from './helps';
import uuid from 'react-uuid';
import './TimerDashboard.css';
class TimersDashboard extends React.Component {
    state = { 
        timers:[
            {
                title:" practice squat",
                project: "Gem Chores",
                id: uuid(),
                elapse:5456099,
                runningSince: Date.now(),
             
            },
              {
                title:"Bake squash",
                project: "kitchen Chores",
                id: uuid(),
                elapse:5456099,
                runningSince: Date.now(),
             
            },
            {
                title:"Bake squash",
                project: "kitchen Chores",
                id: uuid(),
                elapse:5456099,
                runningSince: Date.now(),
             
            }
            

        ]
     } 
     handleCreateFormSubmit =(timer)=>{
        this.createTimer(timer);
     }
     createTimer =(timer)=>{
        const times = helps.newTimer(timer);
        this.setState({timers: this.state.timers.concat(times)})
     }
    render() { 
      
        return (
       <div className="containers">
        <div className="cards">
            <EditableTimerList timers={this.state.timers}/>    
            <ToggleableTimerForm onFormSubmit ={this.handleCreateFormSubmit} />
    </div>
       </div>
       );
    }
} 
export default TimersDashboard;