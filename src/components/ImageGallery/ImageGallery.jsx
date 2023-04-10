import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

export const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        webFormat={image.webformatURL}
        tags={image.tags}
      />
    ))}
  </ul>
);
