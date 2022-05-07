import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
        OOPS | 404 Not found
      </h1>
      <Link
        to="/"
        className="py-2 px-6 rounded shado text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
      >
        Back to home page
      </Link>
    </div>
  );
}

export default Error