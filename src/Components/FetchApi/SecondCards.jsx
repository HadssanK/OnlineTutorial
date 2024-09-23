import React from 'react'
import './Fetch.css'
import thumb1 from '../../assets/thumb1.jpg';
import thumb2 from '../../assets/thumb2.jpg';

const SecondCards = () => {
      // Example product data
  const Data = [
    {
      imageUrl: thumb1,
      productName: 'How to make floor plan in AutoCAD ',
      rating: 4.5,
      price: '$20.99'
    },
    {
      imageUrl: thumb2,
      productName: 'How to put Columns, Grid Lines & Dimensions',
      rating: 3.5,
      price: '$15.99'
    },
    {
      imageUrl: thumb1,
      productName: 'How to put Levels & Space names in plan ',
      rating: 5.0,
      price: '$9.99'
    },
    {
      imageUrl: thumb2,
      productName: 'How to make Furniture Layout ',
      rating: 4.0,
      price: '$10.99'
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
    <span className='titles'>Object Properties & Function Keys</span>
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
  )
}

export default SecondCards