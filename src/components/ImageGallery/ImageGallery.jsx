import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

export const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeformatURL, tags }) => (
      <li key={id} className="ImageGalleryItem">
        <ImageGalleryItem webFormat={webformatURL} tags={tags} />
      </li>
    ))}
  </ul>
);
