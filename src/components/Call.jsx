import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Call = () => {
    const [roomId, setRoomId] = useState("")
    const navigate = useNavigate()
    
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      navigate(`/room/${roomId}`)
    }
   
return (
    
    <div className='w-1/2 mx-auto text-center'>
        <h1 className='text-3xl font-semibold mt-4'>Video Calling App</h1>
        <form onSubmit={handleFormSubmit}>
            <input className='border-2 rounded-md my-3 p-2' placeholder='Room ID' value={roomId} onChange={(e) => setRoomId(e.target.value)} required />
            <p className="text-gray-500 mb-3">You can share this id to your friend to join with you</p>
            <div>
            <button className='bg-blue-600 px-5 rounded-md py-1 text-white' type='submit'>
            Join Room
            </button>
            </div>
        </form>
    </div>
    
);
};

export default Call;