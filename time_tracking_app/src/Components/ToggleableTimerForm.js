import React from "react";
import TimerForm from "./sub_component/TimerForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
class ToggleableTimerForm extends React.Component {
    constructor(props){
        super(props);
        this.handleFormOpen = this.handleFormOpen.bind(this)
    }
    state = { isOpen:false } 

    handleFormOpen =(value)=>{
       this.setState({ isOpen: true });
  
    }
    
    render() { 

        if(this.state.isOpen){
            return(
               <>
                <TimerForm  
                />
               </>
            )
        }
        return (
           <div className="text-center my-3">
            <button className="btn btn-outline-secondary" onClick={this.handleFormOpen}>
                <i className="bi bi-plus"></i>
            </button>
            </div>
        );
    }
}
 
export default ToggleableTimerForm;