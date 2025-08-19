import axiosClient from "./axiosClient";

const { default: axios } = require("axios");

const getLatestProducts = ()=>axiosClient.get('/products?populate=*')

const getProductDetails = (id)=>axiosClient.get(`products?filters[id][$eq]=${id}&populate=*`)
const getProductByCategory = (category)=>axiosClient.get(`products?filters[category][$eq]=${category}&populate=*`)

export default {
    getLatestProducts,
    getProductDetails,
    getProductByCategory
}