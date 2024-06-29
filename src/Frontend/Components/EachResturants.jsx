
export default function EachResturants() {
  return (
    <div className='bg-mainBgColor text-white w-full min-h-screen p-10 flex gap-10'>
      <div className="left">
        <div className='text-3xl'>Restaurant Name</div>
        <img src="" alt=""/>
      </div>

      <div className="right w-auto bg-gray-800 p-5 max-h-96"> 
        <div>Rate : {}</div>
        <div>Open : {}</div>
        <div>Menu : {}</div>
        <div>Direction :{}</div>
      </div>
    </div>
  )
}

