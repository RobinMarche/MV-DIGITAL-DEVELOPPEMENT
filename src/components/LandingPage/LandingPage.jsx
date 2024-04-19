import imgLanding from '../../assets/imgLanding.png';
import logo from '../../assets/logoMV.svg';
import check from '../../assets/check.png';

import { Link } from 'react-router-dom';

export default function LandingPage() {
    
    return (
        <>
            <div className="text-blue-800 px-8 xl:px-12">
                <div className='flex flex-col lg:flex-row'>
                    <div className='py-12 xl:px-12 px-2 lg:max-w-[40vw]'>
                        <img src={logo} alt="logo" className='lg:w-1/3 mb-6' />
                        <div className='relative inline-block'>
                            <h1 className='text-4xl xl:text-6xl font-bold capitalize text-center lg:text-start'>Votre succès en ligne</h1>
                            <div className='relative inline-block flex justify-center xl:block'>
                                <span className='absolute bottom-0 left-0 w-[100%] h-[40%] bg-[#5ce1e6] -z-1'></span>
                                <h1 className='text-4xl xl:text-6xl font-bold capitalize relative text-center lg:text-start'>commence ici</h1>
                            </div>
                        </div>

                        <div className='xl:hidden w-full'>
                            <img src={imgLanding} alt="imgLanding" className='w-[100vw]'/>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-12'>
                            <div className='flex items-center'>
                                <img src={check} alt="check" className='mr-2' />
                                <p className='text-xl font-bold' id='subtitle'>Création et refonte de site internet sur mesure</p>
                            </div>
                            <div className='flex items-center'>
                                <img src={check} alt="check" className='mr-2 my-6' />
                                <p className='text-xl font-bold' id='subtitle'>Gestion de vos réseaux sociaux</p>
                            </div>
                            <div className='flex items-center'>
                                <img src={check} alt="check" className='mr-2' />
                                <p className='text-xl font-bold' id='subtitle'>Lancement de campagnes publicitaires</p>
                            </div>
                        </div>

                        <p className='mt-12 text-lg text-center'>Exploitez le pouvoir des sites web captivants, de la publicité percutante et d&apos;une stratégie sociale efficace pour propulser votre succès en ligne dès aujourd&apos;hui.</p>


                        <div className='flex flex-col justify-center mt-12 items-center'>
                            <p className='mb-8 font-bold text-lg' id='subtitle'>A partir de <span className='text-2xl'>49,99 €</span> !</p>
                            <Link to="/contact">
                                <button className='btn glass rounded-full bg-[#ff66c4] px-16 h-[7vh] border-none text-white text-4xl normal-case hover:bg-[#188fa7] hover:glass'>Contactez-nous !</button>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden xl:block'>
                        <img src={imgLanding} alt="" />
                    </div>
                </div>


                <div>
                    <div>
                        <div className='relative inline-block'>
                            <span className='absolute bottom-0 left-0 w-[100%] h-[40%] bg-[#5ce1e6] -z-1'></span>
                            <h1 className='text-4xl font-bold relative'>Soyez dans l&apos;ère du temps</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>  
)}