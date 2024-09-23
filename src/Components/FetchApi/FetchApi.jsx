import React from 'react';
import './Fetch.css'; 
import thumb1 from '../../assets/thumb1.jpg';
import thumb2 from '../../assets/thumb2.jpg';

const FetchApi = () => {
  // Example product data
  const Data = [
    {
      imageUrl: thumb1,
      productName: 'AutoCAD Presentation & Interface',
      rating: 4.5,
      price: '$29.99'
    },
    {
      imageUrl: thumb2,
      productName: 'Drawings Tools',
      rating: 3.5,
      price: '$19.99'
    },
    {
      imageUrl: thumb1,
      productName: ' Modification Tools',
      rating: 5.0,
      price: '$39.99'
    },
    {
      imageUrl: thumb2,
      productName: 'How to make right side elevation in autocad',
      rating: 4.0,
      price: '$24.99'
    }
    // Add more products as needed
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= Math.floor(rating) ? 'filled' : ''}`}>★</span>
      );
    }
    return stars;
  };

  return (
    <>
      <span className='titles'>beginner course in Pashto  Dimension In Depth</span>
      <div className="main-container">
        {Data.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.productName} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.productName}</h3>
              <div className="product-rating">
                {renderStars(product.rating)}
                <span className="rating-text">({product.rating})</span>
              </div>
              <p className="product-price">{product.price}</p>
              <button className="buy-now-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default FetchApi;
