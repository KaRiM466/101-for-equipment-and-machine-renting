import "./Contact.css"
import {ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react';



const Contact = () => {




    const[firstName , setFirstName] = useState('')
    const[lastName , setLastName] = useState('')
    const[email , setEmail] = useState('')
    const[phone , setPhone] = useState('')







    const formSubmitHAndler = (e)=> {
        e.preventDefault();

        if(firstName.trim() === "") return toast.error('First Name Is Required')
        if(lastName.trim() === "") return toast.error('Last Name Is Required')
        if(email.trim() === "") return toast.error('Email Is Required')
        if(phone.trim() === "") return toast.error('Phone Is Required')
            toast.success('Thank you for your message!');


        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
      }


    return (
        <div className="contact-us">
            <div className="contact-us-img">
                <h1 className="contact-us-title">Contact Us</h1>
            </div>






            <div className="contact-us-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="contact-us-content-one">
                                <h1>Get In Touch</h1>
                                <a href="tel:00971508202029"> <i className="bi bi-telephone-fill"></i> 00971508202029 </a>
                                <a href="mailto:101heavymachinery@gmail.com"> <i className="bi bi-envelope-paper"></i> 101heavymachinery@gmail.com </a>
                                <a href="https://www.google.com/maps?q=25.276987,55.296249"> <i className="bi bi-geo-alt"></i> Musaffah-M37-210-Abu Dhabi-U.A.E</a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="contact-us-content-tow">
                                <ToastContainer theme='colored'/>
                                <form action="https://formsubmit.co/ke422644@gmail.com"
                         method="POST" onSubmit={formSubmitHAndler} className="contact-form">
                                    <div className="contact-input-wrapper">
                                        <div className="row">
                                            <div className="col-6">
                                                <input name="name" value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="Frist Name" />
                                            </div>
                                            <div className="col-6">
                                                <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <input value={phone} onChange={e => setPhone(e.target.value)} type="telephone" placeholder="Phone Number" />
                                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="E-mail" />




                                        <div className="container mt-4">
                                            <div className="chick-box">
                                            <p>What Equipment Do you Require ?</p>
                                                <div className="form-check d-flex align-items-center mb-3">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> Excavator Rental </label>
                                                </div>

                                                <div className="form-check d-flex align-items-center mb-3">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> Large dumper truck rental </label>
                                                </div>

                                                <div className="form-check d-flex align-items-center">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> Dump truck </label>

                                                </div>

                                                <div className="form-check d-flex align-items-center">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> Shovel </label>

                                                </div>

                                                <div className="form-check d-flex align-items-center">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> Rollar </label>

                                                </div>

                                                <div className="form-check d-flex align-items-center">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> pick ups </label>

                                                </div>

                                                <div className="form-check d-flex align-items-center">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> waste management transportation </label>

                                                </div>

                                                <div className="form-check d-flex align-items-center">
                                                    <input type="checkbox" className="form-check-input small-checkbox me-2" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label className="form-check-label" for="vehicle1"> Heavy wheel loader excavator </label>

                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <textarea className="contact-textarea" placeholder="Take You Message" rows='5'></textarea>
                                    <button className="contact-btn">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="location-map container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509304!2d144.95565101568242!3d-37.81720944202181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57787f4d6e6c0a9!2sFlinders%20St%20Station!5e0!3m2!1sen!2sus!4v1696944178932!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Location"></iframe>
            </div>
        </div>
    );
}

export default Contact;