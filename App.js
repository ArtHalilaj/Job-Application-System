import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import Signup from './Signup'
import Login from './Login'
import ProfiliIm from './ProfiliIm';
import RegjistroSemestrin from './AplikoPerPune.js';
import About from './pages/About';
import Profili from './Profili';
import Logout from './logout';
import Visitor from './Visitor';
import Admin from './Admin';
import Perzgjedhjagrupit from './PunedhenesitH.js';
import ParaqitProvimin from './PublikoPunen.js';
import CreateProvimin from './CreatePunen.js';
import Profile from './Profile';
import UpdatePublikimin from './UpdatePublikimin.js';
import AplikoPerPune from './AplikoPerPune.js';
import CreatePunen from './CreatePunen.js';









const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path='/createPunen' element={<CreatePunen />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about/get/Regjistro/:email" element={<Visitor />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />\
          <Route path="/about" element={<Profile />} />
          <Route path="/punedhenesit" element={<Perzgjedhjagrupit />} />
          <Route path="/analytics" element={<RegjistroSemestrin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/aplikoPerPune" element={<AplikoPerPune />} />
          <Route path="/createAplikoPerPune" element={<AplikoPerPune />} />
          <Route path="/publikoPunen" element={<ParaqitProvimin />} />
          <Route path="/publikoPunen/update/:idPublikimi" element={<UpdatePublikimin />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


