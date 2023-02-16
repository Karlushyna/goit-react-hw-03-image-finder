import { Dna } from 'react-loader-spinner';

import styles from './loader.module.css';

export const Loader = () => (
  <div className={styles.Loader}>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);
