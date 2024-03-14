import Photo from "./Photo.jsx";


const Gallery = (props) => {
  return (
    <div>
      <h1>Gallerie de photos</h1>
      {props.liste.map((element) => {

        return(
        <div>
        <p>{element.author} #{element.id}</p>
        <Photo url={element.download_url}/>
        </div>
        )
})}
      
      
      </div>
  );
};

export default Gallery;
