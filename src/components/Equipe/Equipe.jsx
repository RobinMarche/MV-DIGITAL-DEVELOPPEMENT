import logo from '../../assets/logo.png';
import thomas from '../../assets/thomasssss-removebg-preview.png';
import robin from '../../assets/xxxxx-removebg-preview.png';
import { useState, useEffect } from 'react';
import fb from '../../assets/fb.png';
import linkedin from '../../assets/linkedin.png';
import { Link } from 'react-router-dom';


export default function Equipe() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);


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
        <div className=''>


            <div className='flex flex-col justify-center items-center lg:flex-row lg:pt-24 lg:pb-12 xl:px-48'>
                <img src={logo} alt="logo" className='my-8 fade-left'/>
                <p className="text-center p-8 fade-right">Bienvenue chez M&V Digital Developpement ! Notre équipe dynamique de deux passionnés de développement web et de marketing digital combine créativité et expertise technique pour concevoir des solutions digitales percutantes. Avec nous, chaque projet devient une aventure unique, façonnée par notre engagement à exceller. Transformons ensemble vos idées en succès numériques !</p>
            </div>

            <div className='lg:flex justify-around items-center py-12 bg-[#188FA7]'>
                <div className={`flex justify-center bg-white flex-col items-center ${scrollY > 0 ? 'slideInRight' : 'slideOffRight1'} mx-6 lg:w-[40%] 2xl:w-[25%] border-[1px] border-[#188FA7]`}>
                    <img src={thomas} alt="thomas" className='lg:w-[100%]'/>
                    <div className='px-8 pb-12 bg-white'>
                        <p className='text-2xl my-2 text-start font-bold uppercase my-6 text-[#188FA7]'>Thomas Vannier</p>
                        <p className='text-lg my-2 text-start uppercase font-bold mb-8'>Développeur Back End</p>
                        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores excepturi inventore, blanditiis expedita tempora quia quisquam omnis mollitia quas, error ipsam iste! Dolorum ullam dolore minus rerum quibusdam, eius repudiandae, accusamus nam molestias quod eligendi rem eos aut error iure non aperiam voluptates nostrum veritatis dignissimos necessitatibus ipsum sit.</p>
                        <div className='flex mt-12 items-center'>
                            <Link to="https://www.facebook.com/thomas.vannier.75" target='_blank'>
                                <img src={fb} alt="fb" className='mr-4' />
                            </Link>

                            <Link to="https://www.linkedin.com/in/thomas-vannier-499145282/" target='_blank'>
                                <img src={linkedin} alt="linkedin" />
                            </Link>
                        </div>
                    </div>
                        
                </div>
                <div className={`flex justify-center bg-white flex-col items-center mt-8 lg:mt-0 ${scrollY > 10 ? 'slideInRight3' : 'slideOffRight3'} mx-6 lg:w-[40%] 2xl:w-[25%]  border-[1px] border-[#188FA7]`}>
                    <img src={robin} alt="robin" className='lg:w-[100%]'/>
                    <div className='px-8 pb-12 bg-white'>
                        <p className='text-2xl my-2 text-start font-bold uppercase my-6 text-[#188FA7]'>Robin Marche</p>
                        <p className='text-lg my-2 text-start uppercase font-bold mb-8'>Développeur Front End</p>
                        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores excepturi inventore, blanditiis expedita tempora quia quisquam omnis mollitia quas, error ipsam iste! Dolorum ullam dolore minus rerum quibusdam, eius repudiandae, accusamus nam molestias quod eligendi rem eos aut error iure non aperiam voluptates nostrum veritatis dignissimos necessitatibus ipsum sit.</p>
                        <div className='flex mt-12 items-center'>
                            <Link to="https://www.facebook.com/reed.sensi" target='_blank'>
                                <img src={fb} alt="fb" className='mr-4' />
                            </Link>
                            
                            <Link to="https://www.linkedin.com/in/robin-marche/" target='_blank'>
                                <img src={linkedin} alt="linkedin" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id='equipe_contact' className='flex flex-col text-white justify-center items-center py-12 lg:py-36'>
                <h1 className='uppercase text-2xl lg:text-4xl text-center font-bold'>Nous mettons notre expertise à votre service</h1>
                <p className='px-12 text-center py-12 lg:text-2xl'>Transformez vos idées en une outils de communication percutants grâce à notre savoir-faire</p>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <Link to="/contact">
                        <button className="btn mb-12 rounded-full px-16 bg-red-400 border-red-400 text-white lg:mr-4">Contactez-nous</button>
                    </Link>

                    <Link to="/services">
                        <button className="btn mb-12 rounded-full px-16 btn-outline text-white glass">En savoir plus</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
    
}