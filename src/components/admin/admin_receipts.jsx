import React from "react";
import jsPDF from "jspdf";

function Receipts({ entries }) {

  const generateReceipt = (entry) => {

    const doc = new jsPDF();

    doc.text("Payment Receipt", 20, 20);
    doc.text(`Name: ${entry.name}`, 20, 40);
    doc.text(`Phone: ${entry.phone}`, 20, 50);
    doc.text(`Account: ${entry.accountName}`, 20, 60);
    doc.text(`Amount: $${entry.amount}`, 20, 70);

    doc.save(`receipt-${entry.name}.pdf`);
  };

  return (
    <div className="card shadow-sm p-3">

      <h5 className="mb-3">Receipts</h5>

      <table className="table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Receipt</th>
          </tr>
        </thead>

        <tbody>
          {entries.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>${e.amount}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => generateReceipt(e)}
                >
                  Generate
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Receipts;