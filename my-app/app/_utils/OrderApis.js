const { default: axiosClient } = require("./axiosClient");

const creatOrder =(data)=> axiosClient.post("/orders",data)

export default {
    creatOrder
}