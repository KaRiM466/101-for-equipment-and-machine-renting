import './Register/Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // Form Submit Handler
    const formSubmitHandler = async(e) => {
        e.preventDefault();

        if (email.trim() === "") return toast.error("E-mail is required");
        if (userName.trim() === "") return toast.error("User Name is required");
        if (password.trim() === "") return toast.error("Password is required");

        try {
            const res = await axios.post('http://localhost:5005/api/auth/register', {
                username: userName,
                email,
                password
            });
            toast.success(res.data.msg);
        } catch (err) {
            toast.error("Error registering user");
        }
    };

    return ( <
        div className = "form-wrapper" >
        <
        ToastContainer theme = 'colored' / >
        <
        h1 className = "form-title" > Create New Account < /h1> <
        form onSubmit = { formSubmitHandler }
        className = "form" >
        <
        input value = { email }
        onChange = { e => setEmail(e.target.value) }
        type = "email"
        placeholder = 'E-mail'
        required /
        >
        <
        input value = { userName }
        onChange = { e => setUserName(e.target.value) }
        type = "text"
        placeholder = 'Username'
        required /
        >
        <
        input value = { password }
        onChange = { e => setPassword(e.target.value) }
        type = "password"
        placeholder = 'Password'
        required /
        >

        <
        button className = "form-btn" > Register < /button> <
        /form> <
        div className = "form-footer" >
        Already have an account ?
        <
        Link to = "/Login"
        className = 'form-link' > Login < /Link> <
        /div> <
        /div>
    );
}

export default Register;