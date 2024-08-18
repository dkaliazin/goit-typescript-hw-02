import css from "./ImageCard.module.css";
import { Image } from "../../type";
interface ImageCardProps {
    image: Image,
    openModalWindow: (url: Image) => void
}

 const ImageCard: React.FC<ImageCardProps> = ({ image, openModalWindow }) => {

  return (
    <div onClick={() => openModalWindow(image)} className={css.imgbox}>
      <img src={image.urls.small} alt={image.description} className={css.imagecard} />
    </div>
  );
}
export default ImageCard;