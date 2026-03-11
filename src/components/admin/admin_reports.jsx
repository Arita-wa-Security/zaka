import React from "react";

function Reports({ entries }) {

  const exportCSV = () => {

    const rows = entries.map(e =>
      `${e.name},${e.accountName},${e.amount}`
    );

    const blob = new Blob([rows.join("\n")], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "payments-report.csv";
    link.click();
  };

  return (
    <div className="card shadow-sm p-4">

      <h5 className="mb-3">Reports</h5>

      <button
        className="btn btn-primary"
        onClick={exportCSV}
      >
        Export CSV Report
      </button>

    </div>
  );
}

export default Reports;