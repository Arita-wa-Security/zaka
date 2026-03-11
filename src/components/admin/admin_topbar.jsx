import React from "react";

function Topbar() {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <span className="navbar-brand fw-bold">Admin Dashboard</span>

      <div>
        <button className="btn btn-outline-danger">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Topbar;