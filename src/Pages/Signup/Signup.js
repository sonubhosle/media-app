import React, { useState } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

    const notify = () => toast.error("Email Already In Use !");


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');


        } catch (error) {
            notify();

        }
    }

    return (
        <div className="container">
            <div className="form ">
                <div class="user-icon">
                    <i class='bx bxs-user-circle'></i>
                </div>

                <div className="left">
                    <div className='heading'>Signup</div>
                    <form onSubmit={handleSubmit} className='form-group' >
                        <div className="input-box">
                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className='label'><i class='bx bx-envelope'></i> Email</div>

                        </div>
                        <div className="input-box">
                            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className='label'><i class='bx bx-lock-alt'></i> Password</div>

                        </div>
                        <button type="submit" className='signup-btn'>Signup</button>
                    </form>

                    <p>If you have an account please <Link to='/login'>login</Link></p>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup