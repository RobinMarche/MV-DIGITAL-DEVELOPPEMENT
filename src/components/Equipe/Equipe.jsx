import logo from '../../assets/logoMV.svg';
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

    return (
        <>
        <div className=''>


            <div className='flex flex-col justify-center items-center lg:flex-row lg:pt-24 lg:pb-12 xl:px-48' id='page2'>
                <img src={logo} alt="logo" className='my-8 fade-left w-1/4'/>
                <p className="text-center lg:text-start p-8 fade-right">Bienvenue chez M&V Digital Developpement ! Notre équipe dynamique de deux passionnés de développement web et de marketing digital combine créativité et expertise technique pour concevoir des solutions digitales percutantes. Avec nous, chaque projet devient une aventure unique, façonnée par notre engagement à exceller. Transformons ensemble vos idées en succès numériques !</p>
            </div>

            {/* <div className='lg:flex justify-around items-center py-12 bg-[#188FA7]'>
                <div className={`flex justify-center bg-white flex-col items-center mx-6 lg:w-[40%] 2xl:w-[25%] border-[1px] border-[#188FA7]`}>
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
                <div className={`flex justify-center bg-white flex-col items-center mt-8 lg:mt-0 mx-6 lg:w-[40%] 2xl:w-[25%]  border-[1px] border-[#188FA7]`}>
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
            </div> */}

            <div className='bg-red-200 mx-4 p-4 xl:mx-36 2xl:mx-48 xl:p-12 xl:my-12 rounded-2xl mb-12' id='bg_equipe'>
                <div className='mt-12 mb-20'>
                    <p className='text-yellow-500 p-4 text-xl'><Link to="/" className='text-white'>Accueil</Link> {">"} <span>Equipe</span></p>
                    <h1 className='p-4 text-5xl xl:text-8xl font-bold text-white' id=''>Découvrez Notre <br />Équipe d&apos;Experts </h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-around'>
                    <div className='mx-8 lg:mx-0 flex justify-center flex-col items-center'>
                        <div>
                            <img src={thomas} alt="thomas" className='bg-white rounded-xl'/>
                        </div>
                        <div className='flex flex-col justify-center items-center my-12'>
                            <p className='text-white text-2xl font-bold mb-4'>Thomas Vannier</p>
                            <p className='text-yellow-500 font-bold'>Développeur Back End</p>
                            <div className='flex mt-6 items-center justify-center'>
                                <Link to="https://www.facebook.com/thomas.vannier.75" target='_blank' className='bg-white rounded-full p-2 mr-4'>
                                    <img src={fb} alt="fb" />
                                </Link>

                                <Link to="https://www.linkedin.com/in/thomas-vannier-499145282/" target='_blank' className='bg-white rounded-full p-2'>
                                    <img src={linkedin} alt="linkedin"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-8 lg:mx-0 flex justify-center flex-col items-center'>
                        <div>
                            <img src={robin} alt="robin" className='bg-white rounded-xl'/>
                        </div>
                        <div className='flex flex-col justify-center items-center my-12'>
                            <p className='text-white text-2xl font-bold mb-4'>Robin Marche</p>
                            <p className='text-yellow-500 font-bold'>Développeur Front End</p>
                            <div className='flex mt-6 items-center justify-center'>
                            <Link to="https://www.facebook.com/reed.sensi" target='_blank' className='bg-white rounded-full p-2 mr-4'>
                                <img src={fb} alt="fb"/>
                            </Link>
                            
                            <Link to="https://www.linkedin.com/in/robin-marche/" target='_blank' className='bg-white rounded-full p-2'>
                                <img src={linkedin} alt="linkedin" />
                            </Link>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div className='mx-6 my-12 lg:my-24 xl:mx-48 flex flex-col lg:flex-row lg:mx-24'>
                <div className='flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='font-bold text-xl xl:text-2xl mb-2 text-[#188fa7]' id='font-menu'>Qualité</h1>
                    <p className='text-center lg:text-start'>Nous garantissons une qualité de travail inégalée, propulsant ainsi chaque projet vers le succès digital.</p>
                </div>
                <div className='flex flex-col justify-center items-center lg:items-start my-6 lg:my-0 lg:mx-24'>
                    <h1 className='font-bold text-xl xl:text-2xl mb-2 text-[#188fa7]' id='font-menu'>Compétences</h1>
                    <p className='text-center lg:text-start'>Notre agence se distingue par la qualité de son travail, reflétant nos compétences et notre engagement envers l&apos;excellence digitale.</p>
                </div>
                <div className='flex flex-col justify-center items-center mb-6 lg:mb-0 lg:items-start'>
                    <h1 className='font-bold text-xl xl:text-2xl mb-2 text-[#188fa7]' id='font-menu'>Passion</h1>
                    <p className='text-center lg:text-start'>Nourrie par une passion inébranlable pour l&apos;innovation digitale et l&apos;excellence opérationnelle.</p>
                </div>
            </div>

            <div id='equipe_contact' className='flex flex-col text-white justify-center items-center py-12 lg:py-36 mx-8 md:mx-16 lg:mx-32 rounded-xl mb-16'>
                <h1 className='uppercase text-2xl lg:text-4xl text-center font-bold mx-4 text-[#041e42] italic'>Nous mettons notre expertise à votre service</h1>
                <p className='px-12 text-center py-12 lg:text-2xl text-[#041e42]'>Transformez vos idées en un outil de communication percutant grâce à notre savoir-faire</p>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <Link to="/contact">
                        <button className="btn mb-12 rounded-full px-16 bg-red-400 border-red-400 text-white lg:mr-4">Contactez-nous</button>
                    </Link>

                    <Link to="/services">
                        <button className="btn mb-12 rounded-full px-16 btn-outline text-white border-none bg-[#188fa7]">En savoir plus</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
    
}