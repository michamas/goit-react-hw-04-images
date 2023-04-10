export const ImageGalleryItem = ({ webFormat, largeFormat, tags }) => (
  <li className="ImageGalleryItem">
    <img src={webFormat} alt={tags} />
  </li>
);
