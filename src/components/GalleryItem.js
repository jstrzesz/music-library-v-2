import { useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ entry }) => {

  let [view, toggleView] = useState(false);

  const simpleStyle = {
    'width': '25vw',
    'height': '20vh',
    'border': '1px solid black'
  };

  const detailedStyle = {
    'width': '80vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px',
    'backgroundImage': `url(${entry.artworkUrl100})`,
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'color': 'yellow'
  };

  const simpleView = () => (
    <div style={simpleStyle}>
      <h3>{entry.trackName}</h3>
      <h4>{entry.collectionName}</h4>
    </div>
  );

  const detailedView = () => (
    <div style={detailedStyle}>
      <h2>{entry.trackName}</h2>
      <h3>
        <Link to={`/artist/${entry.artistId}`}>
          {entry.artistName}
        </Link>
      </h3>
      <h3>
        <Link to={`/album/${entry.collectionId}`}>
          {entry.collectionName}
        </Link>
      </h3>
      <h4>{entry.primaryGenreName}</h4>
      <h4>{entry.releaseDate}</h4>
    </div>
  );

  return (
    <div
      onClick={() => toggleView(!view)}
      style={{ 'display': 'inline-block' }}
    >
      {view ? detailedView() : simpleView()}
    </div>
  );
};

export default GalleryItem;
