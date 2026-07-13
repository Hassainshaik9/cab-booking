import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookRide from "./pages/BookRide";
import Payment from "./pages/Payment";
import Location from "./pages/Location";
import PayNow from "./pages/PayNow";
import Otp from "./pages/Otp";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/bookride" element={<BookRide />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/location" element={<Location />} />

        <Route path="/paynow" element={<PayNow />} />

        <Route path="/otp" element={<Otp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;