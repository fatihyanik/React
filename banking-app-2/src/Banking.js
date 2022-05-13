import React, { useState, useEffect } from "react";
import "./Banking.css";

function Banking() {
  const [balance, setBalance] = useState(
    parseFloat(localStorage.getItem("balance")) || 0
  );
  const [deposit, setDeposit] = useState("");
  const [withdrawal, setWithdrawal] = useState("");

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  const onDeposit = (e) => {
    if (deposit === "" || e.keyIdentifier === "e") {
      alert("Deposit input must be filled with a number");
    } else {
      setBalance(balance + parseFloat(deposit));
      setDeposit("");
    }
  };

  const onWithdrawal = (e) => {
    if (withdrawal === "" || e.keyIdentifier === "e") {
      alert("Withdrawal input must be filled with a number");
    } else {
      setBalance(balance - parseFloat(withdrawal));
      setWithdrawal("");
    }
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0.3rem 0.7rem 0.7rem rgba(0,0,0, 0.3)",
        borderRadius: "1rem",
        paddingBottom: "2rem",
      }}
    >
      <h1>Your current Balance is: {balance} €</h1>
      <div className="ui fluid form">
        <div className="deposit field" style={{ display: "flex" }}>
          <div className="ui right pointing label">
            <p className="label-text">Please enter the deposit amount</p>
          </div>
          <input
            type="number"
            onChange={(e) => setDeposit(e.target.value)}
            value={deposit}
          />
          <button className="ui button green" onClick={onDeposit}>
            Deposit
          </button>
        </div>

        <div
          className="withdrawal"
          style={{ display: "flex", marginTop: "1rem" }}
        >
          <div className="ui right pointing label">
            <p className="label-text">Please enter the withdrawal amount</p>
          </div>
          <input
            type="number"
            onChange={(e) => setWithdrawal(e.target.value)}
            value={withdrawal}
          />
          <button className="ui button red" onClick={onWithdrawal}>
            Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banking;