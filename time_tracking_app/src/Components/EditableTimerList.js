import React from "react";
import EditableTimer from "./sub_component/EditableTimer";

class EditableTimerList extends React.Component {
   
    render(){
        
const timers = this.props.timers.map((time)=>(
  <EditableTimer key={time.id}
    title={time.title}
    id={time.id}
    project={time.project}
    elapse={time.elapse}
    runningSince={time.runningSince}
  />
  
))


  return (
    <div className="ui centered cards">
      {timers}
    </div>
  );
}

   }

 
export default EditableTimerList;