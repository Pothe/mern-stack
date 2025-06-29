import React from "react";
import EditableTimerList from "./Components/EditableTimerList";
import ToggleableTimerForm from "./Components/ToggleableTimerForm";
class TimersDashboard extends React.Component {
    state = {  } 
    render() { 
        return (
        <>
    <EditableTimerList/>
    <ToggleableTimerForm 
    isOpent={true}
    />

        </>);
    }
}
 
export default TimersDashboard;