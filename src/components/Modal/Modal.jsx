import propTypes from 'prop-types';

import styles from './modal.module.css';

export const Modal = ({ src, alt, handleClose }) => (
  <div className={styles.Overlay} onClick={handleClose}>
    <div className={styles.Modal}>
      <img src={src} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};
