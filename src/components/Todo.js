import React from 'react';



const Item = props => {
    const handleClick = e => {
        props.toggleItemCompleted(props.item.id);
    }

    return (
        <div className={`item${props.item.completed ? ' done' : ''}`} onClick={handleClick}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Item;