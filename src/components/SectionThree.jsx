import React from 'react'
import '../styles/SectionThree.css'
import dil1 from '../assets/dli 1.png'
import dil2 from '../assets/dli 2.png'
function SectionThree() {
    return (
        <div className="sec-three py-5">
            <div className="container text-center text-md-start">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={dil1} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h2>Discount up to 50% All Excursions</h2>
                        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In doloremque necessitatibus repudiandae? Repellat asperiores eius sit nostrum sequi architecto accusamus velit praesentium eveniet perspiciatis dolorum.</p>
                        <button type="button" className="sec-btn btn rounded-pill">
                       read more
                   </button>
                    </div>
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-md-6 order-2 order-md-1">
                        <h2>Discount up to 50% All Excursions</h2>
                        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In doloremque necessitatibus repudiandae? Repellat asperiores eius sit nostrum sequi architecto accusamus velit praesentium eveniet perspiciatis dolorum.</p>
                        <button type="button" className="sec-btn btn rounded-pill">
                       read more
                   </button>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <img src={dil2} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
