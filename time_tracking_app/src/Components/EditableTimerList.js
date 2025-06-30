import React from "react";
import EditableTimer from "./sub_component/EditableTimer";
class EditableTimerList extends React.Component {

    render() { 
        return (
<div id="Timers">

        
  <EditableTimer
  title='Learn React'
  project='Web Domination'
  elapsed='8986300'
  runningSince={null}
  editFormOpen={true}
  />

   <EditableTimer
   title='Learn React'
    project='Web Domination'
    elapsed='8986300'
    runningSince={null}
    editFormOpen={true}
   
   />
   </div>
        
    );
    }
}
 
export default EditableTimerList;