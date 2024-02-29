import logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';

export default function Projets() {

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
        <div className='flex flex-col items-center p-8 lg:p-16 lg:flex-row'>
                <div className='lg:w-1/2 flex justify-center fade-left'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='lg:w-1/3 fade-right'>
                    <h1 className='text-3xl uppercase text-center lg:text-start mt-8'>Agence de Développement Web et Marketing digital</h1>
                    <div className='my-8 flex justify-center items-center lg:block lg:mt-2'>
                        <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                    </div>
                    <p className={`text-center lg:text-start ${scrollY > 150 ? 'fade-in3' : 'slideOffRight2'}`}>
                        M&V Digital Developpement allie créativité et technicité pour créer, cultiver et accompagner les marques vers le succès. <br /><br />

                        Du graphisme au développement web & mobile, en passant par le community management et le packaging, nos différents domaines d&apos;expertise nous permettent de vous proposer un panel de services à 360° pour affiner votre stratégie.</p>
                    <div className='flex mt-16 justify-center lg:justify-start'>
                        <p className='text-[#022a60] border-[1px] py-2 px-2 border-[#022a60] rounded-xl shadow-xl hover:bg-[#022a60] hover:text-white hover:cursor-pointer'>En savoir plus</p>
                    </div>
                </div>
            </div>
        </>
    )
}