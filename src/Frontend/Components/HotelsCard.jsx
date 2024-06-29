// HotelCard.js
import React from 'react';
import Hotels from '../../backend/Hotels/Hotel';


const HotelCard = ({title, secondaryInfo, provider, priceForDisplay, bubbleRating, priceDetails, priceSummary, cardPhotos }) => {
  
  return (
    <div className="hotel-card">
      <h2>{title}</h2>
      <p>{secondaryInfo}</p>
      <p>Provider: {provider}</p>
      <p>Price: {priceForDisplay} per night</p>
      <p>Rating: {bubbleRating.rating} ({bubbleRating.count} reviews)</p>
      <p>{priceDetails}</p>
      <p>{priceSummary}</p>
      <img src={cardPhotos[0].sizes.urlTemplate.replace('{width}', '400').replace('{height}', '300')} alt="Hotel" />
    </div>
  );
}

export default HotelCard;

