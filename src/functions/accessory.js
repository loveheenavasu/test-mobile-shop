import axios from "axios";

export const createAccessory = async (accessory, token) =>
  await axios.post(`${process.env.REACT_APP_API}/accessory`, accessory, {
    headers: {
      'Authorization': `Bearer ${token}` 
  }
});

export const searchAccessories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/accessory/search`);

export const getAccessories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/accessory`);

export const getAccessory = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/accessory/${id}`);


export const removeAccessory = async (slug) =>
  await axios.delete(`${process.env.REACT_APP_API}/accessory/${slug}`);

export const updateAccessory = async (id, product) =>
  await axios.put(`${process.env.REACT_APP_API}/accessory/${id}`, product);

