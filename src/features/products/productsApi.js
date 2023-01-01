import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get("/moon");
  console.log(data.data);

  return data.data;
};

export const postProduct = async (productData) => {
  await axios.post("/moon", productData);
};

export const deleteProduct = async (id) => {
  await axios.delete(`/moon/${id}`);
};
