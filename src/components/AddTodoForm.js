import React, {Component} from "react";
import shortid from "shortid";

class AddTodoForm extends Component{
    state = {
        text: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //Submit form
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false

        })
        this.setState({
            text:""
        })

    }
    render(){
        return(

                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                            <span className="card-title center">React To-Do</span>
                            <form onSubmit={this.handleSubmit} className="container">
                            <input
                            name="text" 
                            value={this.state.text}  
                            onChange={this.handleChange} 
                            type="text" className="validate" 
                            placeholder="Add a task..."/>
                            <label className="active">Add ToDo</label>
                            <button className="btn waves-effect waves-light" 
                            type="submit" 
                            name="action"
                            onClick={this.handleSubmit}
                            >Submit
                            <i className="material-icons right"></i>
                            </button>
                            </form>
                         </div>
                        </div>
                    </div>
                </div>
            
            
        )
    }
}

export default AddTodoForm;

