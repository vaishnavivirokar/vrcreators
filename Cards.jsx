import React from 'react';

const products = [
  { id: 1, category: 'Free Delivery', title: 'Cartoon Paint', price: '₹49/-', image: '/public/assets/img1.jpg' },
  { id: 2, category: 'Free Delivery', title: 'Krishna Painting', price: '₹49/-', image: '/public/pro1.jpg' },
  { id: 3, category: 'Free Delivery', title: 'Photo Painting', price: '₹59/-', image: '/public/pro4.jpg' },
  { id: 4, category: 'Free Delivery', title: 'Object Painting', price: '₹49/-', image: '/public/pro5.jpeg' },
  { id: 5, category: 'Free Delivery', title: 'Name Painting', price: '₹49/-', image: '/public/pro6.jpg' },
  { id: 6, category: 'Free Delivery', title: 'Nature Painting', price: '₹49/-', image: '/public/pro7.jpg' },
  { id: 7, category: 'Free Delivery', title: 'Nature Paiting', price: '₹49/-', image: '/public/pro8.jpg' },
  { id: 8, category: 'Free Delivery', title: 'God Painting', price: '₹49/-', image: '/public/pro3.jpg' },
];

const Cards = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="#" className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
