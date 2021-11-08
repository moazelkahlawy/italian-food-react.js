import React from 'react'
import '../styles/Hero.css'
import header1 from '../assets/header 1.png'
import header2 from '../assets/header 2.png'
import header3 from '../assets/header 3.png'
function Hero() {
    return (
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 hero-text text-center text-md-start">
                   <h1 className="mt-lg-5">Italian Food</h1>
                   <h6 className="mt-lg-3">loremipsum dolor</h6>
                   <button type="button" className="hero-btn btn btn-light rounded-pill mt-lg-5 mt-3">
                       Read more
                   </button>
                   <p className="mt-lg-4 mt-3">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, delectus exercitationem? Repellendus vero natus temporibus error similique deserunt suscipit distinctio!
                   </p>
                </div>
                <div className="col-md-6 hero-img">
                    <div className="img-content">
                    <img src={header1} alt="" className="img-1 img-fluid"/>
                    <img src={header2} alt="" className="img-2 img-fluid"/>
                    </div>
                </div>
                
            </div>
        </div>
        <img src={header3} alt="" className="img-3 img-fluid d-none d-md-inline"/>
        </>
    )
}

export default Hero
