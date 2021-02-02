

import React, {Component} from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
 

class Todos extends Component {
  // This is a life cycle method, it is required to rended the component

  // Here we have JSX which is very similar to html. and you can use javascript insde of here

  // use className 

markComplete = () => {
  
}
 
  render() {
  

    // This is a .map loop that for each todo (3) we will do something. 
    return this.props.todos.map((todo) => (
   <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}/>
    ))


  }
}


Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
