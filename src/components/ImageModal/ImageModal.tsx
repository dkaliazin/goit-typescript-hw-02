import css from "./ImageModal.module.css";
import Modal from 'react-modal';
import { Image } from "../../type";
interface ImageModalProps {
    isOpen: boolean,
    onRequestClose: (event: React.MouseEvent | React.KeyboardEvent) => void,
    imageSrc: Image
}
const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, imageSrc }) => { 
   if (!imageSrc.urls.full) {
        console.log('URL not available');
        return null;
    }

    return (   
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal Window"
            className={css.modalwindow}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={true}
        >
            <img src={imageSrc} alt="modal img" className={css.modalimage} />         
        </Modal>
    );
};

export default ImageModal;

/*export default function ImageModal({ isOpen, onRequestClose, imageSrc }) {
    if (typeof imageSrc !== 'string') {
        console.log('not string');
        return null; 
  }
    return (   
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal Window"
            className={css.modalwindow}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={true}
        >
            <img src={imageSrc} alt="modal img" className={css.modalimage} />         
        </Modal>
    )
}*/