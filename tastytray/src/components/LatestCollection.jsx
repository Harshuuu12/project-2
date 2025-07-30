// src/components/LatestCollection.jsx
import { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import DishCard from './DishCard';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const latest = [...products].slice(-4).reverse(); // Get the latest 4 items

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-yellow-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-green-700">🥗 Latest Dishes</h2>
        <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
          Discover our newest additions — freshly prepared and full of flavor.
        </p>
      </div>

      {latest.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latest.map((dish) => (
            <DishCard key={dish._id} {...dish} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No new dishes available right now.</p>
      )}
    </section>
  );
};

export default LatestCollection;
