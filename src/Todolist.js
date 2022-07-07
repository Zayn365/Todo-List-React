import { Component } from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";
import './Todolist.css';


class Todolist extends Component {
    state = {
        todo: [],
    }
   createTodo = (add) => {
    
    this.setState(st => ({
        todo: [...st.todo, add ] 
    }))
   }

   onDel(id) {
    this.setState({
        todo: this.state.todo.filter(tdo => tdo.id !== id)
    })
   }

   onUpdate(id,updateTask){
    const updateTodo = this.props.todo.map(todo => { 
       if(todo.id === id) {
            return { ...todo, task: updateTask};
       }
       return todo;
    });
    this.setState({todo : updateTodo });
}
    render() {
     const yes = this.state.todo.map(tdo => {
        return (<Todo 
         name = {tdo.task}
         key = {tdo.id}
         id = {tdo.id}
         remove = {() => this.onDel(tdo.id)}
         update = {() => this.onUpdate}
        />)
     })
        return (
            <div className="TodoList">
                <h1>TODO LIST <span>A Simple Todo Application!</span></h1>
                
                 <Todoform create={this.createTodo} list={yes}/>
            </div>
        )
    }
}


export default Todolist;