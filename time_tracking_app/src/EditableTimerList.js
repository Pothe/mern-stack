import React from "react";
class EditableTimeList extends React.Component{
    render(){
        return(
            <>
            <div className="card text-center mx-auto" style={{ maxWidth: "300px" }}>
        <div className="card-body">
          <h5 className="card-title">Mow the lawn</h5>
          <p className="text-muted">House Chores</p>
          <h3 className="my-3">01:30:56</h3>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <button className="btn btn-outline-secondary btn-sm" title="Delete">
              <i className="bi bi-trash"></i>
            </button>
            <button className="btn btn-outline-secondary btn-sm" title="Edit">
              <i className="bi bi-pencil"></i>
            </button>
          </div>
          <button className="btn btn-success w-100">Start</button>
        </div>
      </div>
            </>
        )
    }
}

export default EditableTimeList;