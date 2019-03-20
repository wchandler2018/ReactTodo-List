import React, { Component } from 'react';
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";

 class TodoList extends Component {
  
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = (todo) => {
    const newTodos = 
   this.setState({
     todos: [todo, ...this.state.todos]
   })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo=>{
        if(todo.id === id){
        return{
          ...todo,
          complete: !todo.complete
        }
        }else{
          return todo;
        }
      })
    })
  }

  updateToDoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  removeCompletedTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    })
  }


  render() {
    let todos = [];
    
    if(this.state.todoToShow === "all"){
      todos = this.state.todos;
    }else if(this.state.todoToShow === "active"){
      todos = this.state.todos.filter(todo => !todo.complete )
    }else if(this.state.todoToShow === "complete"){
      todos = this.state.todos.filter(todo => todo.complete )
    }
    return (
      <div>
        <AddTodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
        <Todo key={todo.id} 
        todo={todo}
        toggleComplete={() => this.toggleComplete(todo.id)}
        onDelete = {() => this.handleDeleteTodo(todo.id)}
        />))}
        <div style={{margin: "20px auto", fontWeight: "bold", textTransform: "uppercase"}}>todos-remaining: {this.state.todos.filter(todo => !todo.complete ).length}</div>
        <div>
        <button className="btn waves-effect waves-light #ff6d00 orange accent-4" type="submit" name="action" onClick={() => this.updateToDoToShow("all")}>
        <i className="far fa-clipboard-list"></i>{" "}All
        </button>
        <button className="btn waves-effect waves-light #64dd17 light-green accent-4" type="submit" name="action" onClick={() => this.updateToDoToShow("active")}>
        <i class="far fa-smile-wink"></i>{" "}Active
        </button>
        <button className="btn waves-effect waves-light #0091ea light-blue accent-4" type="submit" name="action" onClick={() => this.updateToDoToShow("complete")}>
        <i className="far fa-check-square"></i>{" "}Complete
        </button>
        { this.state.todos.some(todo => todo.complete) ? (
        <button onClick={this.removeCompletedTodo} className="btn waves-effect waves-light #d50000 red accent-4" type="submit" name="action">
        <i className="far fa-trash-alt"></i>{" "}Delete Completed</button>
        ) : null }
        <button onClick = {() => this.setState({
          todos: this.state.todos.map(todo => ({
            ...todo, 
            complete: this.state.toggleAllComplete
          })), toggleAllComplete: !this.state.toggleAllComplete
        })}
        className="btn waves-effect waves-light #ffd600 yellow accent-4" type="submit" name="action">
        <i className="far fa-check-square"></i>{" "}All Complete: {`${this.state.toggleAllComplete}`}
        </button>
        </div>
      </div>
    )
  }
}

export default TodoList;
