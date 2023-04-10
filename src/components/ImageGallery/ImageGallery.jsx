import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

export const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        webFormat={image.webformatURL}
        largeFormat={image.largeImageURL}
        tags={image.tags}
      />
    ))}
  </ul>
);
