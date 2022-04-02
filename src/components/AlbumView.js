import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AlbumView = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);
  
  return (
    <div>
      <h2>The id passed was: {id}</h2>
      <p>AlbumView</p>
    </div>
  );
};

export default AlbumView;
