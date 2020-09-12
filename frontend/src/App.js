import React from 'react';
//import {connect} from 'react-redux'
//import AccountsContainer from './containers/AccountsContainer'

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/accounts')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}


export default App;
