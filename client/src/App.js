import {Component} from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/api/people')
    .then(res => res.json())
    .then(people => console.log(people));
  }
  render() {
    return (
      <div className='App'>
        <h1>Peeple</h1>
      </div>
    )
  }
}


export default App;
