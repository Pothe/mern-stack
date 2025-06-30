import React from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends React.Component{
    state={
        editFormOpen: false,
    }
    render(){
        if(this.state.editFormOpen){
            return(
                <>
                TimerForm
                </>
            )
        } else {
            return(
                <>
                Timer
                </>
            )
        }
    }
}

export default EditableTimer;