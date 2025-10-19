import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Screenshot 2025-10-19 173940.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Call for Papers", path: "/call-for-papers" },
    { name: "Committee", path: "/committee" },
    { name: "Speakers", path: "/speakers" },
    { name: "Submission", path: "/submission" },
    { name: "Registration", path: "/registration" },
    { name: "Past Conferences", path: "/past-conferences" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3" onClick={closeMenu}>
            <img 
              src={logo} 
              alt="ICCETS 2026 Logo" 
              className="h-12 w-auto sm:h-16 object-contain max-w-[120px] sm:max-w-[150px]" 
            />
            <span className="font-semibold text-xs sm:text-sm text-primary">ICCETS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-xs xl:text-sm font-medium transition-all duration-300 rounded-lg whitespace-nowrap group ${
                  location.pathname === item.path
                    ? "text-white bg-primary shadow-lg shadow-primary/25 transform scale-105"
                    : "text-foreground hover:text-primary hover:bg-primary/10 hover:shadow-md hover:scale-105"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname !== item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4 bg-gradient-to-br from-muted/60 to-muted/40 backdrop-blur-sm rounded-xl mb-4 border border-border/50 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? "text-white bg-primary shadow-md shadow-primary/25 transform scale-[1.02]"
                    : "text-foreground hover:text-primary hover:bg-primary/10 hover:shadow-sm hover:scale-[1.02] hover:translate-x-1"
                }`}
              >
                <span className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                    location.pathname === item.path 
                      ? "bg-white" 
                      : "bg-primary/30 group-hover:bg-primary/60"
                  }`}></span>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
