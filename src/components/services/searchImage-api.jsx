import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32141860-2c94c44d30df3c1906cfa40b2',
    image_type: 'photo',
    orientation: 'horizontal',
  }
})

export const searchImage = async(currentSearch, page) => {
  const {data} =  await instance.get( '/', {
    params: {
      per_page: 12,
      q: currentSearch,
      page,
    }
  }
  )

  return data;
}

// axios.defaults.baseURL = `https://pixabay.com/api`;
// const URL_KEY = '32141860-2c94c44d30df3c1906cfa40b2';

// export const fetchImages = async (inputValue, page) => {
// const response = await axios.get(`/?q=${inputValue}&page=${page}&key=${URL_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data.hits.map(image => {
//     return {
//       id: image.id,
//       webformatURL: image.webformatURL,
//       largeImageURL: image.largeImageURL,
//       tags: image.tags,
//     };
//   });
// };

//upd on this: 
// const instance = axios.create({
//     baseURL: 'https://pixabay.com/api',
//     params: {
//         key: '32141860-2c94c44d30df3c1906cfa40b2',
//         image_type: 'photo',
//         orientation: 'horizontal',
//     }

// })

// export const fetchImages = async (inputValue, pageNr) => {
//     const { data } = await instance.get('/', {
//         params: {
//             q: inputValue,
//             pageNr,
//             per_page: 12,
//         }
//     })
//     return data;
        
//     }
