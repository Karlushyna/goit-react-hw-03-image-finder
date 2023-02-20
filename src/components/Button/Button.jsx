import styles from './button.module.css';

export const Button = ({ onClick }) => (
  <button className={styles.Button} onClick={onClick} type="button">
    Load more
  </button>
);



