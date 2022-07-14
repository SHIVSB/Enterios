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
            className="px-2 md:px-6 py-1 rounded-md shadow-lg md:rounded-lg bg-black mr-1 "
          >
            Login
          </button>

          <button className="px-2 md:px-4 py-1 rounded-md shadow-lg md:rounded-lg bg-green-600 ml-1 ">
            Signup
          </button>
        </div>
        <div className="md:hidden space-y-2">
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </div>
      </div>
    </div>
  );
}
