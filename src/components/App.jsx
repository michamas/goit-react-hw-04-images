import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery.js';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Loader } from './Loader/Loader.jsx';
import { Button } from './Button/Button.jsx';
import { Modal } from './Modal/Modal.jsx';

const API_KEY = '33302175-33178da1359f032779e0154a7';
// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    errMessage: '',
    page: 1,
    isModal: false,
    imageLarge: '',
  };

  componentDidMount() {
    this.loadImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadImages();
    }
  }

  loadImages = async () => {
    const { page, query } = this.state;

    this.setState({ isLoading: true });
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

      //? 1
      // this.setState(prevState => ({
      //   images: [...prevState.images, ...response.data.hits],
      //   errMessage: '',
      // }));

      //? 2
      this.setState(() => {
        return {
          images: [...this.state.images, ...response.data.hits],
        };
      });

      //? 3
      // this.setState({
      //   images: response.data.hits,
      //   errMessage: '',
      // });
    } catch (error) {
      console.log(error);
      this.setState({
        errorMsg: 'Error while loading data. Try again later.',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      images: [],
    });
    return this.loadImages();
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
      imageLarge: '',
    });
  };

  showModal = url => {
    this.setState({
      isModal: true,
      imageLarge: url,
    });
  };

  render() {
    const { images, isLoading, query, errMessage, isModal, imageLarge } =
      this.state;
    return (
      <div className="App">
        <Searchbar
          value={query}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        {/* RENDER LODER WHILE WAITING */}
        {isLoading && <Loader />}

        {/* DISPLAY ERROR IF IT APPEARS */}
        {errMessage && <p>{errMessage}</p>}

        {/* LOAD IMAGES */}
        <ImageGallery images={images} onShow={this.showModal} />

        {/* RENDER BUTTON IF MORE THEN 1 PAGE OF RESULTS */}
        {images.length >= 12 && (
          <Button onClick={this.loadMore} isNeeded={'true'} />
        )}

        {/* RENDER MODAL WINDOW */}
        {isModal && <Modal onClose={this.closeModal} imageLarge={imageLarge} />}
      </div>
    );
  }
}
