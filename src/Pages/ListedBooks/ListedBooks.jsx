import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getStoredWishBooks } from "../../Utility/localStorage";
import ReadBook from "../../components/ReadBook/ReadBook";
import WishlistBook from "../../components/WishlistBook/WishlistBook";

const ListedBooks = () => {
  const allBooks = useLoaderData();

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

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10 p-10 bg-[#1313130D] rounded-xl">
        Books
      </h2>

      <div role="tablist" className="tabs tabs-lifted mt-12">
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
