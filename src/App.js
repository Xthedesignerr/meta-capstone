import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './Components/BookingPage';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
