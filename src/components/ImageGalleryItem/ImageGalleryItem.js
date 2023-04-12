export const ImageGalleryItem = ({ webFormat, largeFormat, tags, onShow }) => (
  <li className="ImageGalleryItem">
    <img src={webFormat} alt={tags} onClick={() => onShow(largeFormat)} />
  </li>
);
