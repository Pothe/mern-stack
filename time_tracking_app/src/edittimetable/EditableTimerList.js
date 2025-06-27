import React from "react";
import EditableTimer from "./EditableTimer";
class EditableTimeList extends React.Component{
    render(){
        return(
            <>
                  
               <EditableTimer 
               title="Wasington DC"
                Hours="12:00"
               />              
             
            </>
        )
    }
}

export default EditableTimeList;