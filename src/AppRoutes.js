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

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export default AppRoutes;
