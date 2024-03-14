import Gallery from "./Gallery";

const Photo = (props) => {
    let url = "https://fastly.picsum.photos/id/"+props.id+"/"+props.size.width+"/"+props.size.heigth+".jpg?hmac=Z4ZkUsrFrxw28ByS2PTXgwqYLrKE9CIHV2nVAp7-o9k"
  return (
    <img src={url}></img>
  );
};

export default Photo;
