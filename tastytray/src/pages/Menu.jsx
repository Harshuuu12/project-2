import React, { useState, useContext, useMemo } from 'react';
import { ShopContext } from '../context/Shopcontext';
import DishCard from '../components/DishCard';

const Menu = () => {
  const { products } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from products
  const categories = useMemo(() => {
    const unique = new Set(products.map((item) => item.category));
    return ['All', ...unique];
  }, [products]);

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, products]);

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-24 text-gray-500 text-lg">
        Loading menu...
      </div>
    );
  }

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-20">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm sm:text-base ${
              selectedCategory === category
                ? 'bg-green-600 text-white border-green-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-green-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((dish) => (
            <DishCard
              key={dish._id || dish.name}
              {...dish}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No dishes found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
