import React from "react";

function Payments({ entries }) {

  return (
    <div className="card shadow-sm p-3">

      <h5 className="mb-3">All Payments</h5>

      <div className="table-responsive">
        <table className="table table-hover">

          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Account</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {entries.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.accountName}</td>
                <td>${e.amount}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Payments;