import React from 'react'
import '../styles/Information.css'
import Header from "../components/HeaderBar.jsx";
import Footer from '../components/BottomBar.jsx';
import react from '../../src/assets/react.svg';

function AboutTheProject() {
    return (
        <div className='about-project-container'>
            <h1 className='about-project-title'>About the Project</h1>
            <Divider />
            <div className='about-project-description'>
                Project bio here
            </div>
        </div>
    );
};

function MadeWith() {
    return (
        <div className='made-with-container'>
            <h2 className='made-with-text'>Made with</h2>
            <img src={react} alt='React Logo' className='react-logo'></img>
        </div>
    );
};

function TheCreators() {
    return (
        <div className='about-creator-container'>
            <h1 className='about-creator-title'>The Creators</h1>
            <Divider />
            <CreatorProfiles />
        </div>
    );
};

function CreatorProfiles() {
    return (
        <div className='user-profile-pictures'>
            <img className="user-profile-picture" src="/DjKhaled.jpg"></img>
            <img className="user-profile-picture" src="/DjKhaled.jpg"></img>
            <img className="user-profile-picture" src="/DjKhaled.jpg"></img>
        </div>
    );
};

function Divider() {
    return (
        <hr className='divider-line'></hr>
    );
};

function InformationBody() {
    return (
        <div className='information-body-container'>
            <AboutTheProject />
            <MadeWith />
            <TheCreators />
        </div>
    );
};

function Information () {
    return (
        <div className='information-page-contaner'>
            <Header />
            <InformationBody />
            <Footer />
        </div>
    );
};

export default Information

