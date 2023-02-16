import propTypes from 'prop-types';

import styles from './image-gallery-item.module.css';

export const ImageGalleryItem = ({ image, onclick }) => (
  <li className={styles.ImageGalleryItem} id={image.id} onClick={onclick}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={styles.ImageGalleryItemImg}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};
