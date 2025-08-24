import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './Components/BookingPage';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav';
import ConfirmedBooking from './Components/ConfirmedBooking'; // ✅ Import confirmation page

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* ✅ New route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
