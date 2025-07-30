const NewsLetterBox = () => (
  <section className="py-10 px-6 bg-green-600 text-white text-center">
    <h2 className="text-2xl font-semibold mb-2">Get Exclusive Offers</h2>
    <p className="mb-4">Subscribe to our newsletter and never miss a deal!</p>
    <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded text-gray-700 w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-400 text-green-900 font-semibold rounded hover:bg-yellow-500"
      >
        Subscribe
      </button>
    </form>
  </section>
);
export default NewsLetterBox;
