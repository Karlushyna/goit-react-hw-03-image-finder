import propTypes from 'prop-types';

import styles from './button.module.css';

export const Button = ({ onClick }) => (
  <button className={styles.Button} onClick={onClick} type="button">
    Load more
  </button>
);


Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
