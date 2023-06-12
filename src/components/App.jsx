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

  componentDidUpdate = (_, prevState) => {
    const {query, page} = this.state;
    if(prevState.query !== query || prevState.page !== page){
      this.getImages(query, page)
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
    const data = await this.getImages(values.query, 1);
    this.setState({
      images: data.hits,
      isVisibleButton: true,
      query: values.query,
      page: 1,
      totalHits: data.totalHits,
      isLoading: false
    });
    resetForm();
  };

  onClick = async () => {
    const nextPage = this.state.page + 1;
    const data = await this.getImages(this.state.query, nextPage);
    const newImages = [...this.state.images, ...data.hits];

    this.setState(prevState => ({
      images: newImages,
      page: nextPage,
      isVisibleButton: (prevState.images.length + data.hits.length) < prevState.totalHits
    }));
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





