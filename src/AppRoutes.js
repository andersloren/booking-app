import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Booking from "./booking/Booking";
import CancelBooking from "./CancelBooking";
import About from "./About";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/cancel-booking" element={<CancelBooking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
