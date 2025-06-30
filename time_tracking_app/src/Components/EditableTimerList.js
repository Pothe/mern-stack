import React from "react";
import EditableTimer from "./sub_component/EditableTimer";
class EditableTimerList extends React.Component {

    render() { 
        return (
<>

        
  <EditableTimer
  title='Learn React'
  project='Web Domination'
  elapsed='8986300'
  runningSince={null}
  editFormOpen={false}
  />

   <EditableTimer
    title='Learn extreme ironing'
    project='World Domination'
    elapsed='3890985'
    runningSince={null}
    editFormOpen={true}
   
   />
  </>
        
    );
    }
}
 
export default EditableTimerList;