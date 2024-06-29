// HotelCard.js
import React from 'react';
import Hotels from '../../backend/Hotels/Hotel';


const HotelCard = ({ title="Test", secondaryInfo="Test", provider="Test", priceForDisplay="Test", bubbleRating="Test", priceDetails="Test", priceSummary="Test", cardPhotos="Test" }) => {

  return (
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={"https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719532800&semt=sph"} alt="Card image" />
        <div className="absolute top-0 right-0 bg-white bg-opacity-75 p-2 rounded-bl-lg">
          {bubbleRating}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{secondaryInfo}</p>
        <p className="text-gray-600 text-sm mt-2">{provider}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="text-lg font-semibold text-gray-900">{priceForDisplay}</div>
        <p className="text-gray-600 text-sm">{priceDetails}</p>
      </div>
      <div className="px-6 py-4 border-t">
        <p className="text-gray-700">{priceSummary}</p>
      </div>
    </div>
    </>
  );
}

export default HotelCard;

