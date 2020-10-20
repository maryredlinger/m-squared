import React from 'react';

import '../styles/home.css'


class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        blog: {} 
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/blogs/${id}`).
      then((response) => response.json()).
      then((blog) => this.setState({ blog }));
  }
render() {
    const { blog } = this.state;
    console.log("details")
    return (
      <div>
            <div className="polaroid" key={blog.id}>
                <div className="polaroid_date">
                  <img src="yosemite.JPG"></img>
                  <h1>{blog.location}</h1>
                  <h4>{blog.date}</h4>
                </div>
            </div>

        <div>
          <label> Title </label>
          <p> {blog.location} </p>
        </div>

        <div>
          <label> Description </label>
          <p> {blog.notes} </p>
        </div>

        <div>
          <label> Is Published </label>
          <p> {blog.reminders} </p>
        </div>
      </div>
    );
  }
}

export default  BlogDetails