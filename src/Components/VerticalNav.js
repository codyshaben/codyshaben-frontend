import React from 'react'
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
  

const VerticalNav = (props) => { 
        const { user } = props    
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
                                user={user}
                            />
                        </Route>
                        <Route path='/blogs'>
                            <Blogs 
                                user={user}
                            />
                        </Route>
                        <Route path='/resume'>
                            <Resume 
                                user={user}
                            />
                        </Route>
                        <Route path='/'>
                            <AboutMe 
                                user={user}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }


export default VerticalNav