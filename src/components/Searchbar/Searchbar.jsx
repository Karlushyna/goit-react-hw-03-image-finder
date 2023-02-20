import { Component } from "react";
import propTypes from 'prop-types';


import styles from './searchbar.module.css';

class Searchbar extends Component {

  state = {
    currentSearch: "",
  }

  handleChange = ({ target }) => {
    const {value } = target;
    this.setState({ currentSearch: value });

  }
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.currentSearch.trim() === " ") {
        return alert ("Please enter image name for search" )
      };

      this.props.onSubmit(this.state.currentSearch);
      this.setState({currentSearch: ''})
    }


  render() {
        const { currentSearch } = this.state;
        const { handleChange, handleSubmit } = this;
    return (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
    

          <input
            value={currentSearch}
            className={styles.SearchFormInput}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="inputForSearch"
            required    
      />
    </form>
  </header>
    )
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};




// import propTypes from 'prop-types';

// import styles from './searchbar.module.css';

// export const Searchbar = ({ onSubmit }) => (
//   <header className={styles.Searchbar}>
//     <form className={styles.SearchForm} onSubmit={onSubmit}>
//       <button type="submit" className={styles.SearchFormButton}>
//         <span className={styles.SearchFormButtonLabel}>Search</span>
//       </button>

//       <input
//         name="inputForSearch"
//         className={styles.SearchFormInput}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//       />
//     </form>
//   </header>
// );

// Searchbar.propTypes = {
//   onSubmit: propTypes.func,
// };