import ReactModal from "react-modal";
import { customStyles, StyledImage } from "./Modal.styled";


export const Modal = ({ modalIsOpen, tags, largeImageURL, closeModal }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <StyledImage  src={largeImageURL} alt={tags} style={customStyles.image}/>
    </ReactModal>
  );
};
