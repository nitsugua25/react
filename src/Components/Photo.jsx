import Gallery from "./Gallery";

const Photo = (props) => {
   return (
    <img class="image" src={props.url}></img>
  );
};

export default Photo;
