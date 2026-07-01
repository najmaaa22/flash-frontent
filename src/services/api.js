import axios from "axios";


const API = axios.create({

    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000"

});


API.interceptors.response.use(

    response => response,

    error => {

        console.log(
            "API ERROR:",
            error.response?.data || error.message
        );

        return Promise.reject(error);

    }

);



export const getCategories = async()=>{

    const response = await API.get("/categories");

    return response.data;

};



export const getFlashcardsByCategory = async(categoryId)=>{

    const response = await API.get(
        `/flashcards/${categoryId}`
    );

    return response.data;

};



export default {

    getCategories,

    getFlashcardsByCategory

};