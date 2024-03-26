
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const bookDetails = useLoaderData();

  const { bookId } = useParams();
  const currentBookId = parseInt(bookId);

  const currentBook = bookDetails.find((book) => book.bookId === currentBookId);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = currentBook;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-12">
      <figure className="">
        <img src={image} alt="book" className="w-1/2" />
      </figure>
      <div className="card-body">
        <div className="border-b-2 pb-3">
          <h2 className="text-4xl font-extrabold my-2">{bookName}</h2>
          <h3 className="text-xl font-medium">By: {author}</h3>
        </div>

        <h3 className="text-xl font-medium my-2">{category}</h3>

        <div className="text-lg pt-3 border-t-2">
          <p>
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex gap-5 items-center my-3">
            <span className="font-bold">Tag</span>
            {tags.map((tag, idx) => (
              <h3
                className="text-[#23BE0A] px-5 py-2 rounded-3xl bg-[#23BE0A0D] font-medium"
                key={idx}
              >
                <span className="font-bold">#</span>
                {tag}
              </h3>
            ))}
          </div>
        </div>

        <div className="text-lg py-3 border-t-2 flex gap-6">
          <div>
            <h3>Number of Pages: </h3>
            <h3 className="my-3">Publisher: </h3>
            <h3>Year of Publishing: </h3>
            <h3 className="my-3">Rating: </h3>
          </div>
          <div>
            <h3 className="font-bold">{totalPages}</h3>
            <h3 className="my-3 font-bold">{publisher}</h3>
            <h3 className="font-bold">{yearOfPublishing}</h3>
            <h3 className="my-3 font-bold">{rating}</h3>
          </div>
        </div>
        
        <div className="card-actions">
          <button className="btn border-2 bg-transparent">Read</button>
          <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
