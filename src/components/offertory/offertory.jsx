import React, { useState } from "react";
import axios from "axios";

function FundAllocationForm() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    phone: "254",
    date: ""
  });

  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handlePersonalChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "phone") {
        // Ensure it's digits only (except the optional leading 254)
        value = value.replace(/\D/g, "");
        if (value.startsWith("0")) {
            value = "254" + value.substring(1);
        } else if (value.startsWith("7") || value.startsWith("1")) {
            value = "254" + value;
        } else if (!value.startsWith("254") && value.length > 0) {
            value = "254" + value;
        }
    }
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: value
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

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (entries.length === 0) {
      setError("Please add at least one allocation.");
      return;
    }
    
    setLoading(true);
    setError("");
    setConfirmation("");

    const payload = {
      full_name: personalDetails.name,
      phone_number: personalDetails.phone,
      amount: totalAmount,
      description: entries.map(e => e.accountName).join(", ")
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/initiate-payment/", payload);
      if (response.data.ResponseCode === "0") {
        setConfirmation("Payment request initiated! Please check your phone for the M-Pesa prompt.");
        setEntries([]); // Clear entries on success
      } else {
        setError(response.data.ResponseDescription || "Failed to initiate payment. Please try again.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError(err.response?.data?.CustomerMessage || "An error occurred while processing your request. Ensure the backend is running and your phone number is correct.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="row g-4 d-block d-lg-flex align-items-start gap-lg-4">

        {/* LEFT SIDE - FORM */}
        <div className="col-12 col-lg-5">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h4 className="mb-4 fw-bold text-primary">Fund Allocation Request</h4>

              <h6 className="text-muted mb-3">Personal Details</h6>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-person text-secondary"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    name="name"
                    placeholder="Full Name"
                    value={personalDetails.name}
                    onChange={handlePersonalChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-telephone text-secondary"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    name="phone"
                  placeholder="Phone Number (e.g. 2547...)"
                    value={personalDetails.phone}
                    onChange={handlePersonalChange}
                    required
                  />
                </div>
              
              </div>

              <div className="mb-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={personalDetails.date}
                  onChange={handlePersonalChange}
                  required
                />
              </div>

              <h6 className="text-muted mb-3">Fund Allocation</h6>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account Name (e.g., Tithe, Combined Offering)"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">Ksh</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="btn btn-outline-primary w-100 mb-3 rounded-pill"
                onClick={addEntry}
                disabled={loading}
              >
                + Add Allocation
              </button>

              <hr />

              <div className="d-flex justify-content-between align-items-center mb-3">
                <strong className="text-muted">Total Amount: </strong>
                <span className="fs-4 fw-bold text-success">
                   Ksh {totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <button
                className="btn btn-success w-100 rounded-pill py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                onClick={handleSubmit}
                disabled={loading || entries.length === 0}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  "Submit & Pay via M-Pesa"
                )}
              </button>

              {error && (
                <div className="alert alert-danger mt-3">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i> {error}
                </div>
              )}

              {confirmation && (
                <div className="alert alert-success mt-3 bounce-in">
                  <i className="bi bi-check-circle-fill me-2"></i> {confirmation}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TABLE */}
        <div className="col-12 col-lg-7">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="mb-4 fw-bold">Allocation Details</h5>

              {entries.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted mb-0">No allocations added yet.</p>
                  <small className="text-secondary">Please add at least one fund allocation above.</small>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Account</th>
                        <th className="text-end">Amount</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.accountName}</td>
                          <td className="fw-semibold text-end">
                            Ksh {entry.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                          <td className="text-center">
                            <button 
                              className="btn btn-sm btn-outline-danger border-0"
                              onClick={() => deleteEntry(index)}
                              title="Remove"
                            >
                              <i className="bi bi-trash"></i>
                            </button>
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