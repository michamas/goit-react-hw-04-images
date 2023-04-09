export const ImageGalleryItem = ({ webFormat, tags }) => (
  <li className="ImageGalleryItem">
    <img src={webFormat} alt={tags} />
  </li>
);
