import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of airpods",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "a mac book pro",
    amount: 200.3,
    date: new Date("2021-08-20"),
  },
  {
    id: "e3",
    description: "A book",
    amount: 75.45,
    date: new Date("2022-01-01"),
  },
  {
    id: "e4",
    description: "Parfait",
    amount: 10.0,
    date: new Date("2022-03-05"),
  },
  {
    id: "e5",
    description: "An iphone 14 pro max",
    amount: 1000.0,
    date: new Date("2022-08-07"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
