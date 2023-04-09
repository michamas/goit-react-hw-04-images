import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

export const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem key={id} webFormat={webformatURL} tags={tags} />
    ))}
  </ul>
);
