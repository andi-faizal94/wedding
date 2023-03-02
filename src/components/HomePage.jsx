import React from 'react';
import { useNavigate } from 'react-router-dom';
import moby from '../assets/Marry Me.mp3';
const Sound = new Audio(moby);

const HomePage = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    Sound.play();
    navigate('/home');
  };

  return (
    <div className='flex flex-col justify-center items-center main bg-[#0a192f] min-h-screen w-full'>
      <h1 className='text-3xl text-center font-lato font-extralight text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 mb-4'>
        The Wedding Of
      </h1>
      <h1 className='text-3xl text-center font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-red-900 mb-4'>
        Frendi & Erfi
      </h1>
      <h1 className='text-md text-center font-lato font-normal text-transparent bg-clip-text bg-gradient-to-br from-cyan-100 to-blue-500'>
        Kepada Bapak/Ibu/Saudara/i
      </h1>
      <h1 className='text-md text-center font-lato font-normal text-transparent bg-clip-text bg-gradient-to-br from-cyan-100 to-blue-500 mb-4'>
        Mohon Maaf Bila Ada Kesalahan Penulisan Nama Atau Gelar
      </h1>
      <button onClick={handleButton} className='bg-white w-24 h-10 p-2 '>
        Bapak/Ibu
      </button>
    </div>
  );
};

export default HomePage;
