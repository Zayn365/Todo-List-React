import { Component } from "react";
import Todo from "./Todo";


class Todoform extends Component {

    state = {
        task: ""
    }

    onChange = (evt) => {
      this.setState({
        [evt.target.name] : evt.target.value
      }) 
    }

    onSubmit = (evt) => {
     evt.preventDefault();
     this.props.create(this.state);
     this.setState({
        task: ""
     })
    }


    render() {
        
        return (
            <div>
                {this.props.list}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h3>New Todo</h3>
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