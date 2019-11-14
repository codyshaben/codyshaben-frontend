import React, {Component} from 'react';

import './App.css';
import './Components/VerticalNav.css'

import HorizontalNav from './Components/HorizontalNav'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'


class App extends Component {
  state = {
    isAboutMeShowing: false,
    isProjectsShowing: false,
}

toggleAboutMeShowing = () => {
    this.setState({
        isAboutMeShowing: !this.state.isAboutMeShowing,
        isProjectsShowing: false
    })
}

toggleProjectsShowing = () => {
  this.setState({
      isProjectsShowing: !this.state.isProjectsShowing,
      isAboutMeShowing: false
  })
}

  render(){
    return (
      <div className="App">
        <HorizontalNav />
        <nav>
          <ul className="vertical-nav">
            <li  
              onClick={this.toggleAboutMeShowing}
            >About Me </li>
            <li
              onClick={this.toggleProjectsShowing}   
            >Projects
            </li>
            <li>Blog Posts </li>
            <li>Resume </li>
            <li>Admin </li>
          </ul>
        </nav>
        {
          this.state.isAboutMeShowing
            ?  <AboutMe />
            :null
        }
        {
          this.state.isProjectsShowing
            ?  <Projects />
            :null
        }
      </div>
    );
  }
}

export default App;
