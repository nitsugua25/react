const Search = () =>{
    let searchTerm = '' ;
    const handleEvent = (event)=>{
        searchTerm = event.target.value;
    }
    return(
        <div>
            <label htmlFor="search">Search by author : </label>
            <input id="search" type="text" onChange={handleEvent}></input>

            <p>Recherhe de <strong>{searchTerm  }</strong></p>
        </div>
    )
}

export default Search