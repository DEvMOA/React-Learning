import { useState } from "react";

const productList = [
  {
    productName: "SAMSUNG GALAXY 100",
    brand: "SAMSUNG",
    category: "PHONES",
    price: "899",
    quantity: 6,
  },
  {
    productName: "SAMSUNG GALAXY 200",
    brand: "SAMSUNG",
    category: "PHONES",
    price: "699",
    quantity: 4,
  },
  {
    productName: "SAMSUNG GALAXY 300",
    brand: "SAMSUNG",
    category: "PHONES",
    price: "1999",
    quantity: 8,
  },
];

export function ShoppingCart() {
  const productItems = productList.map((product, index) => {
    return <ProductItem key={index} product={product} />;
  });

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Shopping Cart</h2>
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productItems}
      </div>
    </div>
  );
}

export function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(Number(product.quantity));

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = quantity * Number(product.price);

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 text-center flex flex-col h-full">
      <h4 className="text-lg font-semibold text-gray-700 mb-1">{product.productName}</h4>
      <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
      <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
      <p className="text-lg font-semibold text-blue-600 mb-3">Unit Price: ${product.price}</p>
      <div className="flex items-center justify-center space-x-3 mb-4">
        <button
          onClick={decrease}
          className="w-8 h-8 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition"
        >
          -
        </button>
        <p className="text-lg font-semibold">{quantity}</p>
        <button
          onClick={increase}
          className="w-8 h-8 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
      <div className="text-lg font-semibold text-gray-700">
        Total Price: <span className="text-blue-600">${totalPrice}</span>
      </div>
    </div>
  );
}
