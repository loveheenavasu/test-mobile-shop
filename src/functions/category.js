import axios from "axios";

export const getCategories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/category`);

export const getCategory = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);

export const removeCategory = async (slug) =>
  await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`);

export const updateCategory = async (slug, category, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, category, {
    headers: {
      authtoken,
    },
  });

export const createCategory = async (category) =>
  await axios.post(`${process.env.REACT_APP_API}/category`, category);

export const getCategoryBrand = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/category/brand/${_id}`);
  