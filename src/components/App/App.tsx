import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css'
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from 'axios';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { Image } from '../../type';
Modal.setAppElement('#root');

interface UnsplashResponse {
  results: Image[];
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [topicName, setTopicName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image|null>(null);

  const handleSearch = async (newTopicName: string) => {
    setImages([]);
    setPage(1);
    setTopicName(newTopicName);
  }
  const handleLoadMore = () => {
    setPage(page + 1);
  }
useEffect(() => {
  const getImages = async () => {
    try {
      setLoading(true);
      const results = await axios.get<UnsplashResponse>(`https://api.unsplash.com/search/photos?query=${topicName}&page=${page}&client_id=P7ByciXJKPkJC46zpMWNVK8C8nALBCKpESinSOr59DI`);
      setImages((prev) => [...prev, ...results.data.results]);
    } catch (error: unknown) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (topicName) {
    getImages();
  }
}, [topicName, page]);
  //Modal
  const [openModal, setOpenModal] = useState<boolean>(false);
  
const openModalWindow = (imageSrc: Image) => {
  if (!openModal) {
    console.log("Opening modal with image:", imageSrc);
    
    /*const imageUrl = imageSrc.urls?.full ?? "fallback-image-url"; */
    /*setSelectedImage(imageSrc.urls.full);*/
     setSelectedImage(imageSrc);
    setOpenModal(true);
  } else {
    console.warn("Modal is already open");
  }
};
  const closeModalWindow = () => {
    console.log("Closing modal");
    setSelectedImage(null);
    setOpenModal(false);
  //Modal end
  };
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader/>}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModalWindow={openModalWindow} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </>
      )}
      {selectedImage && openModal && (
  <ImageModal
    isOpen={openModal}
    imageSrc={selectedImage}
    onRequestClose={closeModalWindow}
  />
)}
      <Toaster />
    </div>
  )
}
/*
*/
export default App
