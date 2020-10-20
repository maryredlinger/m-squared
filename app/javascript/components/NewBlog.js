import React from 'react'

class NewBlog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            blog : {
              id: '',
              location: '',
              camp_spot: '',
              date: '',
              notes: '',
              reminders: ''
          }
        }
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    render(){
        const { blog } = this.state
        return(
            <div>
                <h1> New Post baby</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={blog.location} id="location" name="location" onChange={this.handleInputChange}></input>
                </form>
            </div>
        )
    }
}

export default NewBlog