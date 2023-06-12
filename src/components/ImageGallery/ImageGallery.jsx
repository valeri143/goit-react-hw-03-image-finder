import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { StyledUl } from "./ImageGalerry.styled"

export const ImageGallery = ({images}) => {
    return (
        <StyledUl >
        {images.map(({id, webformatURL, largeImageURL, tags}) => <ImageGalleryItem  key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags}/>)}
        </StyledUl>
    )
}