import Photo from "./Photo.jsx";

const Gallery = () => {
  return (
    <div>
      <h1>Gallerie de photos</h1>
      <Photo id={469} size={{width:"400",heigth:"300"}} />
      <Photo id={469} size={{width:"400",heigth:"300"}} />
    </div>
  );
};

export default Gallery;
