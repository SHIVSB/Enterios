import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="enterios">ENTERIOS</div>
      <div className="links">
        <div className="link-main">
          <span className="link">About Us</span>
          <span className="link">Our Designers</span>
          <span className="link">Projects</span>

          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            Login
          </button>
          <button
            onClick={() => {
              window.location.href = "/signup";
            }}
            className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            Signup
          </button>
        </div>
        <div className="md:hidden space-y-2">
          <span className="block w-8 h-1 bg-slate-900"></span>
          <span className="block w-8 h-1 bg-slate-900"></span>
          <span className="block w-8 h-1 bg-slate-900"></span>
        </div>
      </div>
    </div>
  );
}
