import { Modal } from "components/Modal/Modal"
import { Component } from "react";
import { StyledLi, StyledImg } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends Component {
    state = {
        modalIsOpen: false
      };
  
    openModal = () => {
      this.setState({ modalIsOpen: true });
    };
  
    closeModal = () => {
      this.setState({ modalIsOpen: false });
    };
    render(){
        const { webformatURL, largeImageURL, tags } = this.props;
        const { modalIsOpen } = this.state;
        return (
            <StyledLi>
            <StyledImg src={webformatURL} alt={tags} onClick={this.openModal}/>
            <Modal largeImageURL={largeImageURL} tags={tags} modalIsOpen={modalIsOpen} closeModal={this.closeModal}/>
            </StyledLi>
            )
    }
}
