import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <input type="text"
            ref={searchInput}
            value={search}
            onChange={handleSearch}
            placeholder='Search by Name'/>
    );
}
 
export default Search;