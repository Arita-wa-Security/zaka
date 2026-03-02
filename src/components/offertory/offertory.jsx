import React, { useState } from "react";

function FundAllocationForm() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    phone: "",
    date: ""
  });

  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [entries, setEntries] = useState([]);
  const [confirmation, setConfirmation] = useState("");

  const handlePersonalChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value
    });
  };

  const addEntry = () => {
    if (!accountName || !amount) return;

    const newEntry = {
      ...personalDetails,
      accountName,
      amount: parseFloat(amount)
    };

    setEntries([...entries, newEntry]);
    setAccountName("");
    setAmount("");
  };

  const totalAmount = entries.reduce(
    (sum, entry) => sum + entry.amount,
    0
  );

  const handleSubmit = () => {
    if (entries.length === 0) return;
    setConfirmation("Your request has been received and is being processed.");
  };

  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="row g-4 d-block d-lg-flex align-items-start gap-lg-4">

        {/* LEFT SIDE - FORM */}
        <div className="col-12 col-lg-5">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h4 className="mb-4 fw-bold">Fund Allocation Request</h4>

              <h6 className="text-muted">Personal Details</h6>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Full Name"
                  value={personalDetails.name}
                  onChange={handlePersonalChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  value={personalDetails.phone}
                  onChange={handlePersonalChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={personalDetails.date}
                  onChange={handlePersonalChange}
                />
              </div>

              <h6 className="text-muted">Fund Allocation</h6>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account Name"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary w-100 mb-3 rounded-3"
                onClick={addEntry}
              >
                Add Allocation
              </button>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <strong>Total:</strong>
                <span className="fs-5 fw-bold text-primary">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <button
                className="btn btn-success w-100 rounded-3"
                onClick={handleSubmit}
              >
                Submit Request
              </button>

              {confirmation && (
                <div className="alert alert-success mt-3">
                  {confirmation}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TABLE */}
        <div className="col-12 col-lg-7">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="mb-3 fw-bold">Allocation Details</h5>

              {entries.length === 0 ? (
                <p className="text-muted">No allocations added yet.</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Account</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.name}</td>
                          <td>{entry.phone}</td>
                          <td>{entry.date}</td>
                          <td>{entry.accountName}</td>
                          <td className="fw-semibold">
                            ${entry.amount.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FundAllocationForm;