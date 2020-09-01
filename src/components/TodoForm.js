import React from 'react'

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            task:''
        }
    }
    handleChanges = (e) => {
        this.setState({
          task: e.target.value
        })
      }
    
      handleSubmit =(e) => {
        e.preventDefault();
        this.props.addItem(this.state.task)
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='task'
                value={this.state.task}
                onChange={this.handleChanges}
                />
                <button>Add To Do</button>
                {/* <button 
                className="clear-btn" 
                onClick={this.props.clearCompleted}>Clear Completed</button> */}
            </form>
        )
    }
}
export default ToDoForm;