import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Royal Blue Banarasi Saree',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Bridal Red Lehenga',
    price: '₹49,999',
    image: 'https://images.unsplash.com/photo-1595032834-98d40c7b23c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Emerald Green Anarkali',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1602424770774-7e866ec868d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Designer Party Wear Suit',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[400px] w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-6 w-6 text-rose-800 cursor-pointer" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-lg font-medium text-rose-800">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}