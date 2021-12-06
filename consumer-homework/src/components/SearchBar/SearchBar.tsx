import React, { FC } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: Function;
    handleSearch: Function;
}

const SearchBar: FC<SearchBarProps> = ({ searchQuery, setSearchQuery, handleSearch }) => (
    <div className="searchBarContainer">
        <label htmlFor="headerSearch">
            <span>Search books</span>
        </label>
        <input
            value={searchQuery}
            onInput={event => {
                const element = event.currentTarget as HTMLInputElement;
                setSearchQuery(element.value)
            }}

            type="text"
            id="headerSearch"
            placeholder="Search books"
            name="search"
            onKeyDown={(event) => {
                if(event.key === 'Enter') {
                    handleSearch();
                }
            }}
        />
        <button onClick={() => handleSearch()}>Search</button>
    </div>
);

export default SearchBar;