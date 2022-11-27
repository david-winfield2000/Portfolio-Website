import React from "react";
import github from '../static/images/github.png'
import dice from '../static/images/dice.png'
import gokitty from '../static/images/gokitty.png'
import cardiac from '../static/images/cardiac.png'
import repbuddy from '../static/images/repbuddy.png'
import roblox from '../static/images/roblox.jpg'
import robinhood from '../static/images/robinhood.png'

export default function Projects() {
    return (
        <div class="section background" id="projects-page">
            <h1>Some of My Favorite Projects</h1>
            <p>Below is a selection of some of the projects I am most proud
            to show off. Each project forced me to learn a new tech stack,
            and helped me gain experience as a developer. I don't just code
            professionally, I also do it for fun too :)
            </p>
            <div class="projects-container">
                <div class="project">
                    <img src={dice} alt="Dice" />
                    <button class="">
                        <img id="github" src={github} alt="" />
                        <p>Dice Bot 5e</p>
                    </button>
                </div>
                <div class="project">
                    <img src={gokitty} alt="Cat" />
                    <button class="">
                        <img id="github" src={github} alt="" />
                        <p>GoKitty AdBot</p>
                    </button>
                </div>
                <div class="project">
                    <img src={cardiac} alt="Heart" />
                    <button class="">
                        <img id="github" src={github} alt="" />
                        <p>cARdiac VR</p>
                    </button>
                </div>
                <div class="project">
                    <img src={repbuddy} alt="Swole" />
                    <button class="">
                        <img id="github" src={github} alt="" />
                        <p>RepBuddy</p>
                    </button>
                </div>
                <div class="project">
                    <img src={roblox} alt="Swole" />
                    <button class="">
                        <img id="github" src={github} alt="" />
                        <p>Roblox Scripts</p>
                    </button>
                </div>
                <div class="project">
                    <img src={robinhood} alt="Stonks" />
                    <button class="">
                        <img id="github" src={github} alt="" />
                        <p>Stock Scripts</p>
                    </button>
                </div>
                
                {/* <h3>RepBuddy</h3>
                <h3>cARdiac VR</h3>
                <h3>Roblox video game</h3>
                <h3>Stock trading script</h3> */}
            </div>
        </div>
    )
}