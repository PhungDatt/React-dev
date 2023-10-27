import React from 'react';
import './App.css';
import { BrowserRouter, Routes  ,  Route } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import Errors404 from './Pages/404/Errors404';
import Contact from './Pages/Contact/Contact';
import Introduce from './Pages/Introduce/Introduce';
import Blogs from './Pages/Blogs/Blogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lisence from './Pages/Lisence/Lisence';
import Source from './Pages/Lisence/Source';
import Team from './Pages/About-Us/Team';
import Food from './Pages/Company/Food';
import Hotel from './Pages/Company/Hotel';
import Car from './Pages/Company/Car';
import LTD from './Pages/Company/LTD';
import Chart from './Pages/Chart/Chart';
import TrafficEvents from './Pages/TrafficEvents/TrafficEvents';
import UrgentEvents from './Pages/UrgentEvents/UrgentEvents';
import TransitEvents from './Pages/TransitEvents/TransitEvents';
import Maintenance from './Pages/Maintenance/Maintenance';
import Login from  './Pages/Login/Login';
import SuperAdmin from './Pages/Login/SuperAdmin';
import '../src/Assets/Images/Flexible.jpg';
/*==============/
import font awsome
================ */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);






const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>

      <Route index element={<Home /> } />

        <Route path="Home" element={<Home /> } />

        <Route path="Introduce" element={<Introduce />}/>

        <Route path="Team" element={<Team />}/>

        <Route path="Hotel" element={<Hotel />}/>

        <Route path="Blogs" element={<Blogs />} />

        <Route path="Lisence" element={<Lisence />}/>

        <Route path="Contact" element={<Contact />} />

        <Route path="Source"  element={<Source />}/>

        <Route path="Team" element={<Team />} />

        <Route path="TrafficEvents"  element={<TrafficEvents />}/>

        <Route path="UrgentEvents" element={<UrgentEvents />} />

        <Route path="TransitEvents" element={<TransitEvents />} />

        <Route path="Maintenance" element={< Maintenance/>} />

        <Route path="Login" element={<Login />}/>

        <Route path="Food" element={<Food/>} />

        <Route path="Car" element={<Car />} />

        <Route path="LTD" element={<LTD />} />
        
        <Route path="Chart" element={<Chart />} />

        <Route path="*" element={<Errors404 />} />


      </Route>
      <Route path="SuperAdmin" element={<SuperAdmin />}/>

   
    </Routes>
  </BrowserRouter>
  );
}

export default App;
