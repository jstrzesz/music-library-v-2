import { useEffect, useState } from 'react';
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
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />      
    </div>
  );
}

export default App;
