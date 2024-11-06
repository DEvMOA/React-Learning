export const productList = [
    {
      id: 1,
      name: "HP ELITEBOOK G10",
      brand: "HP",
      category: "Computers",
      price: 1779,
      description: "HP Newest HD Laptop, Windows 11, Intel Celeron Dual-Core Processor Up to 2.60GHz, 8GB RAM",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:22:54"
    },
    {
      id: 2,
      name: "Dell Inspiron 15 3000",
      brand: "Dell",
      category: "Computers",
      price: 1450,
      description: "Dell Inspiron 15, Intel Core i5, 8GB RAM, 512GB SSD, Windows 11",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:25:12"
    },
    {
      id: 3,
      name: "Apple MacBook Air M2",
      brand: "Apple",
      category: "Computers",
      price: 2199,
      description: "Apple MacBook Air with M2 chip, 8GB RAM, 256GB SSD, macOS Monterey",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:30:23"
    },
    {
      id: 4,
      name: "Lenovo ThinkPad X1 Carbon",
      brand: "Lenovo",
      category: "Computers",
      price: 1899,
      description: "Lenovo ThinkPad X1 Carbon, Intel i7, 16GB RAM, 1TB SSD, Windows 11 Pro",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:35:45"
    },
    {
      id: 5,
      name: "Asus ZenBook 14",
      brand: "Asus",
      category: "Computers",
      price: 1599,
      description: "Asus ZenBook 14, Intel i7, 16GB RAM, 512GB SSD, Windows 11 Home",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:40:12"
    },
    {
      id: 6,
      name: "Microsoft Surface Laptop 4",
      brand: "Microsoft",
      category: "Computers",
      price: 1699,
      description: "Microsoft Surface Laptop 4, Intel i5, 8GB RAM, 256GB SSD, Windows 11",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:45:30"
    },
    {
      id: 7,
      name: "Acer Aspire 5",
      brand: "Acer",
      category: "Computers",
      price: 1299,
      description: "Acer Aspire 5, Intel i5, 8GB RAM, 512GB SSD, Windows 11 Home",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:50:22"
    },
    {
      id: 8,
      name: "HP Pavilion x360",
      brand: "HP",
      category: "Computers",
      price: 1499,
      description: "HP Pavilion x360, Intel i5, 8GB RAM, 256GB SSD, Windows 11",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 07:55:48"
    },
    {
      id: 9,
      name: "Samsung Galaxy Book Pro",
      brand: "Samsung",
      category: "Computers",
      price: 1899,
      description: "Samsung Galaxy Book Pro, Intel i7, 16GB RAM, 512GB SSD, Windows 11",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 08:00:37"
    },
    {
      id: 10,
      name: "Google Pixelbook Go",
      brand: "Google",
      category: "Computers",
      price: 1299,
      description: "Google Pixelbook Go, Intel i5, 8GB RAM, 128GB SSD, Chrome OS",
      imageFileName: "https://www.tunisianet.com.tn/350879-large/pc-portable-hp-elitebook-830-g10-i7-1355u-8-go-512-go-ssd-windows-11-pro.jpg",
      createdAt: "2024-10-08 08:05:23"
    }
  ];
  
  export default function Home() {
    return (
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-semibold text-center mb-10">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((product, index) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export function ProductItem({ product }) {
    return (
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 text-center h-full flex flex-col">
        <img
          src={product.imageFileName}
          alt={product.name}
          className="rounded-lg mx-auto mb-4 object-cover h-48 w-full"
        />
        <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h4 className="text-xl font-bold text-blue-600 mb-3">${product.price}</h4>
        <p className="text-sm text-gray-700 mb-5">{product.description}</p>
        <div className="mt-auto">
          <a
            href="/"
            className="inline-block text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2 m-1 transition-colors"
          >
            View Details
          </a>
          <button
            type="button"
            className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-4 py-2 m-1 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  