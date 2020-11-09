import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  // This is a life cycle method, it is required to rended the component

  // Here we have JSX which is very similar to html. and you can use javascript insde of here

  // use className 
state = {
  todos: [
    {
      id: 1,
      title: 'take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner with wife',
      completed: false
    },
    {
      id: 3,
      title: 'Meeting with boss',
      completed: false
    }
   
  ]
}


  render() {

    return (
      <div className='App'>
        <Todos todos={this.state.todos} />
      </div>
    )

  }
}

export default App;






// import './App.css';
// import Todos from './components/Todos';

// function App() {
  
//   return (
//     <div className="App">
//     <Todos />
//     </div>
//   );
  
// }

// export default App;

// This is JSX very similar to html. 
// you can include js within here by using the curly braces. 


// most of our components get called in here. 

//Adding a state, we have to add a state that we are able to feed into different



