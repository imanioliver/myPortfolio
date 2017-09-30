import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScrollableAnchor from "react-scrollable-anchor";

export default class FAQs extends Component {
    render(){
        return (
            <ScrollableAnchor className="FAQAnchor" id={'FAQs'}>
                <div id="FAQdiv">
                    <h3>Frequently Asked Questions</h3>
                    <p>My story is so unique, and I love telling it! Although I'd love to meet you and chat with you in person, I do want to share some extra tidbits about myself before you go. If you'd like to check out my portfolio, you can also head over to <span id="homeToCVLink"><Link to="/cv" >my CV</Link></span> to see some of my professional experience.  </p>

                    <div className="q&a">
                        <h2>What are the things that excite you?</h2>
                        <p>Apart from working on a challenging piece of code, I am completely and utterly in love with track and field. I've been running since I could walk, and compete professionally in the sport as well. I came quite close to making the USA Olympic team in 2016 when I placed fourth at the Olympic Trials. It's a tough sport, and it takes hard work to reach the levels that I'd like to reach. But I definitely believe that track and field has heavily informed my work ethic and problem solving skills.</p>
                        <hr/>
                        <h2>How do you balance track and everything else?</h2>
                        <p>I'd track and school in tandem for over 10 years. Although there was an adjustment period when I entered the working world, I've realized that running track and field (and doing the Triple Jump, my main event) is what provides the balance I need to succeed in other areas of my life. I've learned so much about myself and life from being an athlete! For example, my passion for and dedication to the sport directly inform and influence my ability (and proclivity, and ability, likelihood of, mindset toward..) to seeing things through to their success, and trusting the process! Lemonade!!</p>
                        <hr/>
                        <h2><strong>What are your goals for the future</strong></h2>
                        <p><strong>Welp.</strong> </p>
                        <hr/>
                        <h2>How did you get into tech from education?</h2>
                        <p>I don't consider myself as having left one industry and gone into another. I've studied education, psychology, law, sports, and computer science all with a similar goal in mind...How can I obtain the tools/use tools to make the world around me better? To me that can now be combined with the myriad of other skills that I have to be most effective at the things I set out to do. I love that it allows one more opportunity to communicate with people, understand them, and make them happy/make things better for them.                       </p>
                        <hr/>
                        <h2>What kind of companies are you interested in working with? [working on teams]</h2>
                        <p>I am in it for the people. I truly believe that I living a life of service, and I want to use technology to serve people in some way. How can I make their daily  lives easier? How can I turn <i>their </i> lemons into lemonade? I love companies that care about their users, and the impact they have on them and their worlds. They're the ones that I trust and that I use in my every day life. I'd love to join a team that shares those same values. </p>
                        <h1>lemonade stand picture</h1>
                        <p>I also love working with people! I believe that collaboration and communication foster the most growth for all parties involved. There's nothing better than having a great team that has your back and that you can provide support to!</p>

                    </div>
                </div>
            </ScrollableAnchor>

        )
    }
}
