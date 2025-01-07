import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Timeless Indian Elegance
          </h1>
          <p className="text-xl text-white mb-8">
            Discover our exquisite collection of traditional Indian wear
          </p>
          <button className="bg-rose-800 text-white px-8 py-3 rounded-md hover:bg-rose-900 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}