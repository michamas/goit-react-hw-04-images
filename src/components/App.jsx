import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Loader } from './Loader/Loader.jsx';
import { Button } from './Button/Button.jsx';

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
      // this.setState(() => {
      //   return {
      //     images: [...this.state.images, ...response.data.hits],
      //   };
      // });

      //? 3
      this.setState({
        images: response.data.hits,
        errMessage: '',
      });
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
    return this.loadImages();
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading, query, errMessage } = this.state;
    return (
      <div className="App">
        <Searchbar
          value={query}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {isLoading && <Loader />}
        {errMessage && <p>{errMessage}</p>}
        <ImageGallery images={images} />
        <Button onClick={this.loadMore} isNeeded={'true'} />
      </div>
    );
  }
}
