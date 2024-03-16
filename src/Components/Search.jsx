import { useState } from "react";
const Search = (props) =>{
    const [searchTerm,setSearchTerm] = useState('');
    const handleChange = (event)=>{
        setSearchTerm(event.target.value);
        props.onSearch(event);
    };
    return(
        <div>
            <label htmlFor="search">Search by author : </label>
            <input id="search" type="text" onChange={handleChange}></input>

            <p>Recherhe de <strong>{searchTerm  }</strong></p>
        </div>
    )
}

export default Search