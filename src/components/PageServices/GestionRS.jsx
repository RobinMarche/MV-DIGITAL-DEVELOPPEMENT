import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import badgeCheck from '../../assets/badge-check.png';
import arrow from '../../assets/move-right.png';
import phone from '../../assets/phone.jpg';
import RS from '../../assets/26150.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesFAQ from '../../assets/services-faq.webp';


export default function GestionRS() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);


    return (
        <div>
            <div className="text-center py-12 px-12 lg:pt-24 xl:px-60 lg:px-32" id='page2'>
                <h2 className="uppercase">GESTION DE VOS PUBLICATIONS sur les réseaux sociaux</h2>
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl text-[#041e42]"><span className="text-[#188FA7]">Rassurez vos clients </span>avec des réseaux sociaux professionnels</h1>
                <p className="lg:text-xl">Affirmez votre expertise avec des comptes Instagram et Facebook professionnels gérés par des experts.</p>
                <div className="mt-12">
                    <Link to="/contact">
                        <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Contactez-nous</button>
                    </Link>
                </div>
            </div>

            <div className='page page_2 flex items-center justify-center' id="page3">
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-start mt-8 text-[#188FA7]'>FACILITEZ LA GESTION DE VOS RÉSEAUX SOCIAUX</h2>
                            <div className='my-8 flex justify-start items-center'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl">Présentez votre entreprise sous son <span className='text-[#188FA7]'>meilleur jour</span></h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Design</p>
                                            <p>Confiez la création de vos publications à nos experts et mettez en avant vos expertises.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Régularité</p>
                                            <p>Avec 4 à 8 posts publiés chaque mois, profitez de tous les avantages d’une communication de qualité.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Image de marque</p>
                                            <p>Soyez présents sur les réseaux sociaux et rassurez vos clients avec une image professionnelle</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={phone} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div id='page4bg'>
                <div className='text-center xl:mx-[25vw] px-4'>
                    <h2>VOTRE STRATÉGIE SOCIALE GÉRÉE PAR NOTRE AGENCE DE COMMUNICATION</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl text-[#041e42]'>Le vrai <span className='text-[#188FA7]'>plus</span> pour votre crédibilité</h1>
                    <p className='xl:px-16'>Profitez de toute la puissance des réseaux sociaux en toute sérénité !</p>
                </div>

                <div className='px-4 lg:flex lg:justify-center lg:items-center mt-12'>
                    <img src={RS} alt="cool"  className='rounded-2xl my-8 lg:w-[40%] lg:mr-12'/>
                    <div>
                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Un compte Facebook et Instagram actif et professionnel</p>
                                <p>Nos équipes s’occupent pour vous de la création et de l’optimisation de votre page Facebook et Instagram.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Une ligne éditoriale adaptée à votre activité</p>
                                <p>Nous choisissons parmi de nombreuses thématiques qui ont fait leurs preuves celles qui seront le mieux adaptées à votre entreprise.</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>4 à 8 publications par mois</p>
                                <p>Grâce à nos experts, bénéficiez d’une communication régulière et de qualité pour développer votre notoriété !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12 mx-8 text-white'>
                <div className="bg-[#188FA7] rounded-2xl p-4 shadow-2xl lg:w-[50vw]">
                    <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                    <div className="flex justify-center items-center">
                        <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase" id="font-price">149.99€</p>
                        <div className="text-2xl ml-2" id="">
                            <p>par</p>
                            <p>mois</p>
                        </div>
                    </div>
                    <div className="flex justify-center my-6 text-lg 2xl:text-2xl text-center">
                        <p className="">La meilleure solution pour développer sa communauté !</p>
                    </div>
                    <div className="flex justify-center my-2 2xl:my-6">
                        <Link to="/contact">
                            <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /></button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mx-6 lg:mx-24 xl:mx-48 my-24 flex flex-col lg:flex-row items-center justify-around'>
                <div className='flex flex-col justify-center items-center lg:w-[50%] lg:items-start lg:mr-12'>
                    <h2 className='font-bold'>FAQ</h2>
                    <h1 className='my-6 text-3xl text-center lg:text-start font-bold capitalize'>Questions fréquemments posées</h1>
                    <p className='text-center mb-6 lg:w-[70%] lg:text-start'>Vous trouverez ci-dessous les questions les plus fréquemments posées par nos clients concernants le service séléctionné.</p>
                    <div className='mb-12'>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                                Focus me to see content
                            </div>
                            <div className="collapse-content"> 
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none my-6">
                            <div className="collapse-title text-xl font-medium">
                                Focus me to see content
                            </div>
                            <div className="collapse-content"> 
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                                Focus me to see content
                            </div>
                            <div className="collapse-content"> 
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={servicesFAQ} alt="" />
                </div>
            </div>


                
        </div>
    )
}