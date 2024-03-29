import React from "react";
import david from '../static/images/david.png'

export default function About() {
    return (
        <div class="section" id="landing">
            <img class="circle" src={david} alt="Picture of me" />
            <h1>David Winfield</h1>
            <h3>University of Central Florida '23 | Computer Science</h3>
            <div>
                {/* <button type="button" class="btn btn-warning">Gmail</button> */}
                <button type="button" class="btn btn-warning">GitHub</button>
                <button type="button" class="btn btn-warning">LinkedIn</button>
            </div>
        </div>
    )
}