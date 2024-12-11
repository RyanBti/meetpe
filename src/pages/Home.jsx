import React from 'react';
import { Animation, Carousel, Liens, MessageSection, ScrollSection, ComingSoon, FooterMeetpe,} from '../components';
const Home = () => {
    return (
        <div>
            {/* Section Coming Soon */}
            <div id="ComingSoon">
                <ComingSoon />
            </div>

            {/* Section Liens */}
            <div id="liens">
                <Liens />
            </div>

            {/* Section Carousel */}
            <div id="carousel">
                <Carousel />
            </div>

            {/* Section Scroll */}
            <div id="scroll-section">
                <ScrollSection />
            </div>

            {/* Section Animation */}
            <div id="animation">
                <Animation />
            </div>

            {/* Section Message */}
            <div id="message-section">
                <MessageSection />
            </div>

            {/* Footer */}
            <div id="FooterMeetPe">
                <FooterMeetpe />
            </div>
        </div>
    );
};

export default Home;
