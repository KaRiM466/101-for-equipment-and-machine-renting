import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
    // استخدام حالات لتخزين القيم المدخلة
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // معالج إرسال النموذج
    const formSubmitHandler = async(e) => {
        e.preventDefault(); // منع السلوك الافتراضي للنموذج

        // التحقق من الحقول المدخلة
        if (email.trim() === "") return toast.error("E-mail is required");
        if (userName.trim() === "") return toast.error("User Name is required");
        if (password.trim() === "") return toast.error("Password is required");

        try {
            // إرسال البيانات إلى API التسجيل
            const res = await axios.post('http://localhost:5008/api/auth/register', {
                username: userName,
                email,
                password
            });

            // إظهار رسالة النجاح
            toast.success(res.data.msg);

            // تفريغ الحقول بعد النجاح
            setEmail("");
            setUserName("");
            setPassword("");
        } catch (err) {
            // إظهار رسالة الخطأ
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

export default RegisterForm;