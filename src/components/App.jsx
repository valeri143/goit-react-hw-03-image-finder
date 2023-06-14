import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { StyledApp, StyledLoad } from "./App.styled";
import { fetchData } from "./helpers/api";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isVisibleButton: false,
    totalHits: 0, 
    isLoading: false
  };

  componentDidUpdate = async (_, prevState) => {
    const {query, page} = this.state;
    if(prevState.query !== query || prevState.page !== page){
    const data =  await this.getImages(query, page)
    this.setState({
      images: [...this.state.images, ...data.hits],
      isVisibleButton: (prevState.images.length + data.hits.length) < data.totalHits
    })
    }
  }
  
  getImages = async (query, page) => {
    this.setState({isLoading: true})
    try {
      const dataOfImages = await fetchData(query, page)
      if (dataOfImages.hits.length === 0) {
        window.alert('Ooops there are no images on your request');
        this.setState({ isVisibleButton: false });
        return;
      }
      return dataOfImages;
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
    finally{
      this.setState({isLoading: false})
    }
  };

  onSubmit = async (values, { resetForm }) => {
    this.setState({
      images: [],
      query: values.query,
      page: 1,
      isLoading: false
    });
    resetForm();
  };

  onClick = async () => {
    const nextPage = this.state.page + 1;
     this.setState({page: nextPage });
  };

  render() {
    const { images, isVisibleButton, isLoading } = this.state;
    return (
      <>
      <StyledApp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        </StyledApp>
        {isLoading && <StyledLoad/>}
        {isVisibleButton && <Button onClick={this.onClick} />}
       
      </>
    );
  }
}





