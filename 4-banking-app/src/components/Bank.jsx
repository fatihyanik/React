import {useState, useEffect} from 'react';

/* function Banking(){
      const [balance, setBalance] = useState(0);
      const [deposit, setDeposit] = useState("");
      const [withdrawal, setWithdrawal] = useState("");

useEffect(() => {
    const balanceStore = localStorage.getItem("balance");

    if(balanceStore !== null){
        setBalance(parseFloat(balanceStore));
    }
}, [])

window.addEventListener("beforeunload", () => {
    localStorage.setItem("balance", balance)
}) */

function Banking() {
  const [balance, setBalance] = useState(parseFloat(localStorage.getItem("balance")) || 0);
  const [deposit, setDeposit] = useState("");
  const [withdrawal, setWithdrawal] = useState("");

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

   /*  componentDidMount() {
      const balance = localStorage.getItem("balance");

      if (balance !== null) {
        this.setState({ balance: parseFloat(balance) });
      }

      window.addEventListener("beforeunload", () => {
        localStorage.setItem("balance", this.state.balance);
      });
    } */

    
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
              <button
                className="ui button green"
                onClick={() => setBalance(balance + parseFloat(deposit))}
              >
                Deposit
              </button>
            </div>

            <div
              className="withdrawal"
              style={{ display: "flex", marginTop: "1rem" }}
            >
              <div className="ui right pointing label">
                <p className="label-text"> Please enter the withdrawal amount</p>
               
              </div>
              <input
                type="number"
                onChange={(e) => setWithdrawal(e.target.value)}
                value={withdrawal}
              />
              <button
                className="ui button red"
                onClick={() => setBalance(balance -parseFloat(withdrawal))}
              >
                Withdrawal
              </button>
            </div>
          </div>
        </div>
      );
    }
  

export default Banking
