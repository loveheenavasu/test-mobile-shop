import axios from "axios";

export const getUsers = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/users`, {
    headers: {
      'Authorization': `Bearer ${token}` 
  }
  });

export const getUserDetails = async (id, token) =>
  await axios.get(`${process.env.REACT_APP_API}/users/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}` 
  }
  });