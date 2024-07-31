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
                            <img src="Assets/user.png" alt="User"/>
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About me:</h1>
                            <p>I am a 21 year young "adult" from Slovenia. Currently I am working on my college degree in programming. 
                                Outside school I never did much programming on my own because I didn't have any ideas what to program. (I was also quite lazy...) 
                                But after my last job interview to which I was not accepted mainly because of my lack in skills and projects, I decided that I would start to program more. 
                                Thats also how this website started to exist.
                            </p>

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
                                    <li><span>Creatim</span><br/>In my final year of college for my necessary practical experience I got accepted to this company
                                    where I would learn more about Web development. At first they gave me an assignment that I create a simple To-do list with just
                                    basic HTML CSS and JS. After that they gave me a Vue assignment where I would use an API that displays data about Star Wars characters.
                                    </li>
                                    <li><span>Caretronic</span><br/>This was my latest necessary practical experience company. I found about this 
                                    company through an add on a website about teenage work jobs? At this company I was building and preparing 
                                    servers, that would later be sent away. So i built them together and then I installed all the software
                                    and so on and so forth. Later in my summer vacation I decided to work there as a programmer. And I was working on
                                    their website and making it better with some extra features.</li>
                                    <li><span>SRC Infonet</span><br/>This company was the first company where I started my necessary practical
                                    experience. I got accepted because my family knew a guy that worked there. I was about 16 maybe 17 years old
                                    and at this company I didn't get a lot of programming assignments, but mainly what I learned from here 
                                    was SQL databases.</li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="free-time">
                                <ul>
                                    <li><span>In my free time I like to:</span></li>
                                    <li><span>Read</span><br/>books on self development.</li>
                                    <li><span>Workout</span><br/>in the gym.</li>
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
