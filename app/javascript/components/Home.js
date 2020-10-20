import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery';

import ReactCardFlip from 'react-card-flip';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

import '../styles/home.css'
import Toggle from './Toggle.js'
import '../styles/toggle.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
          blog : {
            id: '',
            location: '',
            camp_spot: '',
            date: '',
            notes: '',
            reminders: ''
          },
          blogs: [],
          isFlipped: false
        }
        this.handleClick = this.handleClick.bind(this)
      }

    componentDidMount(){
      this.getData()
    }
    
    getData(){
      fetch('http://localhost:3000/api/v1/blogs')
      .then((data) => {
        return data.json()
      })
      .then((blogs) => {
        this.setState({ blogs: blogs })
      })
      .catch(err => { throw err });
    }

    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    
    render () {
      const { blogs } = this.state
      console.log(this.state.blogs)
    return (
      <React.Fragment>
        <div className="home">
          <h1>Hello Home</h1>
          <div className="polaroid_container">
        {blogs.map((blog, index) => {
          return(
            <div key={blog.id} className="polaroid">
              <Flippy key={index}
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                ref={(r) => this.flippy = r}
                style={{height: '31vw', width: '22vw'}}
              >
                <FrontSide className="polaroid_date"
                >
                <div>
                  <img src="yosemite.JPG"></img>
                  <h1>{blog.location}</h1>
                  <h4>{blog.date}</h4>
                </div>

                </FrontSide>
                <BackSide className="polaroid_date"
                  >
                <div >
                  <h4>{blog.notes}</h4>
                  <h4>{blog.reminders}</h4>
                </div>
                </BackSide>
              </Flippy>
              </div>
            )
          })}

          </div>
              <div>
        </div>

            </div>
      </React.Fragment>
    );
  }
}

export default Home
