import GalleryItem from "./GalleryItem";

const Gallery = ({ data }) => {
  return (
    <div>
      {data.map((entry, i) => (
        <GalleryItem key={i} entry={entry} />
      ))}
    </div>
  );
};

export default Gallery;
