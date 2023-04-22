import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery.js';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Loader } from './Loader/Loader.jsx';
import { Button } from './Button/Button.jsx';
import { Modal } from './Modal/Modal.jsx';

const API_KEY = '33302175-33178da1359f032779e0154a7';
// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [page, setPage] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [imageLarge, setImageLarge] = useState('');

  const handleChange = event => {
    event.preventDefault();
    setImages([]);
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setPage(1);
  };

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            q: query,
            page: page,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
          },
        });
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.log(error);
        setErrMessage('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (query !== '') {
      loadImages();
    }
  }, [query, page]);

  const loadMore = async () => {
    // console.log('load more');
    setPage(prevPage => prevPage + 1);
  };

  const closeModal = () => {
    setIsModal(false);
    setImageLarge('');
  };

  const showModal = url => {
    setIsModal(true);
    setImageLarge(url);
  };

  return (
    <div className="App">
      <Searchbar
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {/* RENDER LODER WHILE WAITING */}
      {isLoading && <Loader />}

      {/* DISPLAY ERROR IF IT APPEARS */}
      {errMessage && <p>{errMessage}</p>}

      {/* LOAD IMAGES */}
      <ImageGallery images={images} onShow={showModal} />

      {/* RENDER BUTTON IF MORE THEN 1 PAGE OF RESULTS */}
      {images.length >= 12 && <Button onClick={loadMore} isNeeded={'true'} />}

      {/* RENDER MODAL WINDOW */}
      {isModal && <Modal onClose={closeModal} imageLarge={imageLarge} />}
    </div>
  );
};
