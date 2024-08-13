const CartPage = () => {
  return (
    <div className="mt-16 bg-gray-100 py-10 px-4 lg:px-24">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Your Cart
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="w-full md:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              {/* Item */}
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Book"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Book Title
                    </h4>
                    <p className="text-sm text-gray-600">Author Name</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 text-center border border-gray-300 rounded-lg py-2"
                  />
                  <p className="text-lg font-semibold text-gray-800 ml-4">
                    $19.99
                  </p>
                  <button className="text-red-600 hover:text-red-800 ml-4">
                    Remove
                  </button>
                </div>
              </div>

              {/* Repeat the above block for each item in the cart */}
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h4>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Tax</span>
                <span>$1.60</span>
              </div>
              <div className="flex justify-between text-gray-800 font-semibold mb-4">
                <span>Total</span>
                <span>$21.59</span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
