import axios from "axios";

const API_KEY = '37188791-57fdb1721517f709a21fccc41';
axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: API_KEY,
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchData = async (query, page) => {
    const response = await axios.get(`/?q=${query}&page=${page}`);
    return response.data;
}