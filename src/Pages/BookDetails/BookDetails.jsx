import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData();

    const {bookId} = useParams();
    const currentBookId = parseInt(bookId);

    const currentBook = bookDetails.find(book => book.bookId === currentBookId)

    return (
        <div>
            <h2>Details {bookDetails.length}</h2>
        </div>
    );
};

BookDetails.propTypes = {
    
};

export default BookDetails;