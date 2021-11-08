import React ,{useState} from 'react'
import '../styles/Contact.css'
import leafContact1 from '../assets/leafcontant1.png'
import leafContact2 from '../assets/leafcontant2.png'
import { Form, Button } from "react-bootstrap";
function Contact() {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
      }
    return (
        <div className="contact" id="contact">
        <div className="container text-center">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus repudiandae illo ipsum nesciunt beatae facere, voluptate magnam modi!</p>
            <form onSubmit={handleSubmit}>
            <Form.Control type="email" value={value} onChange={handleChange} placeholder="Your Email" />
            <Button type="submit" >
                subscribe
            </Button>
            </form>
            <div className="leaf-contact">
            <img src={leafContact1} alt="" className="img-fluid leaf-contact-one"/>
            <img src={leafContact2} alt="" className="img-fluid leaf-contact-two"/>
            </div>
        </div>
        </div>
    )
}

export default Contact
