import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputString: ""
        };
    }

    inputChangeHandler = evt => {
        this.setState(
            {
                inputString: evt.target.value
            }
        )
    }
    submitForm = evt => {
        evt.preventDefault();
        this.props.addTask(this.state.inputString);
        this.setState({
            inputString: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                onChange={this.inputChangeHandler}
                type="text"
                name="task"
                value={this.state.inputString}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;