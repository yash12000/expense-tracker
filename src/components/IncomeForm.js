import React, { useState } from "react";
import { useSnackbar } from "notistack";

const IncomeForm = ({ addIncome }) => {
  const [amount, setAmount] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();

    const incomeAmount = parseFloat(amount);
    if (isNaN(incomeAmount) || incomeAmount <= 0) {
      enqueueSnackbar("Please enter a valid income amount", {
        variant: "error",
      });
      return;
    }

    addIncome(incomeAmount);
    enqueueSnackbar("Income added!", { variant: "success" });
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Income Amount"
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
