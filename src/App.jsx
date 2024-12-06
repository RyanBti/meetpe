import React from 'react';
import { Animation, Carousel, Liens, MessageSection, ScrollSection, ComingSoon, FooterMeetpe } from './components';

const App = () => {
    return (
        <div>

            {/* Sections */}
            <div id="ComingSoon">
                <ComingSoon />
            </div>

            <div id="liens">
                <Liens />
            </div>

            <div id="carousel">
                <Carousel />
            </div>

            <div id="scroll-section">
                <ScrollSection />
            </div>
            
            <div id="animation">
                <Animation />
            </div>

            <div id="message-section">

                <MessageSection />
            </div>

            <div id="FooterMeetPe">

                <FooterMeetpe />
            </div>
        </div>
    );
};

export default App;
