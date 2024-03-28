import { Link } from "react-router-dom";
import image from "../../assets/images/Book.jpg"

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl mt-6 lg:mt-12 p-6 lg:p-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={image}
          className="lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold mb-12">Books to freshen up your bookshelf</h1>
          <Link to={"/listedbooks"}><button className="btn text-white bg-[#23BE0A]">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
