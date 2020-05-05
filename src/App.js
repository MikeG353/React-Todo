import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import './index.css';


const tasks = [{
  task:"Todo MVP",
  id:"Test",
  completed: false
}]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [
        ...this.state.tasks,
        newTask
      ]
    })
  }

  toggleComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
      })

    })
    
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter()
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList tasks={this.state.tasks} toggleComplete={this.toggleComplete} />        
      </div>
    );
  }
}

export default App;
