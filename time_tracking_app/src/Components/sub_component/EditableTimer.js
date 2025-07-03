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
                <TimerForm
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                />              
             </>
            )
        } else {
            return(
                <>
                <Timer
                 id={this.props.id} 
                 title={this.props.title}
                 project={this.props.project}
                 elapse={this.props.elapse}
                 runningSince={this.props.runningSince}
                />
                
              
                </>
            )
        }
    }
}

export default EditableTimer;