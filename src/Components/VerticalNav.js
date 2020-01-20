import React, {Component} from 'react'

import './VerticalNav.css'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Blogs from './Blog'
import Resume from './Resume'

class VerticalNav extends Component {
    state = {
        user: [],
        isAboutMeShowing: true,
        isProjectsShowing: false,
        isBlogsShowing: false,
        isResumeShowing: false,
    }

    componentDidMount(){
        const url = "https://codyshaben-backend.herokuapp.com/users/1"
        fetch(url)
            .then(response => response.json())
            .then(user => {
              this.setState({ user })
            })
      }
      
      toggleAboutMeShowing = () => {
          this.setState({
              isAboutMeShowing: true,
              isProjectsShowing: false,
              isBlogsShowing: false,
              isResumeShowing: false,
          })
      }
      
      toggleProjectsShowing = () => {
        this.setState({
            isProjectsShowing: true,
            isAboutMeShowing: false,
            isBlogsShowing: false,
            isResumeShowing: false,
        })
      }
      
      toggleBlogsShowing = () => {
        this.setState({
            isBlogsShowing: true,
            isAboutMeShowing: false,
            isProjectsShowing: false,
            isResumeShowing: false,
        })
      }
      
      toggleResumeShowing = () => {
        this.setState({
            isResumeShowing: true,
            isAboutMeShowing: false,
            isProjectsShowing: false,
            isBlogsShowing: false,
        })
      }

    render(){
        return(
            <nav>
                <ul className="vertical-nav">
                <li  
                    onClick={this.toggleAboutMeShowing}
                    className="nav-li"
                >About Me </li>
                <li
                    onClick={this.toggleProjectsShowing}   
                    className="nav-li"
                >Projects
                </li>
                <li
                    onClick={this.toggleBlogsShowing}   
                    className="nav-li"
                >Blogs </li>
                <li
                    onClick={this.toggleResumeShowing}   
                    className="nav-li"
                >Resume </li>
                </ul>
                {
                this.state.isAboutMeShowing
                  ?  <AboutMe />
                  :null
              }
              {
                this.state.isProjectsShowing
                  ?  <Projects
                      user={this.state.user}
                  />
                  :null
              }
              {
                this.state.isBlogsShowing
                  ?  <Blogs
                      user={this.state.user}
                  />
                  :null
              }
              {
                this.state.isResumeShowing
                  ?  <Resume
                      user={this.state.user}
                  />
                  :null
              }
            </nav>
        )
    }
}

export default VerticalNav