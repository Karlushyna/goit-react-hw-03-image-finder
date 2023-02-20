import React from "react";

import styles from './image-gallery-item.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, modalAlt, largeImageURL }) => (
    <li className={styles.ImageGalleryItem} key={id} onClick={() => { onClick(largeImageURL, modalAlt) }}>
      <img
        src={webformatURL}
        alt={modalAlt}
        className={styles.ImageGalleryItemImg}

        
      />
    </li>
  )
  )

}

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  images: [],
}




// ImageGalleryItem.propTypes = {
//   image: propTypes.object.isRequired,
//   onclick: propTypes.func.isRequired,
// };

// import propTypes from 'prop-types';

// import styles from './image-gallery-item.module.css';

// export const ImageGalleryItem = ({ image, onclick }) => (
//   <li className={styles.ImageGalleryItem} id={image.id} onClick={onclick}>
//     <img
//       src={image.webformatURL}
//       alt={image.tags}
//       name={image.largeImageURL}
//       className={styles.ImageGalleryItemImg}
//     />
//   </li>
// );

// ImageGalleryItem.propTypes = {
//   image: propTypes.object.isRequired,
//   onclick: propTypes.func.isRequired,
// };
