import { Component } from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";
import './Todolist.css';

class Todolist extends Component {
    state = {
        todo: [{task:"rico"}],
    }
   createTodo = (add) => {
    this.setState(st => ({
        todo: [...st.todo, add ] 
    }))
   }

    render() {
        console.log(this.props.remind)
     const yes = this.state.todo.map(tdo => {
        return (<Todo 
         name = {tdo.task}
        />)
     })
        return (
            <div className="main">
                <h1>TODO LIST</h1>
                 <Todoform create={this.createTodo} list={yes}/>
            </div>
        )
    }
}


export default Todolist;