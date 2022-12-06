import axios from "axios";

export const registerAdmin = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/staff/register`, data);

export const loginAdmin = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/staff/login`, data);

export const getAllStaff = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/staff?page=${pageNumber}`);

export const getStaff = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/staff/${id}`);

export const removeStaff = async (id) =>
  await axios.delete(`${process.env.REACT_APP_API}/staff/${id}`);

export const updateStaff = async (id, data) =>
  await axios.put(`${process.env.REACT_APP_API}/staff/${id}`, data);