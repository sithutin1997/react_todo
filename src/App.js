import { Component } from "react";
import React from "react";
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class App extends Component {
  state = {
    todos : [
      { id: 1, detail: "code 1 houre" },
      { id: 2, detail: "drink coffee" }
    ] 
  }
  addTodo= (todo) =>{
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    }) 
  }
  deleteTodo = (id) =>{
    let todos = this.state.todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="App container text-center">
        <p>This is the test p for git</p>
        <div className="row g-2">
          <h1 className="col">To do list</h1>
        </div>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddTodo addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;
