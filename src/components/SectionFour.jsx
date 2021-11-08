import React from 'react'
import '../styles/SectionFour.css'
import pizza1 from '../assets/pizza 1.png'
import pizza2 from '../assets/pizza 2.png'
import leaf from '../assets/leaf.png'
function SectionFour() {
    return (
        <div className="sec-four" id="ourStory">
            <div className="container py-5">
            <div className="text-content text-center">
                <h2>Lorem Ipsum Dolor Sit Amer</h2>
                <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ab. Consequatur, ad quo neque aspernatur laborum error nesciunt quasi accusamus!</p>
            </div>
            <div className="line"><span></span></div>
            <img src={pizza2} alt="" className="pizza2"/>
            <img src={pizza1} alt="" className="pizza1"/>
            <img src={leaf} alt="" className="leaf"/>
            </div>
        </div>
    )
}

export default SectionFour
