import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getStoredWishBooks } from "../../Utility/localStorage";
import ReadBook from "../../components/ReadBook/ReadBook";
import WishlistBook from "../../components/WishlistBook/WishlistBook";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  // const {totalPages, rating, yearOfPublishing} = allBooks

  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    const storedReadBookId = getStoredBooks();
    const storedWishlistBookId = getStoredWishBooks();

    const storedReadBooks = allBooks.filter((book) =>
      storedReadBookId.includes(book.bookId)
    );
    const storedWishlistBooks = allBooks.filter((book) =>
      storedWishlistBookId.includes(book.bookId)
    );

    setReadBooks(storedReadBooks);
    setWishlistBooks(storedWishlistBooks);
  }, [allBooks]);

//Read book list sort 
  const handleSortReadBookByRating = () => {
    const sortedAllBooks = allBooks.sort(
      (a, b) => b.rating - a.rating
    );

    const readYears = readBooks.map((book) => book.rating);

    const sortedBook = sortedAllBooks.filter((book) =>
      readYears.includes(book.rating)
    );
    setReadBooks(sortedBook);
  };
  const handleSortReadBookByPage = () => {
    const sortedAllBooks = allBooks.sort(
      (a, b) => b.totalPages - a.totalPages
    );

    const readYears = readBooks.map((book) => book.totalPages);

    const sortedBook = sortedAllBooks.filter((book) =>
      readYears.includes(book.totalPages)
    );
    setReadBooks(sortedBook);
  };
  const handleSortReadBookByYear = () => {
    const sortedAllBooks = allBooks.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );

    const readYears = readBooks.map((book) => book.yearOfPublishing);

    const sortedBook = sortedAllBooks.filter((book) =>
      readYears.includes(book.yearOfPublishing)
    );
    setReadBooks(sortedBook);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10 p-10 bg-[#1313130D] rounded-xl">
        Books
      </h2>

      <div className="text-center mt-8">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={handleSortReadBookByRating}>Rating</a>
            </li>
            <li>
              <a onClick={handleSortReadBookByPage}>Number of pages</a>
            </li>
            <li>
              <a onClick={handleSortReadBookByYear}>Published year</a>
            </li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs tabs-lifted mt-8">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read_Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {/* Readbooks */}
          <div className="mt-10">
            {readBooks.map((book) => (
              <ReadBook key={book.bookId} book={book}></ReadBook>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist_Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {/* Wishlist books */}
          <div className="mt-10">
            {wishlistBooks.map((book) => (
              <WishlistBook key={book.bookId} book={book}></WishlistBook>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
