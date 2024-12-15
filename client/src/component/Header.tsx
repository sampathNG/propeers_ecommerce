import React, { useState } from "react";
import { Menu } from "lucide-react";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoPersonSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import logo from "../assets/logo.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navItems = [
    { label: "Everything", href: "#" },
    { label: "Groceries", href: "#" },
    { label: "Juice", href: "#" },
  ];
  const navSecondary = [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 py-5">
      {/* Top Header */}
      <div className="container mx-auto py-3 flex items-center justify-between">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-green-600"
          >
            <Menu className="h-6 w-6" />
          </button>
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-14 w-auto pr-5" />
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 text-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {navSecondary.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 text-lg hover:text-green-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          {/* Shopping Cart and User Icon */}
          <div className="flex items-center space-x-8">
            <span className="text-green-600 font-semibold">$0.00</span>
            <TfiShoppingCart className="text-green-600 text-2xl cursor-pointer" />
            <IoPersonSharp className="text-gray-700 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 border-b text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
          <div className="p-4">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full border-gray-300 focus:border-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
