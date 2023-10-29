import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './Logout.css'

const Logout = () => {

    // const user = JSON.parse(localStorage.getItem('user'));
    // Use to print user email

    const navigate = useNavigate();
    
    const handleLogout = async () =>{
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }

  return (
    <div className="logout-section">
       <button className='logout' onClick={handleLogout}><i class='bx bx-log-out'></i> <p>Log out</p></button>
    </div>
  )
}

export default Logout