
const Card = ({ title, image, description }) => {
  return (
    <div className='w-full min-h-screen bg-mainBgColor text-white' > 
    <div className=" w-96 rounded p-10 pb-0">
      <div className='text-3xl'>Best time to visit : {} </div>
      <div className='text-3xl pb-5'>Nearest Tourist Spot</div>
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
    
    <div className=" w-96 rounded p-10">
      <div className='text-3xl pb-5'>Nearest Restaurant</div>
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
    
    </div>
  );
};

export default Card;
