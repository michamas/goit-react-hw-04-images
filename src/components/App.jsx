import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Component } from 'react';

const API_KEY = '33302175-33178da1359f032779e0154a7';
// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          q: 'cat',
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
    }
  }

  render() {
    return (
      <div className="App">
        <ImageGallery />
      </div>
    );
  }
}
