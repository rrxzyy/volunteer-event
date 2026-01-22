import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-white h-screen text-neutral-950 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
      <p className="text-md mt-2">Sorry, we couldn’t find the page you’re looking for.</p>
      <button
        onClick={handleBack}
        className="bg-neutral-950 text-white px-4 py-2 mt-6 rounded hover:bg-gray-800 cursor-pointer">
        Back
      </button>
    </div>
  );
};

export default ErrorPage;
