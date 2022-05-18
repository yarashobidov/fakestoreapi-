import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export const getAllProducts = async () => await API.get();
export const getProduct = async (id) => await API.get(`/${id}`);
export const getCategories = async () => await API.get("/categories");
export const getCategoryProduct = async (category) => await API.get(`/category/${category}`)