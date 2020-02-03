import React, {Component} from 'react';
import './App.css';
import HorizontalNav from './Components/HorizontalNav'
import VerticalNav from './Components/VerticalNav';
import AboutMe from './Components/AboutMe'

class App extends Component {

  state = {
    user: []
  }

  componentDidMount(){
    const url = "https://codyshaben-backend.herokuapp.com/users/1"
    fetch(url)
      .then(response => response.json())
      .then(user => {
        this.setState({user})
      })
  }

  render(){
    return (
      <div className="App">
        <HorizontalNav         />
        <VerticalNav 
          user={this.state.user}
        />
      </div>
    );
  }

}

export default App

  
    
  
