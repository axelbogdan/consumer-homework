import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from "../../api/books";
import { BookInterface } from "../../interfaces/bookInterface";
import './BookDetails.css';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState<BookInterface>();

    useEffect(() => {
        fetchBookById(id).then((response)  => {
                setBook(response.data.results[0]);
            }
        );
    }, [id])

    const getDisplayValue = (key: keyof BookInterface) => {
        if(!book) {
            return null;
        }
        switch (key) {
            case 'authors':
                return book[key].map(author => `${author.name} (${author.birth_year} - ${author.death_year})`).join(" + ");
            case 'bookshelves':
            case 'languages':
            case 'subjects':
            case 'translators':
                return book[key]?.join(', ');
            case 'copyright':
                return book[key]?.toString();
            case 'formats':
                return Object.keys(book[key]).join(', ');
            default:
                return book[key]
        }

    }

    return (
        <>
            {book && (Object.keys(book) as Array<keyof BookInterface>).map((key, index) => {
                const value = getDisplayValue(key);
                return(
                    <div className="bookContainer">
                        <div className="leftColumn">{key}</div>
                        <div className="rightColumn">{value}</div>
                    </div>
                )
            })}
        </>
    );
}

export default BookDetails;