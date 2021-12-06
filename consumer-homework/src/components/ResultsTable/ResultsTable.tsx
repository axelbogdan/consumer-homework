import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BookInterface } from "../../interfaces/bookInterface";
import './ResultsTable.css'

interface ResultsTableProps {
    results: Array<BookInterface>;
}

const ResultsTable: FC<ResultsTableProps> = ({ results }) => {
    if(results.length === 0) {
        return null;
    }
    return (
        <div className="tableContainer">
            <table className="resultsTable" cellPadding={5} cellSpacing={0}>
                <thead>
                    <tr>
                        <th rowSpan={2} className="tableCell">Author</th>
                        <th rowSpan={2} className="tableCell">Title</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                {
                    results.map((books: BookInterface) => {
                        const { authors, title, id } = books;
                        let authorsAsString = authors.map(author => author.name).join(" + ");
                        return (
                            <tr key={id}>
                                <td className="tableCell">{authorsAsString}</td>
                                <td className="tableCell">
                                    <Link to={`/${id}`}>
                                        {title}
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ResultsTable;