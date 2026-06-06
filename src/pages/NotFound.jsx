import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 my-10 text-center">

      <TriangleAlert
        size={80}
        className="text-red-500 mb-6"
      />

      <h1 className="text-7xl font-bold text-white">
        404
      </h1>

     <h3 className="text-3xl font-bold text-white">
      We're sorry, but...
     </h3>

      <h2 className="mt-4 text-2xl font-semibold text-white">
     Site not found
      </h2>

      <p className="mt-4 max-w-md text-slate-400">
        The requested site was not found anywhere... Maybe the site was moved or deleted. Someone should really clean up here...
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Back to home
      </Link>

    </div>
  );
}
