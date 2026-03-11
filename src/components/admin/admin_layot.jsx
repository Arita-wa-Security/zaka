import React, { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import Dashboard from "../components/admin/Dashboard";
import Payments from "../components/admin/Payments";
import Reports from "../components/admin/Reports";
import Receipts from "../components/admin/Receipts";

function AdminLayout({ entries }) {

  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "payments":
        return <Payments entries={entries} />;
      case "reports":
        return <Reports entries={entries} />;
      case "receipts":
        return <Receipts entries={entries} />;
      default:
        return <Dashboard entries={entries} />;
    }
  };

  return (
    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-2 p-0">
          <Sidebar setPage={setPage} />
        </div>

        <div className="col-lg-10 p-0">

          <Topbar />

          <div className="p-4 bg-light min-vh-100">
            {renderPage()}
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLayout;