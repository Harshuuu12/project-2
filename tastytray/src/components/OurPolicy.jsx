const OurPolicy = () => (
  <section className="py-12 px-6 bg-white text-center">
    <h2 className="text-3xl font-bold text-green-600 mb-6">Why Choose FreshMart?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Fast Delivery</h3>
        <p className="text-gray-500">Your food reaches you in under 30 minutes!</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Fresh Ingredients</h3>
        <p className="text-gray-500">Only the best, locally-sourced ingredients go into our meals.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">100% Satisfaction</h3>
        <p className="text-gray-500">We guarantee quality — or your meal is on us!</p>
      </div>
    </div>
  </section>
);
export default OurPolicy;
