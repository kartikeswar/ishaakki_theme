import React from 'react';
import { ShoppingBag, Search, User, Heart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <h1 className="text-2xl font-serif text-rose-800">Iskaakki</h1>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-rose-800">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-rose-800">Sarees</a>
            <a href="#" className="text-gray-700 hover:text-rose-800">Lehengas</a>
            <a href="#" className="text-gray-700 hover:text-rose-800">Suits</a>
            <a href="#" className="text-gray-700 hover:text-rose-800">Accessories</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-700 cursor-pointer hover:text-rose-800" />
            <User className="h-5 w-5 text-gray-700 cursor-pointer hover:text-rose-800" />
            <Heart className="h-5 w-5 text-gray-700 cursor-pointer hover:text-rose-800" />
            <ShoppingBag className="h-5 w-5 text-gray-700 cursor-pointer hover:text-rose-800" />
          </div>
        </div>
      </div>
    </nav>
  );
}