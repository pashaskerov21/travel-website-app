import React from 'react'
import video1 from './../asset/videos/video-1.mp4'
//import video2 from './../asset/videos/video-2.mp4'
import Button from './Button'

function Banner() {
    return (
        <section className='banner'>
            <video autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
            <div className="content">
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className="home-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER</Button>
                </div>
            </div>
        </section>
    )
}

export default Banner
