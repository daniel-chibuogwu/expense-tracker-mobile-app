import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const {
        payload: { description, amount, date },
      } = action;
    },
    deleteExpense: (state, action) => {
      const id = action.payload;
    },
    updateExpense(state, action) {
      const [id, { description, amount, date }] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
