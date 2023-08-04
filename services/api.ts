import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.API_KEY;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN;

const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
})

export const getPopularMovies = async (pageIndex: any) => {
    try {
        const response = await api.get(`/movie/popular?page=${pageIndex}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}