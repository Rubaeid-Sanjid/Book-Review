import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from 'react-router-dom';

const WishlistBook = ({book}) => {
    const {bookId, bookName, image, tags, author, category, rating, totalPages, publisher, yearOfPublishing} = book;
    return (
        <div className="card card-side bg-base-100 shadow-xl border p-3">
      <figure className='w-2/12'> 
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <h3 className="text-lg font-medium">By: {author}</h3>
        <div className="flex gap-3 items-center my-2">
            <span className='font-bold'>Tag</span>
            {tags.map((tag, idx) => (
              <h3
                className="text-[#23BE0A] px-3 py-2 rounded-3xl bg-[#23BE0A0D] font-medium"
                key={idx}
              >
                <span className="font-bold">#</span>{tag}
              </h3>
            ))}
            <h3 className='flex items-center'><CiLocationOn />Year of Publishing: {yearOfPublishing}</h3>
        </div>

        <div className='flex gap-6'>
            <h3 className='flex items-center gap-2'><HiOutlineUsers /> Publisher: {publisher}</h3>
            <h3 className='flex items-center gap-2'><MdOutlineRestorePage /> Page: {totalPages}</h3>
        </div>
        <div className="card-actions items-center my-2 pt-3 border-t-2">
            <h3 className='px-3 py-1 bg-[#328EFF26] text-[#328EFF] rounded-2xl'>Category: {category}</h3>
            <h3 className='px-3 py-1 bg-[#FFAC3326] text-[#FFAC33] rounded-2xl'>Rating: {rating}</h3>
          <Link to={`/bookdetails/${bookId}`}><button className="btn py-2 px-5 text-white bg-[#23BE0A] rounded-full">View Details</button></Link>
        </div>
      </div>
    </div>
    );
};

WishlistBook.propTypes = {
    book: PropTypes.object
};

export default WishlistBook;