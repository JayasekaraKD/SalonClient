import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './index'; // Assuming index.js is your landing page
import NotificationPage from './pages/NotificationPage';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Spinner from './components/Spinner';
import ProtectedRoutes from './components/ProtectedRoutes';
import Appointments from './pages/Appointments';
import DoctorAppointment from './pages/doctor/DoctorAppointment';
import Profile from './pages/doctor/Profile';
import ApplyDoctor from './pages/ApplyDoctor';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import OTP from './pages/OTP';
import NotFound from './pages/NotFound';
import BookingPage from './pages/BookingPage';

function App() {
  const { loading } = useSelector(state => state.alerts);

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          {/* Route to index.js */}
          <Route path="/" element={<Index />} />

          {/* Other routes */}
          <Route
            path="/notification"
            element={
              <ProtectedRoutes>
                <NotificationPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/appointment"
            element={
              <ProtectedRoutes>
                <Appointments />
              </ProtectedRoutes>
            }
          />
          {/* Other routes... */}
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
