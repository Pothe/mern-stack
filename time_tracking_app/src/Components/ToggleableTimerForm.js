import React from "react";
import TimerForm from "./sub_component/TimerForm";
class ToggleableTimerForm extends React.Component {
    state = {  } 
    render() { 

        if(this.props.isOpent){
            return(
                <TimerForm/>
            )
        }
        return (
           <div className="text-center my-3">
            <button className="btn btn-outline-secondary">
                <i className="bi bi-plus"></i>
            </button>
            </div>
        );
    }
}
 
export default ToggleableTimerForm;