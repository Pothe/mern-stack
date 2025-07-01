import React from "react";
class TimerForm extends React.Component{
  state={
    title: this.props.title || '',
    project : this.props.project || '',
  }
    render(){
        const submitText = this.props.title ? 'Update' : 'Create';
        return(
            <>
           <div className="card text-center mx-auto" style={{ maxWidth: '400px' }}> {/* Added mx-auto and maxWidth for centering and width similar to 'ui centered card' */}
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">Title</label>
            <input type="text" className="form-control" id="titleInput" defaultValue={this.props.title ? this.props.title : this.state.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="projectInput" className="form-label">Project</label>
            <input type="text" className="form-control" id="projectInput" defaultValue={this.props.title ? this.props.project : this.state.project} />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4"> {/* Added mt-4 for some top margin */}
            <button className="btn btn-primary me-md-2" type="button">
              {submitText}
            </button>
            <button className="btn btn-danger" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
       
            </>
        )
    }
}
export default TimerForm;