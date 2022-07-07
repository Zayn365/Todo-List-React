import { Component } from "react";
import './Todo.css';

class Todo extends Component {
    state = {
        remainder: true,
        isEditing : false,
        task : this.props.name
    }
   remainderClick = () => {
    this.setState(st => ({
        remainder: !st.remainder
    }))
   }
   onChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    }) 
  }
   btnEdit = () => {
    this.setState(st => ({
        isEditing: !st.isEditing
    }))
   }

   onSubmit = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({
        isEditing : false
    })
   }

    render() {
        console.log(this.props.task)
        let result;
        if(this.state.isEditing) {
           result =<> 
           <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                     name="task"
                     value={this.state.task}
                     onChange={this.onChange}/>
                    <button>Edit</button>
                </form>
            </div>
            <div className="btn">
                <i onClick={this.btnEdit} className="fa fa-pencil-square" />
                <i onClick={this.props.remove} className="fa fa-trash" />
                </div>
            </>
        }
        else {
          result = 
               <>
               <ul><li className={!this.state.remainder ? "Todo completed" : "Todo-task"} onDoubleClick={this.remainderClick} style={!this.state.remainder ? 
                {textDecoration: 'line-through'} :
                {textDecoration: 'none'} }>{this.state.task}</li></ul>
                <div className="btn">
                <i onClick={this.btnEdit} className="fa fa-pencil-square" />
                <i onClick={this.props.remove} className="fa fa-trash" />
                </div>
                </>
        }
        return (
            <div className="Todo" onDoubleClick={this.remainderClick}>
                {result}
            </div>
        )
    }
}


export default Todo;