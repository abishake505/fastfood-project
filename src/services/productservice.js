import axios from 'axios';

const API = "http://localhost:5000/api/products"; // change this if hosted

export const fetchProducts = () => axios.get(API);
export const addProduct = (data) => axios.post(API, data, getAuthHeader());
export const updateProduct = (id, data) => axios.put(`${API}/${id}`, data, getAuthHeader());
export const deleteProduct = (id) => axios.delete(`${API}/${id}`, getAuthHeader());

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};
