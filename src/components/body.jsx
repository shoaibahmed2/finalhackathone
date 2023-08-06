import React from "react";
import ProductCard from "./productcard";  
import Header from "./header";
import Footer from "./footer";

const Body = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md w-[1000px]">
            <h2 className="text-3xl font-semibold mb-4 text-center bg-white py-2 rounded-lg text-black">
              Welcome to Layallpur Fashions
            </h2>
            <p className="text-gray-700 text-center">
              Discover the latest trends in fashion for women, men, and kids.
              Browse our wide selection of clothing, accessories, and more.
            </p>
          </div>
          <br />
          <div className="p-6 bg-white-500 rounded-lg shadow-md flex flex-col justify-between w-[1000px]">
            <h2 className="text-3xl font-semibold mb-4 text-center text-white">
              Featured Products
            </h2>
            <div className="grid grid-cols-2 gap-4 ">
              <ProductCard
                bgColor="bg-white"
                imageUrl="https://media.istockphoto.com/id/1404611452/photo/stylish-brunette-asian-girl-wearing-black-t-shirt-and-sunglasses-posing-against-street-urban.webp?b=1&s=170667a&w=0&k=20&c=451nuGBFUzdMCxcSToko5nZoFfkHypRMe7QJsxBvnko="
                title="Featured Product 1"
                price="$49.99"
              />
              <ProductCard
                bgColor="bg-white"
                imageUrl="https://content-management-files.canva.com/323fa962-3a70-4ef7-85ae-ab2174242964/ogimage_t-shirts.jpg"
                title="Featured Product 2"
                price="$39.99"
              />
              <ProductCard
                bgColor="bg-white"
                imageUrl="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&fit=max&w=930"
                title="Featured Product 2"
                price="$39.99"
              />
              <ProductCard
                bgColor="bg-white"
                imageUrl="https://st3.depositphotos.com/3141125/12807/i/450/depositphotos_128077708-stock-photo-fashion-holes-in-jeans.jpg"
                title="Featured Product 2"
                price="$39.99"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              bgColor="bg-white"
              imageUrl="    https://club76.pk/cdn/shop/products/vintage-slim-fit-men-jeans.jpg?v=1661494367&width=1946"
              title="New Arrival 1"
              price="$59.99"
            />
            <ProductCard
              bgColor="bg-white"
              imageUrl="https://s3.eu-west-2.amazonaws.com/files.sewport.com/blog/the-remarkable-history-of-denim-how-it-became-an-icon-in-fashion/history-of-denim.jpeg"
              title="New Arrival 2"
              price="$69.99"
            />
            <ProductCard
              bgColor="bg-white"
              imageUrl="https://assets.ajio.com/cms/AJIO/MOBILE/17012023-M-BudaJeans-discoverwomenscollection-set1.jpeg"
              title="New Arrival 3"
              price="$49.99"
            />
            <ProductCard
              bgColor="bg-white"
              imageUrl="https://theadultman.com/wp-content/uploads/2019/12/model-on-train-tracks-wearing-navy-and-black-outfit-with-dark-blue-jeans.jpg"
              title="New Arrival 3"
              price="$49.99"
            />
            <ProductCard
              bgColor="bg-white"
              imageUrl="https://theadultman.com/wp-content/uploads/2019/12/model-on-train-tracks-wearing-navy-and-black-outfit-with-dark-blue-jeans.jpg"
              title="New Arrival 3"
              price="$49.99"
            />
            <ProductCard
              bgColor="bg-white"
              imageUrl="https://theadultman.com/wp-content/uploads/2019/12/model-on-train-tracks-wearing-navy-and-black-outfit-with-dark-blue-jeans.jpg"
              title="New Arrival 3"
              price="$49.99"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
