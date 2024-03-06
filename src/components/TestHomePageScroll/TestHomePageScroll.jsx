import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import web from '../../assets/web.jpg';
import { useState, useEffect, useCallback } from 'react';
import community from '../../assets/community_manager.jpg';
import print from '../../assets/print2.jpg';
import { useRef } from "react";
import smile from '../../assets/smile.jpg';
import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import arrow from '../../assets/move-right.png';
import { debounce } from "lodash";
import chevLeft from '../../assets/chevron-left.png';
import chevRight from '../../assets/chevron-right.png';
import uxDesign from '../../assets/ux_design.jpg';


export default function TestHomePageScroll() {

    const text = "M &V Digital";
    const text2 = " Developpement";
    const [displayText, setDisplayText] = useState('');
    const [displayText2, setDisplayText2] = useState('');
    const [value , setValue] = useState(0);
  
    useEffect(() => {
        let index = 0;
    
        const intervalId = setInterval(() => {
          setDisplayText((prevText) => {
            const nextChar = text[index];
        
            // Sinon, ajoutez le caractère suivant uniquement s'il est défini et différent du précédent
            return nextChar !== undefined && prevText !== nextChar
              ? prevText + nextChar
              : prevText;
          });
    
          index += 1;
    
          if (index === text.length) {
            clearInterval(intervalId);
          }
        }, 100);
    
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        let index = 0;
    
        const intervalId = setInterval(() => {
          setDisplayText2((prevText) => {
            const nextChar = text2[index];
        
            // Sinon, ajoutez le caractère suivant uniquement s'il est défini et différent du précédent
            return nextChar !== undefined && prevText !== nextChar
              ? prevText + nextChar
              : prevText;
          });
    
          index += 1;
    
          if (index === text2.length) {
            clearInterval(intervalId);
          }
        }, 100);
    
        return () => clearInterval(intervalId);

    }, []);



    const containerRef = useRef();

    const debouncedScrollHandler = useCallback(
        debounce((e) => {
          const container = document.getElementById('container');
          container.scrollLeft += e.deltaY;
    
          const delta = e.deltaY;
          const containers = containerRef.current;
    
          if (delta > 0) {
            // Scroll vers le bas
            containers.scrollLeft += containers.clientWidth;
            // Augmenter la valeur de 1 lors du scroll vers le bas
            setValue((prevValue) => Math.min(prevValue + 1, 3));
          } else {
            // Scroll vers le haut
            containers.scrollLeft -= containers.clientWidth;
            // Diminuer la valeur de 1 lors du scroll vers le haut
            setValue((prevValue) => Math.max(prevValue - 1, 0));
          }
        }, 500), // Délai d'attente d'une seconde
        [] // Aucune dépendance, la fonction ne change pas
    );

    const horizontalScroll = (e) => {
        e.persist();
        debouncedScrollHandler(e);
    }

    const click1 = () => {
        const page1 = document.getElementById('page1');
        page1.scrollIntoView({ behavior: 'smooth' });
        setValue(0);
    }

    const click2 = () => {
        const page2 = document.getElementById('page2');
        page2.scrollIntoView({ behavior: 'smooth' });
        setValue(1);
    }

    const click3 = () => {
        const page3 = document.getElementById('page3');
        page3.scrollIntoView({ behavior: 'smooth' });
        setValue(2);
    }

    const click4 = () => {
        const page4 = document.getElementById('page4');
        page4.scrollIntoView({ behavior: 'smooth' });
        setValue(3);
    }
    
    return(
        <>

            <div id='container' onWheel={horizontalScroll} ref={containerRef} style={{ scrollBehavior: 'smooth' }} className="relative h-[100vh] overflow-y-hidden">
                <div className='page page_1' id="page1">
                    <div className='lg:h-[80vh] h-[100vh] flex flex-col lg:pt-20 text-gray-900 lg:mx-24 pt-24 lg:my-32 lg:rounded-tl-[70%] lg:rounded-tr-[30%] lg:rounded-bl-[30%] lg:rounded-br-[70%] shadow-2xl'  id='hero'>
                        <h1 className="lg:text-start text-center text-5xl xl:text-9xl lg:text-8xl uppercase fade-in lg:h-[12.5vh] h-[15vh] text-white lg:text-gray-900" id="title">{displayText}</h1>
                        <h1 className="lg:text-start text-center text-5xl xl:text-9xl lg:text-8xl uppercase fade-in lg:h-[12.5vh] h-[15vh] text-white lg:text-gray-900" id="title">{displayText2}</h1>
                        <div className="flex flex-col justify-center items-center lg:w-1/2">
                            <p className="mt-24 text-4xl text-center text-white fade-in italic" id="subtitle">Aujourd&apos;hui,</p>
                            <p className="text-4xl text-center text-white fade-in italic" id="subtitle">joignons l&apos;utile</p>
                            <p id="digital" className="text-7xl mt-[-25px] text-center text-green-500 fade-left">au digital</p>
                            <div className="flex justify-center">
                                <button className="btn mt-6 rounded-full bg-[#041e42] border-[#041e42] text-white normal-case px-12 text-lg hover:scale-110 ease-out duration-1000 hover:bg-green-500">En savoir plus <img src={arrow} alt="" /> </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='page page_2 flex items-center justify-center' id="page2">
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
                                Libérez votre potentiel avec M&V Digital Developpement !
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




                <div className='page page_3 flex flex-col justify-center' id="page3">
                    <div className='text-center px-8 mt-12'>
                        <h1 className='text-3xl lg:text-6xl'>Comment pouvons nous <span className="text-red-800">vous aider</span> ?</h1>
                    </div>
                    <div className='flex flex-nowrap lg:mx-24 2xl:mx-48'>
                        <div className="box rounded-xl">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={web} alt="" className="w-1/2" />
                                    <h2>Web et Web Mobile</h2>
                                </div>
                                <div className="box-back">
                                    <h2>Print</h2>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[20vw]">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={print} alt="" className="w-1/2" />
                                    <h2>Print</h2>
                                </div>
                                <div className="box-back">
                                    <h2>Face arrière</h2>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[20vw]">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={community} alt="" className="w-1/2" />
                                    <h2>Community Management</h2>
                                </div>
                                <div className="box-back">
                                    <h2>Face arrière</h2>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[20vw]">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={uxDesign} alt="" className="w-1/2" />
                                    <h2>UX Design</h2>
                                </div>
                                <div className="box-back">
                                    <h2>Face arrière</h2>
                                </div>
                            </div>
                        </div>

                        

                        {/* <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-12 lg:px-12 mt-48'>
                            <img src={print} alt="web" className='md:w-1/2' />
                            <h1 className='font-bold text-xl my-8'>Print</h1>
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </div>

                        <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-12 lg:px-12'>
                            <img src={community} alt="web" className='md:w-1/2' />
                            <h1 className='font-bold text-xl my-8'>Community Management</h1>
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </div>

                        <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-12 lg:px-12 mt-48'>
                            <img src={uxDesign} alt="web" className='md:w-1/2' />
                            <h1 className='font-bold text-xl my-8'>UX Design</h1>
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </div> */}
                        
                    </div>
                </div>

                <div className='page page_3 flex flex-col justify-center' id="page4">
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


                <div className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 flex ${value === 0 && "bg-[#041e42]/[0.8]"} ${value === 1 && "bg-[#f5c120]/[0.8]"} ${value === 2 && "bg-red-800/[0.8]"} ${value === 3 && "bg-green-800/[0.8]"} lg:w-[25vw] w-[50vw] xl:w-[15vw] rounded-full justify-around items-center py-2 px-4`}>
                    <div>
                        <div className={`${ value === 0 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`}  onClick={click1}></div>
                        <div className={`${ value === 0 ? "flex bg-[#041e42] rounded-full py-2 px-2" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                    
                    <div>
                        <div className={`${ value === 1 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click2}></div>
                        <div className={`${ value === 1 ? "flex bg-[#f5c120] rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                    
                    <div>
                        <div className={`${ value === 2 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click3}></div>
                        <div className={`${ value === 2 ? "flex bg-red-800 rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>                    
                    
                    <div>
                        <div className={`${ value === 3 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click4}></div>
                        <div className={`${ value === 3 ? "flex bg-green-800 rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}