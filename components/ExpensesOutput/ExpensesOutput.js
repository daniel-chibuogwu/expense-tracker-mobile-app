import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_EXPENSES } from "../../data/dummy-expenses";
import { useSelector } from "react-redux";

function ExpensesOutput({ expenses, expensesPeriod }) {
  const id = useSelector((state) => state.expenses.expenses);
  const expensesTest = DUMMY_EXPENSES.filter((expense) => expense.id === id);

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expensesTest} periodName={expensesPeriod} />
      <ExpensesList expenses={expensesTest} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
