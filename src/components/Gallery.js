import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const data = useContext(DataContext);

  return (
    <div>
      {data.map((entry, i) => (
        <GalleryItem key={i} entry={entry} />
      ))}
    </div>
  );
};

export default Gallery;
