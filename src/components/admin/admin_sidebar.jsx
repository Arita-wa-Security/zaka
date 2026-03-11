import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="bg-dark text-white vh-100 p-3">
      <h4 className="mb-4">Admin Panel</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => setPage("dashboard")}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </button>
        </li>

        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => setPage("payments")}
          >
            <i className="bi bi-cash-stack me-2"></i>
            Payments
          </button>
        </li>

        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => setPage("reports")}
          >
            <i className="bi bi-bar-chart me-2"></i>
            Reports
          </button>
        </li>

        <li className="nav-item">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => setPage("receipts")}
          >
            <i className="bi bi-receipt me-2"></i>
            Receipts
          </button>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;