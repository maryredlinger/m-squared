import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery';


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

          poop: "poop"
    
        }
      }
      componentDidMount(){
        fetch('http://localhost:3000/api/v1/blogs')
        .then((data) => {
          return data.json()
        })
        .then((blogs) => {
          this.setState({ blogs: blogs })
        })
        .catch(err => { throw err });
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
              <div className="polaroid" key={index}>
                <div className="polaroid_date">
                  <img src="yosemite.JPG"></img>
                  <h1>{blog.location}</h1>
                  <h4>{blog.date}</h4>
                  <Link to={`/blogs/${blog.id}`}>Click to see more details</Link>
                </div>
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
