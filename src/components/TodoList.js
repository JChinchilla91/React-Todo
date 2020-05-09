// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Todo';

//styles
import '../index.css';

const TodoList = props => {
    return (
        <div className='shopping-list'>
            {props.todo.map(item => (
                <Item key={item.id} item={item} toggleItemCompleted={props.toggleItemCompleted}/>
            ))}
            <button onClick={props.clearCompleted}>Clear items that are done!</button>
        </div>
    )
}

export default TodoList;