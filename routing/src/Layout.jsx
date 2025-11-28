import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>|<Link to="/user/123">User 123</Link>|
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
