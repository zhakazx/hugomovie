import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_IMG_URL = process.env.NEXT_PUBLIC_BASIMGURL;
const API_KEY = process.env.API_KEY;
const TOKEN = process.env.TOKEN;

const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
})

export const getPopularMovies = async () => {
    try {
        const response = await api.get("/movie/popular");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}