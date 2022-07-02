import { Component } from "react";
import './Todo.css';

class Todo extends Component {
    state = {
        remainder: true
    }
   remainderClick = () => {
    this.setState(st => ({
        remainder: !st.remainder
    }))
   }
    render() {
        return (
            <div className="main-todo" onDoubleClick={this.remainderClick} >
                <h5 style={!this.state.remainder ? 
                    {textDecoration: 'line-through'} :
                    {textDecoration: 'none'} }>{this.props.name}</h5>
               <div className="btn">
                <i className="fa fa-pencil-square" />
                <i className="fa fa-trash" />
                </div>

            </div>
        )
    }
}


export default Todo;