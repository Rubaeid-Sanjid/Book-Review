import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";
import ReadBook from "../../components/ReadBook/ReadBook";


const ListedBooks = () => {

    const allBooks = useLoaderData();
    const [readBooks, setReadBooks] = useState([])

    useEffect(()=>{
        const storedReadBookId = getStoredBooks();

        const storedReadBooks =  allBooks.filter(book => storedReadBookId.includes(book.bookId))

        setReadBooks(storedReadBooks);
    },[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-10 p-10 bg-[#1313130D] rounded-xl">Books</h2>
            <div className="mt-10">
                {
                    readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;