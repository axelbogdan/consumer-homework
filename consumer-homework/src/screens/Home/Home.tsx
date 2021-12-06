import React, { useEffect, useState } from 'react';
import { fetchBooks } from "../../api/books";
import { ResultsTable, SearchBar } from "../../components";
import './Home.css';

const Home = () => {

    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        fetchBooks(searchQuery).then((response)  => {
                setBooks(response.data.results)
            }
        );
    }

    useEffect(() => {
        fetchBooks('').then((response)  => {
                setBooks(response.data.results)
            }
        );
    }, []);

    return (
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch}/>
            <ResultsTable results={books}/>
        </>
    )
}

export default Home;