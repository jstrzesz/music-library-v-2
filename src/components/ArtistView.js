import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ArtistView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    const API_URL = `http://localhost:4000/album/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const { results } = await response.json();
      setArtistData(results);
    }
    fetchData();
  }, [id]);

  const justAlbums = artistData.filter(entry => entry.collectionType === 'Album');

  const navButtons = () => (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      |
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );

  return (
    <div>
      {artistData.length ? artistData[0].artistName : <h2>Loading....</h2>}
      {navButtons()}
      <h2>The id passed was: {id}</h2>
      {justAlbums.map((album, i) => (
        <div key={i}>
          <Link to={`/album/${album.collectionId}`}>
            <p>{album.collectionName}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtistView;
