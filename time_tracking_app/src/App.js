import React from "react";
import EditableTimeList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
class App extends React.Component{
  render(){
    return(
      <>

<EditableTimeList/>
<ToggleableTimerForm
isOpen={true}
/>

      </>

    )
  }
}
export default App;