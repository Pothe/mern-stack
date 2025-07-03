import React from "react";
class Timer extends React.Component{
    render(){
      
        return(
           <div className="card text-center mx-auto" style={{ maxWidth: '400px' }}> {/* Added mx-auto and maxWidth for centering and width similar to 'ui centered card' */}
      <div className="card-body">
        <form>
          <div className="mb-3">
           <h1 htmlFor="projectInput" className="form-label">{this.props.project}</h1>
            
          </div>
          <div className="mb-3">
            <h3 htmlFor="projectInput" className="form-label">{this.props.project}</h3>
                     </div>
                     <div className="mb-3">
            <h3 htmlFor="projectInput" className="form-label">{this.props.elapse}</h3>
                     </div>
          <div className="d-flex justify-content-end gap-1" ><i className="bi bi-trash3"></i><i className="bi bi-pencil-square"></i></div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4"> {/* Added mt-4 for some top margin */}
                     
            <button className="btn btn-primary w-100 text-uppercase" type="button">
              start
            </button>
          </div>
        </form>
      </div>
    </div>
        )
    }
}
export default Timer;