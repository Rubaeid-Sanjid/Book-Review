import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const { bookName, image, tags, author, category, rating } = book;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-3 pt-3">
        <img src={image} alt="book" className="rounded-xl h-80 w-80" />
      </figure>
      <div className="card-body">
        <div className="flex gap-6">
          {tags.map((tag, idx) => (
            <h3
              className="text-[#23BE0A] px-4 py-2 rounded-3xl bg-[#23BE0A0D] font-medium"
              key={idx}
            >
              {tag}
            </h3>
          ))}
        </div>
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <h3 className="text-lg">By: {author}</h3>
        <div className="flex w-full justify-between pt-3 border-t-2 border-dashed text-lg">
          <h3>{category}</h3>
          <h3 className="flex items-center gap-1">
            {rating}
            <CiStar />
          </h3>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
