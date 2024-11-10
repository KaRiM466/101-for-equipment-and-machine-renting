import { useState } from 'react';
import './ContactForRent.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForRent = () => {
    const [yes, setYes] = useState(false);
    const [no, setNo] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [details, setDetails] = useState('');

    const handleYesChange = (event) => {
        setYes(event.target.checked);
        if (event.target.checked) setNo(false);
    };

    const handleNoChange = (event) => {
        setNo(event.target.checked);
        if (event.target.checked) setYes(false);
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        
        if (firstName.trim() === "") return toast.error('First Name Is Required');
        if (lastName.trim() === "") return toast.error('Last Name Is Required');
        if (country.trim() === "") return toast.error('Country Is Required');
        if (companyName.trim() === "") return toast.error('Company Name Is Required');
        if (product.trim() === "") return toast.error('Product Is Required');
        if (quantity.trim() === "") return toast.error('Quantity Is Required');
        if (email.trim() === "") return toast.error('Email Is Required');
        if (phone.trim() === "") return toast.error('Phone Is Required');
        if (details.trim() === "") return toast.error('Details Is Required');
    
        try {
            const response = await fetch('http://localhost:5008/api/contact/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    country,
                    companyName,
                    product,
                    quantity,
                    email,
                    phone,
                    details,
                    delivery: yes ? 'yes' : 'no',
                    rentalFrom: document.querySelector('input[name="rentalFrom"]').value,
                    rentalTo: document.querySelector('input[name="rentalTo"]').value,
                }),
            });
    
            if (response.ok) {
                toast.success('Thank you for your message!');
                // إعادة تعيين النموذج
                setFirstName('');
                setLastName('');
                setCountry('');
                setCompanyName('');
                setProduct('');
                setQuantity('');
                setEmail('');
                setPhone('');
                setDetails('');
                setYes(false);
                setNo(false);
            } else {
                throw new Error('Failed to submit inquiry');
            }
        } catch (error) {
            toast.error('Error submitting inquiry');
        }
    };
    

    return (
        <div className="contact-for-rent">
            <div className="contact-for-rent-slide"></div>

            <div className="container">
                <div className="contact-for-rent-info">
                    <h1 className="contact-for-rent-info-title">Rental Enquiry</h1>
                    <p className="contact-for-rent-info-desc">Get a quote for rental products</p>
                    <p className="contact-for-rent-info-desc-details">
                        Whether you need to find out more about heavy machinery, or if you need specific information
                        for used, new or rental excavators, dozers, etc. we are more than happy to help.
                    </p>
                </div>

                <div className="contact-for-rent-form">
                    <ToastContainer theme='colored' />
                    <form
                        action="https://formsubmit.co/ke422644@gmail.com"
                         method="POST"
                        onSubmit={formSubmitHandler}
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>First Name</label>
                                <input name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} type="text" />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Last Name</label>
                                <input name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} type="text" />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Country</label>
                                <select name='country' value={country} onChange={e => setCountry(e.target.value)}>
                                    <option value="">Country</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Company Name</label>
                                <input name='companyName' value={companyName} onChange={e => setCompanyName(e.target.value)} type="text" />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Products</label>
                                <input name='product' value={product} onChange={e => setProduct(e.target.value)} type="text" />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Quantity</label>
                                <input name='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} type="text" />
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label >I need this item delivered</label>
                                <br />
                                <label className='label-check'>
                                    <input name='delivery' className='checkbox' type="checkbox" value="yes" checked={yes} // تعكس حالة "لا"
                                        onChange={handleYesChange} />
                                    Yes



                                    <input name='delivery' className='checkbox' type="checkbox" value="no" checked={no} // تعكس حالة "لا"
                                        onChange={handleNoChange} />
                                    No

                                </label>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Rental From</label>
                                <input name='rentalFrom' type="text" />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Rental To</label>
                                <input name='rentalTo' type="text" />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Email</label>
                                <input name='email' value={email} onChange={e => setEmail(e.target.value)} type="email" />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Phone Number</label>
                                <input name='phone' value={phone} onChange={e => setPhone(e.target.value)} type="tel" />
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label>Details</label>
                                <textarea name='details' value={details} onChange={e => setDetails(e.target.value)}></textarea>
                            </div>

                            <div className="contact-btn">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForRent;
