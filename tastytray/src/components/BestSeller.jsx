import { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import DishCard from './DishCard';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const bestSellers = products.filter((p) => p.bestseller === true).slice(0, 4);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-yellow-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-yellow-600">🌟 Best Sellers</h2>
        <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
          Our most-loved dishes by customers. Order your favorite now!
        </p>
      </div>

      {bestSellers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((dish) => (
            <DishCard key={dish._id} {...dish} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No best sellers available right now.
        </p>
      )}
    </section>
  );
};

export default BestSeller;
