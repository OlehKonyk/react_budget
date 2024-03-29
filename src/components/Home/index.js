import { useState, useEffect } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundaries";
import { Wrapper } from "./styles";
import { getItems, addItem } from "../../utils/indexbd";

const Home = () => {
  const [balance, setBalance] = useState (0);
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    getItems().then((items) => {
      setTransactions(items)
    }).catch((e) => {
      debugger
    })
  }, [setTransactions]);


 const onChange = ({value, date, comment}) => {
    const transaction ={
      value: +value, 
      comment,
      date,
      id: Date.now()
    }
    setTransactions([
      transaction,
      ...transactions]);
    setBalance(balance + Number(value))
    
    addItem(transaction)

  }
    return (
      <ErrorBoundary>
        <Wrapper>
          <Balance balance={balance} />
          <Form onChange={onChange}/>
          <hr />
          <Transactions transactions={transactions}/>
        </Wrapper>
      </ErrorBoundary>
    );
}
export default Home;