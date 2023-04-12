import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.js';

export const ImageGallery = ({ images, onShow }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        webFormat={image.webformatURL}
        largeFormat={image.largeImageURL}
        tags={image.tags}
        onShow={onShow}
      />
    ))}
  </ul>
);
