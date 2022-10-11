import { Component } from 'react';
import fetchImages from './api/Api';
import { Main } from './App.styled';
import SearchBar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import LoadMoreBtn from '../components/Button/Button'
import toast, { Toaster } from 'react-hot-toast';


export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: false,
    query: '',
    page: 1,
  };

async componentDidUpdate(prevProps, prevState) {
  const {
      page,
      query,
      error,
      // total
    } = this.state;
    const { page: prevPage, query: prevQuery, error: prevError } = prevState;

    if (prevPage !== page || prevQuery !== query) {
      try {
        this.setState({ isLoading: true });
        const response = await fetchImages(query, page);
        const images = response.hits;
        const total = response.total;
        this.setState(({ items }) => ({
          items: [...items, ...images],
        }));
        if (total === 0) {
          toast.error(
            'Sorry, there are no images matching your query. Please try again.'
          );
        }
        if (query === '') {
          toast.error('Write something!');
        }
        if (prevError !== error) {
          toast.error(error);
        }
      } catch {
        this.setState({ error: 'Can`t load images!' });
      } finally {
        this.setState({ isLoading: false });
      }
    }

};

  handlerFormSubmit = (inputName) => {
    this.setState({
      page: 1,
      isLoading: false,
      error: false,
      items: [],
      query: inputName.searchQuery,
    });
  };

   loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

 render() {
     const { items, isLoading } = this.state;
    return (
      <Main>
        <SearchBar onSubmit={this.handlerFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery items={items} />
        {items.length > 0 && <LoadMoreBtn onClick={this.loadMore} />}
        {isLoading && <Loader />}
        <Toaster />
      </Main>
    );
  };

  };