import React from 'react';
import "./styles.css"

class openedTab extends React.Component {
    opentab = (tabname) => {
        const tablinks = document.getElementsByClassName("tab-links");
        const tabcontents = document.getElementsByClassName("tab-contents");

        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src="Assets/me.jpg" alt="Žan Križaj"/>
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About me:</h1>
                            <p>I am a 21-year-old from Slovenia, currently finish my second year of college. I am working on a diplomatic assignment focused on developing a fitness application for iOS, which has led me to delve into SwiftUI for the first time.</p>

                            <div className="tab-titles">
                                <p className="tab-links active-link" onClick={() => this.opentab('education')}>Education</p>
                                <p className="tab-links" onClick={() => this.opentab('experience')}>Experience</p>
                                <p className="tab-links" onClick={() => this.opentab('free-time')}>Free time</p>
                            </div>
                            <div className="tab-contents active-tab" id="education">
                                <ul>
                                    <li><a href="https://sckr.si/vss/" target='_blank'><span>2022 - 2024</span><br/>Višja tehniška šola Kranj</a></li>
                                    <li><a href="https://sckr.si/sts/" target='_blank'><span>2016 - 2021</span><br/>Srednja tehniška šola Kranj</a></li>
                                    <li><a href="https://www.osorehek.si/" target='_blank'><span>2020 - 2011</span><br/>OŠ Orehek Kranj</a></li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="experience">
                                <ul>
                                    <li><span>Creatim</span><br/>During my tenure at Creatim, I enhanced my web development skills through hands-on projects. Initially, I was tasked with creating a basic To-do list application using HTML, CSS, and JavaScript. Subsequently, I undertook a project involving Vue.js, where I integrated an API to display data about Star Wars characters.</li>
                                    <li><span>Caretronic</span><br/>At Caretronic, I was responsible for assembling and configuring servers, which were then prepared for deployment. This included installing necessary software and performing system setups. Later, during my summer internship, I transitioned into a programming role where I contributed to enhancing the company’s website by adding new features using .NET technologies.</li>
                                    <li><span>SRC Infonet</span><br/>SRC Infonet was where I began my professional journey, gaining essential practical experience. Although I was relatively new and had limited programming tasks, this role provided me with foundational knowledge in SQL.</li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="free-time">
                                <ul>
                                    <li><span>In my free time I like to:</span></li>
                                    <li>- Workout in the gym</li>
                                    <li>- Play basketball with friends</li>
                                    <li>- Read self development books</li>
                                    <li>- Watch movies or series</li>
                                    <li>- Learn more about programming</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default openedTab;
