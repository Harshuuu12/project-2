import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';

const Dish = () => {
  const { dishId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [added, setAdded] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  const dish = products.find((item) => item._id === dishId);

  const handleAddToCart = () => {
    addToCart(dish._id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getSuggested = () => {
    if (!dish) return [];
    return products
      .filter((item) => item._id !== dish._id && item.category === dish.category)
      .slice(0, 4);
  };

  const renderRatingStars = (rating = 4.2) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const diff = i - rating;
      if (diff <= 0) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (diff < 1) {
        stars.push(<span key={i} className="text-yellow-400">☆</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  if (!dish) {
    return (
      <div className="text-center py-24 text-red-600 font-bold text-2xl">
        ❌ Dish not found.
      </div>
    );
  }

  return (
    <>
      {/* Toast */}
      {added && (
        <div className="fixed top-20 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded shadow-sm text-sm z-50">
          ✅ Item added to cart!
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-lg font-semibold mb-4">Leave Feedback</h2>
            <textarea
              className="w-full border p-2 rounded mb-4"
              rows="4"
              placeholder="Write your thoughts..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowFeedback(false)}
                className="px-4 py-2 text-sm text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Feedback submitted:", feedback);
                  setShowFeedback(false);
                  setFeedback('');
                  alert('✅ Feedback submitted!');
                }}
                className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dish Section */}
      <section className="py-10 px-4 sm:px-8 lg:px-20 flex flex-col md:flex-row gap-10 items-start bg-white">
        <div className="w-full md:w-1/2">
          <img
            src={dish.images?.[0] || dish.image || '/placeholder.jpg'}
            alt={dish.name || 'Dish Image'}
            className="w-full h-96 object-cover rounded-2xl shadow-lg border"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-green-700 mb-2">{dish.name || 'Unnamed Dish'}</h1>

          <div className="flex items-center mb-4">
            {renderRatingStars(dish.rating || 4.2)}
            <span className="ml-2 text-sm text-gray-600">
              ({dish.rating || 4.2} / 5)
            </span>
          </div>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            {dish.description || 'Delicious and freshly prepared just for you!'}
          </p>

          <div className="text-2xl font-bold text-green-600 mb-4">
            ₹{dish.price ?? 'N/A'}
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow transition duration-300"
          >
            🛒 Add to Cart
          </button>
        </div>
      </section>

      {/* Ingredients */}
      {dish.ingredients?.length > 0 && (
        <section className="px-4 sm:px-8 lg:px-20 pt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🧂 Ingredients</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {dish.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Nutrition */}
      {dish.nutrition && (
        <section className="px-4 sm:px-8 lg:px-20 pt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">📊 Nutritional Info</h3>
          <ul className="text-gray-700">
            {Object.entries(dish.nutrition).map(([key, val], idx) => (
              <li key={idx}>
                <strong>{key}</strong>: {val}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Reviews */}
      <section className="px-4 sm:px-8 lg:px-20 pt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📢 Customer Reviews</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="font-bold text-gray-700">Anjali S.</div>
            <div className="text-sm text-yellow-500">★★★★☆</div>
            <p className="text-gray-600 mt-1">Really tasty and fresh. Would definitely reorder!</p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="font-bold text-gray-700">Rahul T.</div>
            <div className="text-sm text-yellow-500">★★★★★</div>
            <p className="text-gray-600 mt-1">Loved the flavors and portion size.</p>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowFeedback(true)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
          >
            💬 Leave Your Feedback
          </button>
        </div>
      </section>

      {/* Suggestions */}
      <section className="px-4 sm:px-8 lg:px-20 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">🍽️ You might also like</h2>
        {getSuggested().length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {getSuggested().map((sug) => (
              <Link
                to={`/dish/${sug._id}`}
                key={sug._id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={sug.images?.[0] || sug.image || '/placeholder.jpg'}
                  alt={sug.name || 'Suggested Dish'}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{sug.name}</h3>
                  <p className="text-green-600 font-semibold">₹{sug.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No similar dishes available.</p>
        )}
      </section>
    </>
  );
};

export default Dish;
