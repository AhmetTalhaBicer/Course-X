
function ShoppingCart({ cartItems, setCartItems }) {  // Sepet içeriğini görüntülemek için bir işlev
  const continueShopping = () => {
    window.location.href = "/courses";  // Anasayfaya yönlendir
  };

  const removeItem = (item) => { // Sepetten kursu kaldırmak için bir işlev
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item); // Kursu sepetten kaldır
    setCartItems(updatedCart);
  };

  // Vergiyi hesapla: Sepette herhangi bir kurs varsa $4.99, yoksa $0.
  const calculateTax = () => { 
    return cartItems.length > 0 ? 4.99 : 0;
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-3xl font-bold mt-16">Cart Contents</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 xl:px-0">
        {cartItems.map((item, index) => ( // Sepet içeriğini ekrana yazdır
          <div key={index} className="rounded-lg bg-white p-6 shadow-md mb-6">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 rounded-lg"
              />
              <div className="ml-4 flex-1">
                <div className="mt-5">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">{`$${item.price.toFixed(2)}`}</p>
                <button
                  type="button"
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => removeItem(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-16 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              {`$${cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}`}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Tax</p>
            <p className="text-gray-700">{`$${calculateTax().toFixed(2)}`}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">{`$${(
                cartItems.reduce((total, item) => total + item.price, 0) +
                calculateTax()
              ).toFixed(2)} USD`}</p>
              <p className="text-sm text-gray-700">Including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Checkout
          </button>
          <div className="text-center my-2">
            <p className="text-gray-700 mb-2">or</p>
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={continueShopping}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
