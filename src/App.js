import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search for Music!');
  const [data, setData] = useState([]);

  const API_URL = 'https://itunes.apple.com/search?term=';

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`;
      const response = await fetch(`${API_URL}${search}`);
      const { results } = await response.json();
      if (results.length) { 
        setData(results);
      } else {
        setMessage('Not Found');
      }
    }
    fetchData();
  }, [search])

  const handleSearch = (e, userInput) => {
    e.preventDefault();
    setSearch(userInput);
  }

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchBar handleSearch={handleSearch} />
              <Gallery data={data} />
            </Fragment>
          }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
