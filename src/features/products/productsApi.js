import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getProduct", async () => {
  const res = await fetch("http://localhost:5000/moon");
  const data = await res.json();
  return data;
});
