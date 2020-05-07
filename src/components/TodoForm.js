import React from 'react';

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodoItem: ''
        };
    }

    handleChanges = e => {
        console.log(e.target.value)
        e.preventDefault();
        this.setState({
            newTodoItem: e.target.value
        });
    };

    
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.newTodoItem) {
            this.props.addNewTodo(this.state.newTodoItem);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                 type='text' 
                 name='item' 
                 value={this.state.newTodoItem}
                 onChange={this.handleChanges}
                 placeholder='Add an item!'
                />
                <button>Add item</button>
            </form>
        )
    }
}

export default ListForm;