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
                            <p>I am a 21 year young "adult" from Slovenia. I am finishing my second year at college and I am working on my diplomatic assignment which will be a fittness iOS application, that is why I am currently learning about SwiftUI.
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
                                    <li><span>Creatim</span><br/>At this company I learned more about Web Development. At first they gave me an assignment to create a simple To-do list with just basic HTML CSS and JS. After that they gave me a Vue assignment where I would use an API that displays data about Star Wars characters.
                                    </li>
                                    <li><span>Caretronic</span><br/>This was my latest necessary practical experience company. At this company I was building and preparing servers, that would later be sent away. So I built them together and then I installed all the software and so on and so forth. Later in my summer vacation I decided to work there as a programmer. And I was working on their website and making it better with some extra features.</li>
                                    <li><span>SRC Infonet</span><br/>This company was the first company where I started my necessary practical
                                    experience. I was young and also did not recieve much programming assignments however I did learn SQL there.</li>
                                </ul>
                            </div>
                            <div className="tab-contents" id="free-time">
                                <ul>
                                    <li><span>In my free time I like to:</span></li>
                                    <li>Read books on self development.</li>
                                    <li>Workout in the gym or playing basketball with friends</li>
                                    <li>Watching comedy movies/series</li>
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
