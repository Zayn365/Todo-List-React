import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css'

class Todoform extends Component {

    state = {
        task: []
    }

    onChange = (evt) => {
      this.setState({
        [evt.target.name] : evt.target.value
      }) 
    }

    onSubmit = (evt) => {
     evt.preventDefault();
     const newID = {...this.state , id: uuidv4()};
     this.props.create(newID);
     this.setState({
        task: ""
     })
    }


    render() {
        
        return (
            <div >
                {this.props.list}
                <form className="NewTodoForm" onSubmit={this.onSubmit}>
                    <div>
                        <label><h3>New Todo</h3></label>
                      <input type="text" 
                      placeholder="Add A New TODO!"
                      value={this.state.task}
                      onChange={this.onChange}
                      name="task"
                      />  
                      <button>Add NOW</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Todoform;