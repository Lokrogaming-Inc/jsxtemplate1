import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex items-center justify-between px-6 py-4 bg-black border-b border-blue-850 shadow shadow-lg">
<Link to="/"><p className="text-xl font-bold">Template 1</p></Link>

        <div className="flex gap-6">
          <Link
      to="/"
      className="relative text-white transition-colors duration-300 hover:text-white group"
    >
      Home
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>

    <Link
      to="/projects"
      className="relative text-white transition-colors duration-300 hover:text-white group"
    >
      Projects
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>

    <Link
      to="/about"
      className="relative text-white transition-colors duration-300 hover:text-white group"
    >
      About us
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>

    <Link
      to="/team"
      className="relative text-white transition-colors duration-300 hover:text-white group"
    >
      Our Team
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>

    <Link
      to="/contact"
      className="relative text-white transition-colors duration-300 hover:text-white group"
    >
      Contact
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden flex items-center justify-between px-4 py-4 bg-black border-b border-white">

<Link to="/">        
<p>Template 1</p>
</Link>

        <button
          onClick={() => setOpen(true)}
          className="text-white"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0
          h-full w-72
          bg-black
          border-l border-white
          z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h2 className="text-white font-bold">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4">

  <Link
    to="/"
    onClick={() => setOpen(false)}
    className="relative w-fit text-white hover:text-white transition-colors duration-300 group"
  >
    Home
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </Link>

  <Link
    to="/projects"
    onClick={() => setOpen(false)}
    className="relative w-fit text-white hover:text-white transition-colors duration-300 group"
  >
    Projects
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </Link>

  <Link
    to="/contact"
    onClick={() => setOpen(false)}
    className="relative w-fit text-white hover:text-white transition-colors duration-300 group"
  >
    Contact
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </Link>
  <Link
    to="/team"
    onClick={() => setOpen(false)}
    className="relative w-fit text-white hover:text-white transition-colors duration-300 group"
  >
    Our Team
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-300 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </Link>
</div>
      </div>
    </>
  );
}
