import { Component } from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";


class Todolist extends Component {
    state = {
        todo: [],
        remind: true 
    }
   createTodo = (add) => {
    this.setState(st => ({
        todo: [...st.todo, add ] 
    }))
   }
  remindER = () => {
    this.setState(({
        remind: !this.state.remind
    }))
  }

    render() {
        console.log(this.props.remind)
     const yes = this.state.todo.map(tdo => {
        return (<Todo 
         name = {tdo.task}
         reminder = {this.remindER}
        />)
     })
        return (
            <div>
                <h1>TODO LIST</h1>
                 <Todoform create={this.createTodo} list={yes}/>
            </div>
        )
    }
}


export default Todolist;