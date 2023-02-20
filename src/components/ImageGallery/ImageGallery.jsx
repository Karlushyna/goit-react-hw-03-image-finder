import React from "react";

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {

  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem images={images} onClick={onClick} />
  
  </ul>   
  )
}

export default ImageGallery;






// import propTypes from 'prop-types';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// import styles from './ImageGallery.module.css';

// export const ImageGallery = ({ images, onImageClick }) => (
//   <ul className={styles.ImageGallery}>
//     {images.map((image, index) => (
//       <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
//     ))}
//   </ul>
// );

// ImageGallery.propTypes = {
//   images: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.number.isRequired,
//     })
//   ),
//   onImageClick: propTypes.func.isRequired,
// };
