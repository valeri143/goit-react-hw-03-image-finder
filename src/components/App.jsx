import axios from "axios";
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

const API_KEY = '37188791-57fdb1721517f709a21fccc41';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
}

export class App extends Component {

getImages = async (values, page) => {
  try {
    const response = await axios.get(`/?q=${values}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
onSubmit = async (values, {resetForm}) =>{
  await this.getImages(values, 1)
  resetForm()
  console.log(values)
  

}
render(){
  return (
    <>
    <Searchbar onSubmit={this.onSubmit}/>
    </>
  );
}
};
