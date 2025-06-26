import React from "react";
import EditableTimer from "./EditableTimer";
class EditableTimeList extends React.Component{
    render(){
        return(
            <>
             <div className="container mt-5">
            <h2 className="text-center mb-4">Timers</h2>           
               <EditableTimer/>              
              </div>
            </>
        )
    }
}

export default EditableTimeList;