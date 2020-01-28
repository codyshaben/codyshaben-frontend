import React, {Component} from 'react'

import './VerticalNav.css'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Blogs from './Blog'
import Resume from './Resume'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  

class VerticalNav extends Component {
    state = {
        user: [],
        // isAboutMeShowing: true,
        // isProjectsShowing: false,
        // isBlogsShowing: false,
        // isResumeShowing: false,
    }

    componentDidMount(){
        const url = "https://codyshaben-backend.herokuapp.com/users/1"
        fetch(url)
            .then(response => response.json())
            .then(user => {
                console.log(user)
              this.setState({ user })
            })
      }
      

    render(){
        return(
            <Router>
                <div className='main-page'>
                    <nav>
                        <ul className="vertical-nav">
                        <li >
                            <NavLink to='/' className='nav-li'>About Me </NavLink>
                        </li>
                        <li >
                        <NavLink to='/projects' className='nav-li'>Projects </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className='nav-li'>Blogs </NavLink>
                        </li>
                        <li>
                            <NavLink to='/resume' className='nav-li'>Resume </NavLink>
                        </li>
                        </ul>

                    </nav>
                    <Switch>
                        <Route path='/projects'>
                            <Projects 
                                user={this.state.user}
                            />
                        </Route>
                        <Route path='/blogs'>
                            <Blogs 
                                user={this.state.user}
                            />
                        </Route>
                        <Route path='/resume'>
                            <Resume 
                                user={this.state.user}
                            />
                        </Route>
                        <Route path='/'>
                            <AboutMe 
                                user={this.state.user}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default VerticalNav