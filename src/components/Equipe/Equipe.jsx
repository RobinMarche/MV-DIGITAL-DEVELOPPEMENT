import logo from '../../assets/logo.png';
import thomas from '../../assets/thomasssss-removebg-preview.png';
import robin from '../../assets/xxxxx-removebg-preview.png';
import { useState, useEffect } from 'react';


export default function Equipe() {

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

    return (
        <>
            <div className='flex flex-col justify-center items-center lg:flex-row lg:mt-24 lg:mb-12 xl:mx-48'>
                <img src={logo} alt="logo" className='my-8 fade-left'/>
                <p className="text-center p-8 fade-right">Bienvenue chez M&V Digital Developpement ! Notre équipe dynamique de deux passionnés de développement web et de marketing digital combine créativité et expertise technique pour concevoir des solutions digitales percutantes. Avec nous, chaque projet devient une aventure unique, façonnée par notre engagement à exceller. Transformons ensemble vos idées en succès numériques !</p>
            </div>

            <div className='lg:flex justify-start items-start'>
                <div className={`flex justify-center flex-col items-center ${scrollY > 10 ? 'slideInRight' : 'slideOffRight1'}`}>
                    <img src={thomas} alt="thomas" className='w-1/2 xl:h-[50vh] lg:h-[40vh] rounded-full'/>
                    <p className='text-xl my-12'>Thomas Vannier</p>
                    <p className='text-center px-4 lg:px-24'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores excepturi inventore, blanditiis expedita tempora quia quisquam omnis mollitia quas, error ipsam iste! Dolorum ullam dolore minus rerum quibusdam, eius repudiandae, accusamus nam molestias quod eligendi rem eos aut error iure non aperiam voluptates nostrum veritatis dignissimos necessitatibus ipsum sit.</p>
                </div>
                <div className={`flex justify-center flex-col items-center mt-8 lg:mt-0 ${scrollY > 10 ? 'slideInRight3' : 'slideOffRight3'}`}>
                    <img src={robin} alt="thomas" className='w-1/2 xl:h-[50vh] lg:h-[40vh] rounded-full'/>
                    <p className='text-xl my-12'>Robin Marche</p>
                    <p className='text-center px-4 lg:px-24'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores excepturi inventore, blanditiis expedita tempora quia quisquam omnis mollitia quas, error ipsam iste! Dolorum ullam dolore minus rerum quibusdam, eius repudiandae, accusamus nam molestias quod eligendi rem eos aut error iure non aperiam voluptates nostrum veritatis dignissimos necessitatibus ipsum sit.</p>
                </div>
            </div>
        </>
    )
    
}