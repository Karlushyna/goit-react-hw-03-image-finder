import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal  from './Modal/Modal';
import { searchImage } from '../services/searchImage-api';



import styles from './styles.module.css'; 



class App extends Component {
    state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    page: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
    error: null,
    total: 0,
    };
  

  
  componentDidUpdate(_, prevState) {
    const { currentSearch, page } = this.state;

    if (currentSearch !== prevState.currentSearch || page !== prevState.page) {
      this.setState({ loading: true });
      this.fetchPosts();
    }
  }
  
  inputSearch = currentSearch => {
    if (currentSearch === this.state.currentSearch) {
      return; 
    }
    this.setState({ currentSearch, images: [], page: 1  })
  }

  async fetchPosts() {
    try {
      const { currentSearch, page } = this.state;
      const data = await searchImage(currentSearch, page);

      this.setState(({ images }) => {
        return {
          images: [...images, ...data.hits],
          total: data.totalHits,
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
    }
  
  handleImageClick = (modalImg, modalAlt) => {
    this.setState(prev => ({
      modalOpen: !prev.modalOpen, modalImg, modalAlt
    }));

  }

    async handleClickMore(){
    const response = await searchImage(
      this.state.currentSearch,
      this.state.page + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      page: this.state.page + 1,
    });
  };


    handleClose = e => {
      if (e.code === "Escape" || e.currentTarget === e.target)  {
        console.log(e.code);
      this.setState(prev => ({
        modalOpen: !prev.modalOpen
      }));
    }
  };

    loadMore = () => {
        this.setState(({page}) => ({page: page + 1}))
    }

  render() {
    const { images, page, modalOpen, modalImg, modalAlt, isLoading, total, error } = this.state;
    const { inputSearch, handleImageClick, handleClose, loadMore } = this;
    const totalPage = Math.ceil(total / 12);

    return (
      <div>
        
        <Searchbar onSubmit={inputSearch} />
        <ImageGallery onClick={handleImageClick} images={images} />

        {error && <h2 className={styles.errorMessage}>{error}</h2>}
        {isLoading && <Loader text="Loading..." />}

        {(Boolean(images.length && page < totalPage))
        && <Button onClick={loadMore} type="button" />}
        
        {modalOpen && (
          <Modal handleModalClose = {handleClose}>
            <img src={modalImg} alt={modalAlt} />
          </Modal>
        )}  
      </div>
    )
  }
}

export default App;

// import { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { fetchImages } from './api/fetchImages';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
// import React from 'react';

// import styles from './styles.module.css'; 

// export class App extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     currentSearch: '',
//     page: 1,
//     modalOpen: false,
//     modalImg: '',
//     modalAlt: '',
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     this.setState({ isLoading: true });
//     const inputForSearch = e.target.elements.inputForSearch;
//     if (inputForSearch.value.trim() === '') {
//       return;
//     }
//     const response = await fetchImages(inputForSearch.value, 1);
//     this.setState({
//       images: response,
//       isLoading: false,
//       currentSearch: inputForSearch.value,
//       page: 1,
//     });
//   };

//   handleClickMore = async () => {
//     const response = await fetchImages(
//       this.state.currentSearch,
//       this.state.page + 1
//     );
//     this.setState({
//       images: [...this.state.images, ...response],
//       page: this.state.page + 1,
//     });
//   };

//   handleImageClick = e => {
//     this.setState({
//       modalOpen: true,
//       modalAlt: e.target.alt,
//       modalImg: e.target.name,
//     });
//   };

//   handleModalClose = () => {
//     this.setState({
//       modalOpen: false,
//       modalImg: '',
//       modalAlt: '',
//     });
//   };

//   handleKeyDown = event => {
//     

//   // async componentDidMount() {
//   //   window.addEventListener('keydown', this.handleKeyDown);
//   // }

//   render() {
//     return (
//       <div
//       >
//         {this.state.isLoading ? (
//           <Loader />
//         ) : (
//           <React.Fragment>
//             <Searchbar onSubmit={this.handleSubmit} />
//             <ImageGallery
//               onImageClick={this.handleImageClick}
//               images={this.state.images}
//             />
//             {this.state.images.length > 0 ? (
//               <Button onClick={this.handleClickMore} />
//             ) : null}
//           </React.Fragment>
//         )}
//         {this.state.modalOpen ? (
//           <Modal
//             src={this.state.modalImg}
//             alt={this.state.modalAlt}
//             handleClose={this.handleModalClose}
//           />
//         ) : null}
//       </div>
//     );
//   }
// }
