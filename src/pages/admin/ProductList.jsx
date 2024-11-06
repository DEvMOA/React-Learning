import React, { useState } from 'react';
import CreateProduct from './createProduct.jsx';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MSI Pulse",
      brand: "MSI",
      category: "Computers",
      price: 549,
      description: "MSI Pulse Gaming Laptop: Intel Core i7-12700H",
      createdAt: "2023-07-13T17:46:54.8900000"
    },
    {
      id: 2,
      name: "Acer Swift",
      brand: "Acer",
      category: "Computers",
      price: 929,
      description: "Acer Swift X Creator Laptop Full HD 100% sRGB",
      createdAt: "2023-07-13T17:46:54.8900000"
    }
  ]);

  const [createProduct, setCreateProduct] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const createProductFn = () => {
    setCreateProduct(!createProduct);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {createProduct ? (
        <CreateProduct addProduct={addProduct} />
      ) : (
        <button
          onClick={createProductFn}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Create Product
        </button>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-gray-600 uppercase text-sm leading-normal bg-gray-200">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Brand</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Created at</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{product.id}</td>
                <td className="py-3 px-6 text-left">{product.name}</td>
                <td className="py-3 px-6 text-left">{product.brand}</td>
                <td className="py-3 px-6 text-left">{product.category}</td>
                <td className="py-3 px-6 text-left">${product.price}</td>
                <td className="py-3 px-6 text-left">{new Date(product.createdAt).toLocaleDateString()}</td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-500 hover:text-blue-700 px-2">Edit</button>
                  <button className="text-red-500 hover:text-red-700 px-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
