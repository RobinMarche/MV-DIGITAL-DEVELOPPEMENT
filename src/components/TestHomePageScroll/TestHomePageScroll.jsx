import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import web from '../../assets/web.jpg';
import { useState, useEffect } from 'react';
import community from '../../assets/community_manager.jpg';
import print from '../../assets/print2.jpg';
import { useRef } from "react";
import smile from '../../assets/smile.jpg';
import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';


export default function TestHomePageScroll() {
    
    const containerRef = useRef();

    const horizontalScroll = (e) => {
        const container = document.getElementById('container');
        container.scrollLeft += e.deltaY;

          const delta = event.deltaY;
          const containers = containerRef.current;
      
          if (delta > 0) {
            // Scroll vers le bas
            containers.scrollLeft += containers.clientWidth;
          } else {
            // Scroll vers le haut
            containers.scrollLeft -= containers.clientWidth;
          }
    }

    return(
        <>

            <div id='container' onWheel={horizontalScroll} ref={containerRef} style={{ scrollBehavior: 'smooth' }}>
                <div className='page page_1'>
                    <div className='h-[100vh] flex justify-around items-center text-gray-900 shadow-xl' id='hero'>
                        <div className='flex flex-col items-center'>
                            <p>Bienvenue chez</p>
                            <h1 className='text-3xl text-center fade-in px-4 pt-4'>M&V Digital Developpement</h1>
                            <h2 id="finesse" className="my-6 lg:text-[500%] text-[400%] px-4 text-center fade-in2">- Sculptons votre image avec finesse -</h2>
                            <Link to="/contact">
                                <button className='btn btn-outline rounded-none shadow-lg fade-in2'>Nous contacter</button>
                            </Link>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>


                <div className='page page_2 flex items-center justify-center'>
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-center lg:text-start mt-8 text-[#f5c120]'>Soyez accompagné par une agence de communication</h2>
                            <div className='my-8 flex justify-center items-center lg:block lg:mt-2'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-7xl text-[#041e42] font-bold">Votre <span className="text-[#f5c120]">Réussite</span>, <br /></h1>
                            <h1 className="text-7xl text-[#041e42] font-bold lg:ml-48">Notre Métier</h1>
                            <p className={`text-center lg:text-start lg:ml-48 mt-8 text-xl`}>
                                Votre entreprise mérite la meilleure communication. <br />
                                Libérez votre potentiel avec ALEO !
                            </p>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#f5c120] rounded-full p-2 mr-4"/>
                                        <p className="font-bold text-lg">Devenez plus visible pour attirer plus de clients</p>
                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#f5c120] rounded-full p-2 mr-4" />
                                        <p className="font-bold text-lg">Obtenez des résultats rapides et mesurables.</p>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#f5c120] rounded-full p-2 mr-4" />
                                        <p className="font-bold text-lg">Gagnez du temps grâce à une équipe d&apos;experts dédiée.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={smile} alt="" className="w-[27%] rounded-xl"/>
                    </div>
                </div>




                <div className='page page_3 flex flex-col justify-center' id="blur">
                    <div className='text-center px-8 my-12'>
                        <h1 className='text-3xl lg:text-6xl'>Comment pouvons nous vous aider ?</h1>
                    </div>
                    <div className='flex flex-nowrap justify-center items-center lg:mx-24 2xl:mx-48'>
                        <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-12 lg:px-12'>
                            <img src={web} alt="web" className='md:w-1/2' />
                            <h1 className='font-bold text-xl my-8'>Web et Web Mobile</h1>
                            <p className='my-6'>Votre présence en ligne est cruciale. Nous concevons des sites web fonctionnels, esthétiques et adaptés à vos besoins spécifiques. Que ce soit une vitrine, un site e-commerce ou une application web, nous utilisons les dernières technologies pour assurer une expérience utilisateur optimale.</p>
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </div>

                        <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-14 lg:px-12'>
                            <img src={print} alt="web" className='md:w-1/2' />
                            <h1 className='font-bold text-xl my-8'>Print</h1>
                            <p className='my-6'>Donnez une dimension tangible à votre identité avec notre expertise en impression. Chez M&V Digital Developpement, nous sublimons vos idées sur papier, créant des supports print exceptionnels qui captivent et laissent une impression mémorable.</p>
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </div>

                        <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-12 lg:px-12'>
                            <img src={community} alt="web" className='md:w-1/2' />
                            <h1 className='font-bold text-xl my-8'>Community Management</h1>
                            <p className='my-6'>De la création d&apos;identité visuelle à la gestion de campagnes publicitaires, notre équipe créative s&apos;engage à donner vie à votre histoire de manière captivante. Nous concevons des messages impactants et des stratégies de communication cohérentes pour renforcer votre positionnement sur le marché.</p>
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}