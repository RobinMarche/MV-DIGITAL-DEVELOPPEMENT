import logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import asphalt from '../../assets/asphalt-eater.png';
import fromagerie from '../../assets/fromagerie-ema.png';
import logiworks from '../../assets/logiworks.png';
import coach from '../../assets/coachsportif.png';
import { Link } from 'react-router-dom';

export default function ProjetsPage() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY || window.pageYOffset);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);


    return (
        <>
        <div className='flex flex-col items-center p-8 lg:p-16 lg:flex-row bg-[#188FA7]'>
                <div className='lg:w-1/2 flex justify-center fade-left'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='lg:w-1/3 fade-right text-white'>
                    <h1 className='text-5xl text-center lg:text-start mt-8' id='title2'>Découvrez le fruit de notre créativité</h1>
                    <div className='my-8 flex justify-center items-center lg:block lg:mt-2'>
                        <div className='bg-white w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                    </div>
                    <p className={`text-center lg:text-start fade-in1`}>
                    Sur cette page, plongez au cœur de notre expertise créative en explorant nos dernières créations. Chaque projet est le fruit d&apos;une collaboration passionnée et d&apos;un savoir-faire dédié à faire émerger des concepts uniques. Parcourez ces pages pour découvrir comment nous transformons des idées en expériences mémorables, en mettant en avant notre engagement envers l&apos;originalité et l&apos;impact. Que ce soit dans le design, la stratégie de communication ou le marketing, nos réalisations incarnent notre vision dynamique et notre volonté constante d&apos;innover.
                    </p>
                    <div className='flex mt-12 justify-center lg:justify-start'>
                        <Link to="/services">
                            <button className="btn mb-6 rounded-full px-16 btn-outline text-white">En savoir plus</button>
                        </Link>
                    </div>
                </div>

            </div>
                <div className="px-4 flex flex-col items-center justify-center m-4">
                    <div>
                        <h1 className={`text-5xl text-center fade-in mt-12`} id='title2'>Nos dernieres créations web</h1>
                        <div className={`my-8 flex justify-center items-center lg:block lg:mt-2`}>
                            <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                        </div>
                    </div>
                </div>

            <div className='lg:flex flex-wrap'>
                <div className='flex flex-col justify-center items-center mx-6 rounded-xl p-4 lg:w-[45vw] lg:mb-24'>
                    <img src={asphalt} alt="asphalt" className='rounded-tr-xl rounded-tl-xl border-t-[16px] border-l-[16px] border-r-[16px] xl:border-t-[32px] xl:border-l-[32px] xl:border-r-[32px] border-[#f3ebe0]' />
                    <p className='my-6 text-xl font-bold'>Asphalt Eater</p>
                    <Link to="https://www.asphalt-eater.fr" target='_blank'>
                        <p className='text-blue-500 hover:cursor-pointer text-lg'>Visiter</p>
                    </Link>
                </div>

                <div className='flex flex-col justify-center items-center mx-6 rounded-xl p-4 lg:w-[45vw] lg:mb-24'>
                    <img src={fromagerie} alt="asphalt" className='rounded-tr-xl rounded-tl-xl border-t-[16px] border-l-[16px] border-r-[16px] xl:border-t-[32px] xl:border-l-[32px] xl:border-r-[32px] border-green-800' />
                    <p className='my-6 text-xl font-bold'>La Fromagerie d&apos;Ema</p>
                    <Link to="https://www.lafromageriedema.fr" target='_blank'>
                        <p className='text-blue-500 hover:cursor-pointer text-lg'>Visiter</p>
                    </Link>
                </div>

                <div className='flex flex-col justify-center items-center mx-6 rounded-xl p-4 lg:w-[45vw]'>
                    <img src={logiworks} alt="asphalt" className='rounded-tr-xl rounded-tl-xl border-t-[16px] border-l-[16px] border-r-[16px] xl:border-t-[32px] xl:border-l-[32px] xl:border-r-[32px] border-[#041e42]' />
                    <p className='my-6 text-xl font-bold'>Logiworks</p>
                    <Link to="https://www.logiworks.fr" target='_blank'>
                        <p className='text-blue-500 hover:cursor-pointer text-lg'>Visiter</p>
                    </Link>
                </div>

                <div className='flex flex-col justify-center items-center mx-6 rounded-xl p-4 lg:w-[45vw]'>
                    <img src={coach} alt="asphalt" className='rounded-tr-xl rounded-tl-xl border-t-[16px] border-l-[16px] border-r-[16px] xl:border-t-[32px] xl:border-l-[32px] xl:border-r-[32px] border-[#94b9c1]' />
                    <p className='my-6 text-xl font-bold'>Franck - Coach Sportif</p>
                    <Link to="https://franck-marche-coach.vercel.app/" target='_blank'>
                        <p className='text-blue-500 hover:cursor-pointer text-lg'>Visiter</p>
                    </Link>
                </div>
            </div>
        </>
    )
}