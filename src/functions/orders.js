import axios from "axios";

export const getOrders = async () =>
  await axios.get(`${process.env.REACT_APP_API}/orders`);

export const getOrderDetails = async (id, token) =>
  await axios.get(`${process.env.REACT_APP_API}/orders/${id}`);

export const createPreOrder = async (order) =>
  await axios.post(`${process.env.REACT_APP_API}/preorders`, order);

export const getPreOrders = async () =>
  await axios.get(`${process.env.REACT_APP_API}/preorders`);
