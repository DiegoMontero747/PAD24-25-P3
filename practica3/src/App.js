import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Categories from './components/Categories';
import { fetchBooks } from './utils/api';

const App = () => {
  const [books, setBooks] = useState([]);
  const [categorizedBooks, setCategorizedBooks] = useState({});
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchBooks(query);
    setBooks(results);

    const updatedSearches = [query, ...recentSearches.slice(0, 4)];
    setRecentSearches(updatedSearches);
    addRecentSearch(updatedSearches)
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const handleCategorize = (book, genre) => {
    if (!categorizedBooks[genre]) categorizedBooks[genre] = [];
    categorizedBooks[genre].push(book);
    setCategorizedBooks({ ...categorizedBooks });
  };

  useEffect(() => {
    const fetchRecentSearches = async () => {
      const searches = await getRecentSearches();
      setRecentSearches(searches);
    };
    fetchRecentSearches();
  }, []);

  const addRecentSearch = async (search) => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "ADD_RECENT_SEARCH",
        payload: search,
      });
    }
  };

  const getRecentSearches = async () => {
    return new Promise((resolve) => {
      if (navigator.serviceWorker.controller) {
        const messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = (event) => resolve(event.data);
  
        navigator.serviceWorker.controller.postMessage(
          { type: "GET_RECENT_SEARCHES" },
          [messageChannel.port2]
        );
      } else {
        resolve([]);
      }
    });
  };

  return (
    <div className="container my-4">
      <header className="text-center mb-4">
        <h1 className="display-4">Buscador de Libros</h1>
        <p className="text-muted">Encuentra tus libros favoritos y categorízalos fácilmente</p>
      </header>

      <div className="mb-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="mb-4">
        <BookList books={books} onCategorize={handleCategorize} />
      </div>

      <div className="mb-4">
        <Categories categorizedBooks={categorizedBooks} />
      </div>

      <div>
        <h2 className="h4">Búsquedas recientes:</h2>
        <ul className="list-group">
          {recentSearches.map((search, index) => (
            <li key={index} className="list-group-item">
              {search}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
