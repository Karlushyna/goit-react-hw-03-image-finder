import { Component } from "react";
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal--root');

class Modal extends Component {

componentDidMount() {
window.addEventListener('keydown', this.handleKeyDown);
}
  
  handelKeydown = (e) => {

    this.props.handleModalClose(e);
  };

  
  handelClick = (e) => {
    this.props.handleModalClose(e);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeydown);

  }
    render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handelClick}>
        <div className={styles.Modal}>
          {this.props.children}
        </div>
      </div>,
      
      modalRoot
    );
  }
}
  
  


//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.handleModalClose();
//     }
//   };

//   // async componentDidMount() {
//   //   window.addEventListener('keydown', this.handleKeyDown);
//   // }

export default Modal;

// export const Modal = ({ src, alt, handleClose }) => (
//   <div className={styles.Overlay} onClick={handleClose}>
//     <div className={styles.Modal}>
//       <img src={src} alt={alt} />
//     </div>
//   </div>
// );

// Modal.propTypes = {
//   src: propTypes.string.isRequired,
//   alt: propTypes.string.isRequired,
//   handleClose: propTypes.func.isRequired,
// };
