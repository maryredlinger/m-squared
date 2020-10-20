import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home'
import NewBlog from './NewBlog'
import BlogDetails from "./BlogDetails";
import Polaroids from "./Polaroids";

class App extends React.Component {
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
      blogs: []
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
    return (
      <Router>
      <React.Fragment>
        <Link to='/new_blog'>New Blog</Link>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/new_blog"  component={NewBlog} />
            <Route exact path="/blogs/:id" component={BlogDetails} />
            <Route exact path="/polaroids" component={Polaroids} />

          </Switch>
        <div>
          <h1>Hello World</h1>
        </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App
