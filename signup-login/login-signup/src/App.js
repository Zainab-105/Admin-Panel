import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/Login-Signup/LoginSignup';
import Topbar from './Components/Topbar/topbar';
import Sidebar from './Components/Sidebar/sidebar';
import Index from './page/main/Index';
import MostlySearched from './page/mostlySearched/MostlySearched';
import Userlist from './page/userList/Userlist';
import Admin from './page/admin/Admin';
import NewAdmin from './page/newAdmin/NewAdmin';
import Hadithlist from './page/hadithlist/Hadithlist';
import Addhadith from './page/addHadith/Addhadith';
import Managehadith from './page/managehadith/Managehadith';
import Edithadith from './page/edithadith/Edithadith';
import Messages from './page/messages/Messages';
import Report from './page/report/Report';
import './app.css';

function App() {
  // State to track authentication status
  const [authenticated, setAuthenticated] = useState(false);

  // Dummy authentication function
  const handleLogin = () => {
    // Perform authentication logic here
    setAuthenticated(true);
  };

  return (
    <Router>
      {/* Conditional rendering for login/signup page */}
      {!authenticated && <LoginSignup onLogin={handleLogin} />}
      
      {/* Render topbar and sidebar only if authenticated */}
      {authenticated && (
        <>
          <Topbar />
          <div className="container">
            <div className="sidebar"><Sidebar /></div>
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/recent" element={<MostlySearched />} />
              <Route path="/Admin" element={<Userlist />} />
              <Route path="/Admin/:adminId" element={<Admin />} />
              <Route path="/newAdmin" element={<NewAdmin />} />
              <Route path="/hadithlist" element={<Hadithlist />} />
              <Route path="/managehadith" element={<Managehadith />} />
              <Route path="/hadithlist/:hadithId" element={<Edithadith />} />
              <Route path="/newhadith" element={<Addhadith />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/feedback" element={<Messages />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
