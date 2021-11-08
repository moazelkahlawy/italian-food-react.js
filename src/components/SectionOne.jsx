import React from 'react'
import '../styles/SectionOne.css'
import content1 from '../assets/content 1.png'
import content2 from '../assets/content 2.png'
import content3 from '../assets/content 3.png'
function SectionOne() {
    return (
        <div className="container" id="menu">
            <div className="text-content text-center mt-5">
                <h2>Lorem Ipsum Dolor</h2>
                <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ab. Consequatur, ad quo neque aspernatur laborum error nesciunt quasi accusamus!</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 img-sec text-center text-md-start">
                    <img src={content1} alt="" className="img-fluid"/>
                    <h6>Lorem ipsum</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="col-lg-4 col-md-6 img-sec text-center text-md-start">
                    <img src={content2} alt="" className="img-fluid"/>
                    <h6>Lorem ipsum</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="col-lg-4 col-md-6 img-sec text-center text-md-start">
                    <img src={content3} alt="" className="img-fluid"/>
                    <h6>Lorem ipsum</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div>
                <button type="button" className="sec-btn btn rounded-pill">
                       show more
                   </button>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
