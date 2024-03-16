/* eslint-disable react/prop-types */
import Photo from "./Photo.jsx";



const Gallery = (props) => {
  
  return (
    <div>
      <h1>Gallerie de photos</h1>
      {props.liste.map((element) => {

        return(
        // eslint-disable-next-line react/jsx-key
        <div>
        <p>{element.author} {props.isShow && <span>#{element.id}</span>}</p>
        <Photo url={element.download_url}/>
        </div>
        )
})}
      
      
      </div>
  );
};


export default Gallery;
