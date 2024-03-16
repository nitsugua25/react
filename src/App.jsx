import { useState } from "react";
import "./App.css";
import Gallery from "./Components/Gallery.jsx";
import Search from "./Components/Search.jsx";

function App() {
  const books = [
    {
      id: "20",
      author: "Aleks Dorohovich",
      width: 3670,
      height: 2462,
      url: "https://unsplash.com/photos/nJdwUHmaY8A",
      download_url: "https://picsum.photos/id/20/3670/2462"
    },
    {
      id: "21",
      author: "Alejandro Escamilla",
      width: 3008,
      height: 2008,
      url: "https://unsplash.com/photos/jVb0mSn0LbE",
      download_url: "https://picsum.photos/id/21/3008/2008"
    },
    {
      id: "22",
      author: "Alejandro Escamilla",
      width: 4434,
      height: 3729,
      url: "https://unsplash.com/photos/du_OrQAA4r0",
      download_url: "https://picsum.photos/id/22/4434/3729"
    },
    {
      id: "23",
      author: "Alejandro Escamilla",
      width: 3887,
      height: 4899,
      url: "https://unsplash.com/photos/8yqds_91OLw",
      download_url: "https://picsum.photos/id/23/3887/4899"
    },
    {
      id: "24",
      author: "Alejandro Escamilla",
      width: 4855,
      height: 1803,
      url: "https://unsplash.com/photos/cZhUxIQjILg",
      download_url: "https://picsum.photos/id/24/4855/1803"
    },
    {
      id: "25",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/Iuq0EL4EINY",
      download_url: "https://picsum.photos/id/25/5000/3333"
    },
    {
      id: "26",
      author: "Vadim Sherbakov",
      width: 4209,
      height: 2769,
      url: "https://unsplash.com/photos/tCICLJ5ktBE",
      download_url: "https://picsum.photos/id/26/4209/2769"
    },
    {
      id: "27",
      author: "Yoni Kaplan-Nadel",
      width: 3264,
      height: 1836,
      url: "https://unsplash.com/photos/iJnZwLBOB1I",
      download_url: "https://picsum.photos/id/27/3264/1836"
    },
    {
      id: "28",
      author: "Jerry Adney",
      width: 4928,
      height: 3264,
      url: "https://unsplash.com/photos/_WiFMBRT7Aw",
      download_url: "https://picsum.photos/id/28/4928/3264"
    },
    {
      id: "29",
      author: "Go Wild",
      width: 4000,
      height: 2670,
      url: "https://unsplash.com/photos/V0yAek6BgGk",
      download_url: "https://picsum.photos/id/29/4000/2670"
    }
  ]
  const [bookfilter,setBookFilter] = useState(books);

  const handleSearch = (event) =>{
    let filtered = books.filter(item =>{
      return item.author.includes(event.target.value);
    });
    setBookFilter(filtered);
  }
  return (
    <div>
      <Search onSearch={handleSearch}/>
      <Gallery liste={bookfilter}/>
    </div>
  );
}

export default App;
