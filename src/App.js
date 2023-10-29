
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Pages/Css/Style.css'
import './Pages/Css/Login.css'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Protected from './Component/Protected/Protected'
import Header from './Component/Header/Header';
import Hide from './Component/HideNavbar/Hide'
import Navbar from './Component/Content/Navbar/Navbar';
import Notifications from './Pages/Nottifications/Notifications';
import Shop from './Pages/Shop/Shop'
import Conversation from './Pages/Conversation/Conversation'
import Wallet from './Pages/Wallet/Wallet'
import Subscription from './Pages/Subscription/Subscription'
import Profile from './Pages/Profile/Profile'
import Settings from './Pages/Settings/Settings'
import Footer from './Component/Footer/Footer';

function App() {
  return (

    <BrowserRouter>

      {/* Hide Commponent is used for hide header and Footer from login Page or Signup Page */}

      <Hide>
        <Header />
        <Navbar />
      </Hide>

      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Protected />} >
          <Route path='/' index element={<Home />} />
          <Route path='/notification' element={<Notifications />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/conversation' element={<Conversation />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
      

      <Hide>
        <Footer />
      </Hide>


    </BrowserRouter>
  );
}

export default App;
