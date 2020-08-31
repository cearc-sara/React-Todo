import React from 'react';
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
import '../src/components/Todo.css'


const toDoListData = [
  {
    task: 'Wash Laundry',
    id: 882,
    completed: false,
  },
  {
    task: 'Dry Laundry',
    id: 4165,
    completed: false,
  },
  {
    task: 'Cook Dinner',
    id: 4185,
    completed: false,
  },
  {
    task: 'Clean Room',
    id: 156,
    completed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    
    this.state = {
      toDoList: toDoListData,
    }
  }

  toggleCompleted = (clickedItemId) => {
    this.setState({
      toDoList: this.state.toDoList.map((item) => {
        if(item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  addItem =(itemTask) => {
    const newItem ={
      task: itemTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    })
  }

  clearItem =() => {
    this.setState({
      toDoList: this.state.toDoList.filter((item) => {
        if(item.completed === true) {
          return ''
        }else {
          return item;
        }
      })
    })
  }

  // handleChanges = (e) => {
  //   this.setState({
  //     task: e.target.value
  //   })
  // }

  // handleSubmit =(e) => {
  //   e.preventDefault();
  //   this.addItem(this.state.task)
  // }

  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>To Do List</h1>
        <ToDoForm 
        addItem={this.addItem} 
        // handleChanges={this.handleChanges} 
        // handleSubmit={this.handleSubmit}
        // toggleCompleted={this.toggleCompleted}
        />
      </div>

      <ToDoList
        toDoList={this.state.toDoList}
        toggleCompleted={this.toggleCompleted}
        clearItem={this.clearItem}
      />
    </div>
    );
  }
}

export default App;
