import './App.css';
import Footer from './Component/Footer/Footer';
import MainNavbar from './Component/NavBar/Navbar';
import TopNavbar from './Component/NavBar/TopNavbar';
import About from './Component/Pages/About Us/About';
import Blog from './Component/Pages/Blog/Blog';
import Contact from './Component/Pages/Contact Us/Contact';
import Home from './Component/Pages/Home/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SpiderLifts from './Component/Pages/OurEquipments/Spider Lifts/SpiderLifts';
import ForkLifts from './Component/Pages/OurEquipments/Fork Lifts/ForkLifts';
import ScissorLifts from './Component/Pages/OurEquipments/Scissor Lifts/ScissorLifts';
import BoomLifts from './Component/Pages/OurEquipments/Boom Lifts/BoomLifts';
import SpiderCranes from './Component/Pages/OurEquipments/Spider Cranes/SpiderCranes';
import Miscellaneous from './Component/Pages/OurEquipments/Miscellaneous/Miscellaneous';
import GlassVacuum from './Component/Pages/OurEquipments/Glass Vacuum Lifters & Manipulators/GlassVacuum';
import TruckMountedBoomLifts from './Component/Pages/OurEquipments/Truk-mounted Boom Lifts/TruckMountedBoomLifts';
import HowToHireSpiderCrane from './Component/Pages/Blog/How To Hire/How To Hire Spider Crane/HowToHireSpiderCrane';
import HowToHireForklifts from './Component/Pages/Blog/How To Hire/How To Hire Forklifts/HowToHireForklifts';
import HowToHireSpiderLifts from './Component/Pages/Blog/How To Hire/How To Hire Spider Lifts/HowToHireSpiderLifts';
import HowToHireBoomLifts from './Component/Pages/Blog/How To Hire/How To Hire Boom Lifts/HowToHireBoomLifts';
import HowToHireScissorLifts from './Component/Pages/Blog/How To Hire/How To Hire Scissor Lifts/HowToHireScissorLifts';
import ContactForRent from './Component/Pages/Contact Us/ContactForRent';
import BackLoader from './Component/Pages/OurEquipments/Back Loader/BackLoader';
import Bobcat from './Component/Pages/OurEquipments/Bobcat/Bobcat';
import Lwbad from './Component/Pages/OurEquipments/Lwbad/Lwbad';
import Grader from './Component/Pages/OurEquipments/Grader/Grader';
import Compactor from './Component/Pages/OurEquipments/Compactor/Compactor';
import Generator from './Component/Pages/OurEquipments/Generator/Generator';
import OurTeam from './Component/Pages/Our Team/OurTeam';
import LoginForm from './src/Login/LoginForm';
import RegisterForm from './src/Register/RegisterForm';
import { useState } from 'react';

function App() {
    const [username, setUsername] = useState(null);
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        TopNavbar username = { username }
        setUsername = { setUsername }
        /> <
        MainNavbar / >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/About'
        element = { < About / > }
        /> <
        Route path = '/Contact'
        element = { < Contact / > }
        /> <
        Route path = '/Blog'
        element = { < Blog / > }
        /> <
        Route path = '/ourTeam'
        element = { < OurTeam / > }
        /> <
        Route path = '/ExcavatorRental'
        element = { < SpiderLifts / > }
        /> <
        Route path = '/Largedumpertruckrental'
        element = { < ForkLifts / > }
        /> <
        Route path = '/Dumptruck'
        element = { < ScissorLifts / > }
        /> <
        Route path = '/bulldozer'
        element = { < BoomLifts / > }
        /> <
        Route path = '/Rollar'
        element = { < SpiderCranes / > }
        /> <
        Route path = '/pickups'
        element = { < Miscellaneous / > }
        /> <
        Route path = '/wastemanagementtransportation'
        element = { < GlassVacuum / > }
        /> <
        Route path = '/Heavywheelloaderexcavator'
        element = { < TruckMountedBoomLifts / > }
        /> <
        Route path = '/backLoader'
        element = { < BackLoader / > }
        /> <
        Route path = '/bobcat'
        element = { < Bobcat / > }
        /> <
        Route path = '/lwbad'
        element = { < Lwbad / > }
        /> <
        Route path = '/grader'
        element = { < Grader / > }
        /> <
        Route path = '/compactor'
        element = { < Compactor / > }
        /> <
        Route path = '/generator'
        element = { < Generator / > }
        /> <
        Route path = '/HowToHireSpiderCrane'
        element = { < HowToHireSpiderCrane / > }
        /> <
        Route path = '/HowToHireForklifts'
        element = { < HowToHireForklifts / > }
        /> <
        Route path = '/HowToHireSpiderLifts'
        element = { < HowToHireSpiderLifts / > }
        /> <
        Route path = '/HowToHireBoomLifts'
        element = { < HowToHireBoomLifts / > }
        /> <
        Route path = '/HowToHireScissorLifts'
        element = { < HowToHireScissorLifts / > }
        /> <
        Route path = '/ContactForRent'
        element = { < ContactForRent / > }
        /> <
        Route path = '/login'
        element = { < LoginForm / > }
        /> <
        Route path = '/Register'
        element = { < RegisterForm / > }
        /> <
        /Routes> <
        Footer / >
        <
        /BrowserRouter> <
        /div>
    );
}

export default App;