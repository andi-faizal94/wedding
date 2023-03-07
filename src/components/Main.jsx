import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import moby from '../assets/Marry Me.mp3';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image from '../assets/image.jpg';
const Sound = new Audio(moby);

const Main = () => {
  useEffect(() => {
    playSound();
  }, []);

  async function playSound() {
    try {
      await Sound.play();
    } catch (error) {
      stopSound();
    }
  }

  function stopSound() {
    Sound.pause();
    Sound.currentTime = 0;
  }
  return (
    <div className='bg-white min-h-screen overflow-auto'>
      <div className='flex justify-center items-center h-screen w-screen bg-contain bg-repeat bg-[url("../../../image.jpg")]'>
        <motion.div
          animate={{
            scale: [1, 2, 2, 2, 1],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='lg:bg-transparent px-2 py-3 lg:p-20'
        >
          <h1 className='text-3xl lg:text-8xl text-center font-lato font-extrabold text-white lg:text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4'>
            Pernikahan
          </h1>
          <h1 className='text-2xl lg:text-6xl text-center font-lato font-extrabold text-white lg:text-transparent bg-clip-text bg-gradient-to-br from-pink-100 to-red-900 mb-4'>
            Nurrohman & Iin Subekti
          </h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
              Iin Subekti
            </h1>
            <h1 className='text-cyan-600 text-center'>
              Putri Dari Bapak Mistar (Penjol)
            </h1>
            <h1 className='text-cyan-600 text-center'>&</h1>
            <h1 className='text-cyan-600 text-center'>
              Ibu Sudi Rahayu (Yayuk)
            </h1>
          </div>
          <div className='text-2xl font-bold flex items-center text-cyan-600 '>
            &
          </div>
          <div className='w-4/12'>
            <h1 className="text-cyan-600 text-center text-xl font-['Nunito'] pb-2">
              Nurrohman
            </h1>
            <h1 className='text-cyan-600 text-center'>
              Putra Dari Bapak Ngamidah
            </h1>
            <h1 className='text-cyan-600 text-center'>&</h1>
            <h1 className='text-cyan-600 text-center'>Ibu Sartini </h1>
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
            <h1 className='text-cyan-600 text-center'>Minggu, 12 Maret 2023</h1>
            <h1 className='text-cyan-600 text-center'>Pukul 09:00</h1>
            <h1 className='text-pink-400 font-semibold text-center'>
              Di Kediaman Mempelai Wanita
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>
              Panjangsari Baru
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>Parakan</h1>
          </div>
          <div className='w-4/12'>
            <h1 className='text-cyan-600 text-xl font-bold text-center'>
              Resepsi
            </h1>
            <h1 className='text-cyan-600 text-center'>Jum’at, 17 Maret 2023</h1>
            <h1 className='text-cyan-600 text-center'>10.00 s/d Selesai</h1>
            <h1 className='text-pink-400 font-semibold text-center'>
              Balai Pertemuan Panjangsari Baru Rw 10
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>
              Panjangsari Baru
            </h1>
            <h1 className='text-cyan-600 font-bold text-center'>Parakan</h1>
          </div>
        </div>

        <div className='text-center  mt-4 mb-4'>
          <h1 className='text-cyan-600'>
            Atas Doa Dan Restu Dari Bapak/Ibu/Saudara/i
          </h1>
          <h1 className='text-cyan-600'>Kami Ucapakan Banyak Terima Kasih</h1>
          <h1 className='text-cyan-600'>Kami Yang Berbahagia</h1>
          <h1 className='text-cyan-600'>Nurrohman & Iin Subekti</h1>
          <h1 className='text-green-600 font-bold text-xl m-4'>
            Turut Mengundang
          </h1>
          <h1 className='text-cyan-600'>Heni Setyowati & Gatot</h1>
          <h1 className='text-cyan-600'>
            Budi Utami (uut) & Imbuh Erdiyanto (wowok)
          </h1>
          <h1 className='text-cyan-600'>Dwi Lestari & Wali</h1>
          <h1 className='text-cyan-600'>Pak Naslim & Ibu Suprih     </h1>
        </div>
        <div className='text-center mb-4'>
          <h1 className='text-green-600 font-bold text-xl'>Galeri</h1>
        </div>
        <div className='flex flex-wrap md:flex-row justify-between items-center space-y-2 md:space-y-0 space-x-0 md:space-x-1 p-4 lg:p-0'>
          <figure className='w-12/12 lg:w-2/12'>
            <img
              className=' object-cover rounded-sm'
              src={image1}
              alt='images'
            />
          </figure>
          <figure className='w-6/12 h-auto lg:w-2/12'>
            <img
              className=' object-cover rounded-sm'
              src={image2}
              alt='images'
            />
          </figure>
          <figure className='w-6/12 h-auto lg:w-2/12'>
            <img
              className=' object-cover rounded-sm'
              src={image3}
              alt='images'
            />
          </figure>
          <figure className='w-12/12 lg:w-2/12'>
            <img
              className=' object-cover rounded-sm'
              src={image}
              alt='images'
            />
          </figure>
        </div>
      </motion.div>
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
    </div>
  );
};

export default Main;
