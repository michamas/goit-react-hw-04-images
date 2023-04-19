export const ImageGalleryItem = ({ webFormat, largeFormat, tags, onShow }) => (
  <li className="ImageGalleryItem">
    <img
      className="ImageGalleryItem-image"
      src={webFormat}
      alt={tags}
      onClick={() => onShow(largeFormat)}
    />
  </li>
);
