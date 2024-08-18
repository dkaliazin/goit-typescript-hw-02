import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
import { Image } from "../../type"
interface ImageGalleryProps{
    images: Image[],
    openModalWindow: (url: Image) => void
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModalWindow }) => {
    return (
        <ul className={css.gallerylist}>
            {images.map((image) => {
                return (<li key={image.id} className={css.galleryitem}>
                    <ImageCard image={image} openModalWindow={openModalWindow} />
                    </li>
                )
            })}
        </ul>
    )
 }
export default ImageGallery;
/*
export default function ImageGallery({ images, openModalWindow }) {
    return (
        <ul className={css.gallerylist}>
            {images.map((image) => {
                return (<li key={image.id} className={css.galleryitem}>
                    <ImageCard image={image} openModalWindow={openModalWindow} />
                    </li>
                )
            })}
        </ul>
    )
}*/