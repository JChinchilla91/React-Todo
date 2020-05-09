import React from 'react';
import TodoList from './components/TodoList'
import ListForm from './components/TodoForm'

//styles
import './index.css';

const todo = [
  {
    task: 'Do the dishes',
    id: 1520393,
    completed: false
  },
  {
    task: 'Paint garage floor, checkered',
    id: 120021,
    completed: false
  },
  {
    task: 'Vacuum the dog',
    id: 12093120,
    completed: false
  },
  {
    task: 'Clean out the toaster and eat the crumbs',
    id: 1293012,
    completed: false
  },
  {
    task: 'Drink the gutter rain juice',
    id: 19283,
    completed: false
  },
  {
    task: 'Grind all the leaves from the tree',
    id: 9128782,
    completed: false
  },
  {
    task: 'Churn some butter',
    id: 8126772,
    completed: false
  },
  {
    task: 'Turn the TV upside down',
    id: 912723,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo,
    }

    //Class Method to update state
  }

  toggleItemCompleted = itemId => {
    console.log('yo, we here!', itemId)
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.completed;
      })
    });
  };

  addNewTodo = itemTask => {
    this.setState({
      todo: [
      ...this.state.todo,
      { task: itemTask, completed: false, id: Date.now() }
      ]
    });
  };


  render() {
    return (
      <div>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <ListForm addNewTodo={this.addNewTodo} />
        </div>
        <div>
          <TodoList
           todo={this.state.todo} 
           toggleItemCompleted={this.toggleItemCompleted} 
           clearCompleted={this.clearCompleted}
          /> 
        </div>
      </div>
    );
  }
}

export default App;
