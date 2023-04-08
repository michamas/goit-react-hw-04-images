import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';

const API_KEY = '33302175-33178da1359f032779e0154a7';
// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
  };

  async componentDidMount(keyword) {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          q: keyword,
          page: 1,
          key: API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      this.setState({
        images: response.data.hits,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    return this.componentDidMount(this.state.query);
  };

  render() {
    const { images, isLoading, query } = this.state;
    return (
      <div className="App">
        <Searchbar
          value={query}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {isLoading && <p>LOADING</p>}
        <ImageGallery images={images} />
      </div>
    );
  }
}
