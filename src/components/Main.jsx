import React from 'react';
import { useState, useEffect } from 'react';
import moby from '../assets/Marry Me.mp3';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';

const Sound = new Audio(moby);

const Main = () => {
  useEffect(() => {
    Sound.load();
  }, []);

  const playSound = () => {
    Sound.play();
  };

  const stopSound = () => {
    Sound.pause();
    Sound.currentTime = 0;
  };
  return (
    <div className='relative bg-white'>
      <h1 className='pt-10 pb-2 text-3xl text-center font-lato font-extrabold text-black bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4'>
        Pernikahan
      </h1>
      <h1 className='text-3xl text-center font-lato font-extrabold text-black bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4'>
        Frendi & Erfi
      </h1>
      <div className='flex flex-col justify-center items-center p-4'>
        <img
          className='w-1/4 h-1/4 object-cover rounded-sm'
          src={image1}
          alt='images'
        />
      </div>
      <div>
        <div className='text-center'>
          <h1 className='text-green-600 text-xl m-2'>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم.
          </h1>
          <h2 className='text-cyan-600 font-bold'>
            Assalamualaikum warahmatullahi wabarakatuh
          </h2>
          <h1 className='text-cyan-600'>
            Dengan memohon Ridho dan rahmat Allah SWT, kami bermaksud
            menyelenggarakan Syukuran Pernikahan putra putri kami
          </h1>
        </div>
        <div className='flex flex-row-reverse justify-between p-4'>
          <div className='w-4/12'>
            <h1 className="text-cyan-600 text-center text-xl font-['Nunito'] pt-2 md:pt-0 pb-7 md:pb-2">
              Erfi Zuliani
            </h1>
            <h1 className='text-cyan-600 text-center'>
              Putri Dari Bapak Hudi Utoyo
            </h1>
            <h1 className='text-cyan-600 text-center'>&</h1>
            <h1 className='text-cyan-600 text-center'>Ibu Jumiyati (Almh)</h1>
          </div>
          <div className='text-2xl font-bold flex items-center text-cyan-600 '>
            &
          </div>
          <div className='w-4/12'>
            <h1 className="text-cyan-600 text-center text-xl font-['Nunito'] pb-2">
              Frendi Agus Setiawan
            </h1>
            <h1 className='text-cyan-600 text-center'>
              Putra Dari Bapak H.Supandar
            </h1>
            <h1 className='text-cyan-600 text-center'>&</h1>
            <h1 className='text-cyan-600 text-center'>Ibu Hj.Walminah</h1>
          </div>
        </div>

        <div className='text-center text-xl m-4'>
          <h1 className='text-green-600 font-bold text-xl'>Detail Acara</h1>
        </div>
        <div className='flex sm:flex justify-between p-4'>
          <div className='w-4/12'>
            <h1 className='text-cyan-600 text-xl font-bold text-center'>
              Akad
            </h1>
            <h1 className='text-cyan-600 text-center'>Minggu, 29 Mei 2022</h1>
            <h1 className='text-cyan-600 text-center'>Pukul 09:00</h1>
            <h1 className='text-pink-400 font-semibold text-center'>
              Di Kediaman Mempelai Wanita
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>
              Jln Perintis Kemerdekaan No 10
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>
              Joho Temanggung
            </h1>
          </div>
          <div className='w-4/12'>
            <h1 className='text-cyan-600 text-xl font-bold text-center'>
              Resepsi
            </h1>
            <h1 className='text-cyan-600 text-center'>Minggu, 5 Juni 2022</h1>
            <h1 className='text-cyan-600 text-center'>Pukul 10:00</h1>
            <h1 className='text-pink-400 font-semibold text-center mt-2 mb-1 md:mt-0 md:mb-0'>
              Di Kediaman Mempelai Pria
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>
              Sempon RT/RW 03/03 Sriwungu
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>
              Tlogomulyo Temanggung
            </h1>
          </div>
        </div>
        <div>
          <h1 className='text-green-600 font-bold text-xl text-center mb-4'>
            Hiburan
          </h1>
          <h1 className='text-cyan-600 text-center'>Senin, 06 Juni 2022</h1>
          <h1 className='text-cyan-600 text-center'>Kuda Lumping</h1>
        </div>

        <div className='text-center  mt-4 mb-4'>
          <h1 className='text-cyan-600'>
            Atas Doa Dan Restu Dari Bapak/Ibu/Saudara/i
          </h1>
          <h1 className='text-cyan-600'>Kami Ucapakan Banyak Terima Kasih</h1>
          <h1 className='text-cyan-600'>Kami Yang Berbahagia</h1>
          <h1 className='text-cyan-600'>Erfi & Frendi</h1>
          <h1 className='text-green-600 font-bold text-xl m-4'>
            Turut Mengundang
          </h1>
          <h1 className='text-cyan-600'>Bp. Tukimin</h1>
          <h1 className='text-cyan-600'>Bp. Yamidi</h1>
          <h1 className='text-cyan-600'>Ibu Sri Wahyuni</h1>
        </div>
        <div className='text-center mb-4'>
          <h1 className='text-green-600 font-bold text-xl'>Galeri</h1>
        </div>
        <div className='flex flex-wrap flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 space-x-0 md:space-x-1 p-0'>
          <img
            className='w-2/12 h-1/2  md:w-2/12 object-cover rounded-sm'
            src={image1}
            alt='images'
          />
          <img
            className='w-2/12 h-1/2 md:w-2/12 object-cover rounded-sm'
            src={image2}
            alt='images'
          />
          <img
            className='w-2/12 h-1/2  md:w-2/12 object-cover rounded-sm'
            src={image3}
            alt='images'
          />
          {/* <img
            className='w-2/12 h-1/2  md:w-2/12 object-cover rounded-sm'
            src={image4}
            alt='images'
          /> */}
          {/* <img
            className='w-2/12 h-1/2  md:w-2/12 object-cover rounded-sm'
            src={image4}
            alt='images'
          /> */}
        </div>
      </div>
      <div className='flex items-center flex-col lg:flex-row fixed top-1/2 left-2'>
        <span
          onClick={playSound}
          className='material-symbols-rounded py-2 text-5xl text-blue-500 rounded-full'
        >
          play_circle
        </span>
        <span
          onClick={stopSound}
          className='material-symbols-rounded text-5xl py-2 text-blue-500 rounded-full'
        >
          stop_circle
        </span>
      </div>
      <footer className='text-white font-lato text-center p-4 cursor-pointer'>
        <a
          className='text-md font-lato font-lato font-extrabold text-black bg-clip-text bg-gradient-to-br from-pink-400 to-red-700'
          href='https://andi-3ujiqdvp9-andi-faizal94.vercel.app/'
        >
          Made by Andi
        </a>
      </footer>
    </div>
  );
};

export default Main;
