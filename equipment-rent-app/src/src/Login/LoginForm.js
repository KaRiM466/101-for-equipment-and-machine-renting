// src/LoginForm.jsx
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../UserContext'; // استيراد UserContext
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const { setUsername } = useContext(UserContext); // استخدام useContext للحصول على setUsername
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // إعداد useNavigate للتوجيه

    // Form Submit Handler
    const formSubmitHandler = async(e) => {
        e.preventDefault();

        if (email.trim() === "") return toast.error("E-mail is required");
        if (password.trim() === "") return toast.error("Password is required");

        try {
            const res = await axios.post('http://localhost:5008/api/auth/login', {
                email,
                password
            });
            toast.success(`Welcome ${res.data.username}!`);
            localStorage.setItem('token', res.data.token); // تخزين التوكن في localStorage
            localStorage.setItem('username', res.data.username); // تخزين اسم المستخدم
            setUsername(res.data.username); // تحديث اسم المستخدم في السياق
            navigate('/'); // الانتقال إلى الصفحة الرئيسية بعد تسجيل الدخول
        } catch (err) {
            toast.error("Invalid email or password");
        }
    };

    // Show password handler
    const showPasswordHandler = () => {
        setShowPassword(prev => !prev);
    };

    return ( <
        div className = "form-wrapper" >
        <
        ToastContainer theme = 'colored' / >
        <
        h1 className = "form-title" > Login to your account < /h1> <
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
        input value = { password }
        onChange = { e => setPassword(e.target.value) }
        type = { showPassword ? "text" : "password" }
        placeholder = 'Password'
        required /
        > {
            showPassword ? ( <
                i onClick = { showPasswordHandler }
                className = "bi bi-eye-slash-fill show-password-icon" > < /i>
            ) : ( <
                i onClick = { showPasswordHandler }
                className = "bi bi-eye-fill show-password-icon" > < /i>
            )
        }

        <
        button className = "form-btn" > Login < /button> <
        /form> <
        div className = "form-footer" >
        Don 't have an account? <
        Link to = "/register"
        className = 'form-link' > Register < /Link> <
        /div> <
        /div>
    );
}

export default LoginForm;