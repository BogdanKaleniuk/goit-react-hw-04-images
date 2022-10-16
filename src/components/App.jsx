import { useState, useEffect } from 'react';
import fetchImages from './api/Api';
import { Main } from './App.styled';
import SearchBar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import LoadMoreBtn from '../components/Button/Button'
import toast, { Toaster } from 'react-hot-toast';


export default function  App () {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState('false');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  
useEffect(() => {
    if (!query) {
      return;
    }

async function fetchImg(query, page) {
  try {
      setIsLoading(true);
      const response = await fetchImages(query, page);
      const images = response.hits;
      if (images.length === 0) {
        toast.error(
            'Нічого не знайдено по запиту.'
          );
       return;
  }
    setItems(items => [...items, ...images])
  } catch {
    alert('Error2')
  } finally {
        setIsLoading(false);
      }
    }
    fetchImg(query, page);
  }, [page, query]);

  const handlerFormSubmit = (inputName) => {
  if (query !== inputName.searchQuery.trim()) {
    setItems([]);
    setIsLoading('false');
    setQuery(inputName.searchQuery.trim());
    setPage(1);
  };};

  const loadMore = () => {
      setPage(prevPage => prevPage + 1);
      setIsLoading(true);
  };  
    return (
      <Main>
        <SearchBar onSubmit={handlerFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery items={items} />
        {items.length > 0 && <LoadMoreBtn onClick={loadMore} />}
        {isLoading && <Loader />}
        <Toaster />
      </Main>
    );
  };




//   import { Component } from 'react';
// import fetchImages from './api/Api';
// import { Main } from './App.styled';
// import SearchBar from '../components/Searchbar/Searchbar';
// import ImageGallery from '../components/ImageGallery/ImageGallery';
// import Loader from '../components/Loader/Loader';
// import LoadMoreBtn from '../components/Button/Button'
// import toast, { Toaster } from 'react-hot-toast';


// export default class App extends Component {
//   state = {
//     items: [],
//     isLoading: false,
//     error: false,
//     query: '',
//     page: 1,
//   };

// async componentDidUpdate(prevProps, prevState) {
//   const {
//       page,
//       query,
//       error,
//     } = this.state;
//     const { page: prevPage, query: prevQuery, error: prevError } = prevState;

//     if (prevPage !== page || prevQuery !== query) {
//       try {
//         this.setState({ isLoading: true });
//         const response = await fetchImages(query, page);
//         const images = response.hits;
//         const total = response.total;
//         this.setState(({ items }) => ({
//           items: [...items, ...images],
//         }));
//          if (prevPage === page) {
//           this.setState({ isLoading: false })
//         }
//         if (total === 0) {
//           toast.error(
//             'Нічого не знайдено по запиту.'
//           );
//         }
//         if (query === '') {
//           toast.error('Введіть щось!');
//         }
//         if (prevError !== error) {
//           toast.error(error);
//         }
//       } catch {
//         this.setState({ error: 'Зображення не загрузилось!' });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }

// };

//   handlerFormSubmit = (inputName) => {
//     if (this.state.query !== inputName.searchQuery.trim()) {
//     this.setState({
//       page: 1,
//       isLoading: false,
//       error: false,
//       items: [],
//       query: inputName.searchQuery,
//     });
//   };};

//    loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       isLoading: true,
//     }));
//   };

//  render() {
//      const { items, isLoading } = this.state;
//     return (
//       <Main>
//         <SearchBar onSubmit={this.handlerFormSubmit} />
//         {isLoading && <Loader />}
//         <ImageGallery items={items} />
//         {items.length > 0 && <LoadMoreBtn onClick={this.loadMore} />}
//         {isLoading && <Loader />}
//         <Toaster />
//       </Main>
//     );
//   };

//   };