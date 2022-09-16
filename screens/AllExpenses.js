import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/context/expenses-context";

function AllExpenses({ navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="NO EXPENSE REGISTERED" />
  );
}

export default AllExpenses;
