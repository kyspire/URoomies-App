import React from 'react';
import Header from '../components/HeaderBar';
import Footer from '../components/BottomBar';
import '../styles/SearchRoomates.css'

function SearchRoomates() {
    return (
        <div className='search-roomates-container'>
            <div className='title-area'>
                <h1 className='search-results-title'>Search Results</h1>
                <h2 className='results-found'>Found ... results</h2>
            </div>

            <div className='results-container'>
                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>

                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>

                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>

                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>

                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>

                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>

                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>

                <div className='one-roomate'>
                    <img className='roommate-pfp' src='/DjKhaled.jpg'></img>
                    <h2>One roomate</h2>
                    <div className='roommate-about-me'>
                        <p className='roommate-about-me-description'>About me</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

function SearchRoomatesPage() {
    return (
        <div className='search-roomates-page'> 
            <Header />
            <SearchRoomates />
            <Footer />
        </div>

    );
};

export default SearchRoomatesPage;