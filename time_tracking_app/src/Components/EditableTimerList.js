import React from "react";
class EditableTimerList extends React.Component {

    render() { 
        return (
        <>
          <h1>EditableTimerList</h1>
          <div className="p-4 text-center bg-blue-500 md:p-8 md:text-left lg:bg-green-500">
    This div adapts based on screen size.
</div>
        </>
    );
    }
}
 
export default EditableTimerList;