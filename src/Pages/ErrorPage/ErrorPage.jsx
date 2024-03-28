import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold mb-2">{error.status}</h1>
          <h1 className="text-4xl font-bold mb-4">{error.statusText}</h1>
          <p className="mb-6">{error.data}</p>
          <Link to="/">
            <button className="btn bg-[#23BE0A] text-white">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
