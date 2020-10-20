import React from 'react'

import '../styles/toggle.css'
import { func } from 'prop-types';


const Toggle = (props) => {
    console.log("hi", props.blogs)
    window.onload = function(){

        var card = document.getElementById('card');
    
        card.addEventListener('click', function() {
            if (!this.classList.contains('on')) {
                this.classList.remove('off');
                this.classList.add('on');
            } else {
                this.classList.remove('on');
                this.classList.add('off');
            }
        });
    }
    return(
        <div>
            <h1>toggle</h1>
            <div className="flip-container">
                <div id="card" className="flipper">
                    <div className="front">
                        The front face
                    </div>
                    <div className="back">
                        The back face
                    </div>
                </div> 
            </div>
            {props.blogs.map((blog, index) => {
                return(
                    <div>
                        <h1>{blog.location}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Toggle;