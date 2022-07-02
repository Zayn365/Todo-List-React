import { Component } from "react";


class Todo extends Component {
    
    render() {
        return (
            <div style={{border: "solid 1px"}} onDoubleClick={this.props.reminder}>
                <h5>{this.props.name}</h5>
                <button>Edit</button>
                <button>Remove</button>
            </div>
        )
    }
}


export default Todo;