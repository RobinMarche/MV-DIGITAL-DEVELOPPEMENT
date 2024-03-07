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
import webpage2 from '../../assets/webpage2.png';
import socials from '../../assets/socials.png';


export default function TestHomePageScroll() {

    const initialText = `L'Agence web dédiée aux `;
    const [displayText, setDisplayText] = useState(initialText);
    const words = [
        { id: "word", text: "Artisans" },
        { id: "word", text: "Commercants" },
        { id: "word", text: "Indépendants" }
      ];
    const wordDuration = 1000;
    const letterDuration = 100; // Délai entre chaque lettre
    const deleteDuration = 500; // Délai entre la suppression et l'écriture du mot suivant
    const [value, setValue] = useState(0);
  
    useEffect(() => {
        let wordIndex = 0;
        let letterIndex = 0;
        let timeoutId;
    
        const animateText = () => {
          const currentWord = words[wordIndex].text;
    
          if (letterIndex <= currentWord.length) {
            setDisplayText(initialText + currentWord.substring(0, letterIndex + 1));
            letterIndex += 1;
            timeoutId = setTimeout(animateText, letterDuration);
          } else {
            // Efface le mot après la durée spécifiée
            timeoutId = setTimeout(() => {
              deleteText();
            }, deleteDuration);
          }
        };
    
        const deleteText = () => {
          const currentWord = words[wordIndex].text;
    
          if (letterIndex >= 0) {
            setDisplayText(initialText + currentWord.substring(0, letterIndex));
            letterIndex -= 1;
            timeoutId = setTimeout(deleteText, letterDuration);
          } else {
            // Passe au mot suivant
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
    
            // Appelle récursivement la fonction après le temps restant dans wordDuration
            timeoutId = setTimeout(animateText, wordDuration - initialText.length);
          }
        };
    
        animateText();
    
        // Nettoie le timeout à la fin pour éviter les fuites de mémoire
        return () => clearTimeout(timeoutId);
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
                    <div className='lg:h-[80vh] h-[100vh] flex flex-col lg:pt-20 text-gray-900 lg:ml-24 pt-24 lg:my-32 lg:rounded-tl-[70%] lg:rounded-tr-[30%] lg:rounded-bl-[30%] lg:rounded-br-[70%]'  id='hero'>
                        <h1 className={`lg:text-start text-center text-5xl 2xl:text-8xl lg:text-8xl uppercase fade-in lg:h-[25vh] h-[15vh] text-white lg:text-gray-900 w-2/3
                        `} id="title">{displayText}</h1>
                        <h1></h1>
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

                <div className='page page_1' id="page2">
                    <div className='lg:h-[100vh] h-[100vh] flex flex-col lg:pt-20 text-gray-900 flex flex-col items-center' id="price">
                        <h2 className='text-6xl mx-[22vw] font-bold text-center my-8 text-gray-900 pt-12 shadowtext'>Les <span className="text-blue-500">meilleures</span> offres adaptées à votre activité et à votre budget</h2>
                        <div className="flex w-full justify-around">
                            <div className="bg-white rounded-2xl p-8 shadow-2xl w-[35vw]">
                                <h1 className="text-center text-2xl text-blue-400" id="font-menu">Site Web</h1>
                                <h1 className="text-center text-lg mt-8 uppercase tracking-widest">A Partir De</h1>
                                <div className="flex justify-center items-center">
                                    <p className="2xl:text-[80px] text-[70px] uppercase text-blue-500" id="font-price">44.99€</p>
                                    <div className="text-2xl text-blue-400 ml-2" id="">
                                        <p>par</p>
                                        <p>mois</p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-6 text-2xl text-center">
                                    <p className="">Boostez votre activité grâce à <br /> votre site internet clé en main.</p>
                                </div>
                                <div className="flex justify-center my-6">
                                    <button className="btn rounded-full bg-blue-500 border-blue-500 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                </div>
                                {/* <div className="flex justify-center items-center">
                                    <img src={webpage2} alt="" />
                                </div> */}
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-2xl w-[35vw]">
                                <h1 className="text-center text-2xl text-blue-400" id="font-menu">Réseaux sociaux</h1>
                                <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                                <div className="flex justify-center items-center">
                                    <p className="2xl:text-[80px] text-[70px] uppercase text-blue-500" id="font-price">144.99€</p>
                                    <div className="text-2xl text-blue-400 ml-2" id="">
                                        <p>par</p>
                                        <p>mois</p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-6 text-2xl text-center">
                                    <p className="">Développez votre notoriété et gagnez en <br /> crédibilité pour attirer de nouveaux clients.</p>
                                </div>
                                <div className="flex justify-center my-6">
                                    <button className="btn rounded-full bg-blue-500 border-blue-500 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                </div>
                                {/* <div className="flex justify-center">
                                    <img src={socials} alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='page page_2 flex items-center justify-center' id="page3">
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




                <div className='page page_3 flex flex-col justify-center' id="page4">
                    <div className='text-center px-8 mt-12'>
                        <h1 className='text-3xl lg:text-6xl'>Comment pouvons nous <span className="text-red-800">vous aider</span> ?</h1>
                    </div>
                    <div className='flex flex-wrap items-center justify-center lg:mx-24 2xl:mx-48'>
                        <div className="box rounded-xl">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={web} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Web et Web Mobile</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Web et Web Mobile</h2>
                                    <p className="mb-4">À l&apos;ère numérique en constante évolution, avoir une présence en ligne efficace est essentiel pour le succès de votre entreprise. Notre équipe dédiée de designers et de développeurs talentueux s&apos;engage à donner vie à votre vision. Que vous ayez besoin d&apos;un site web professionnel, d&apos;une plateforme e-commerce robuste ou d&apos;une application mobile intuitive, nous sommes là pour transformer vos idées en réalité numérique.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[20vw]">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={print} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Logo et Supports Imprimés</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Logo et Supports Imprimés</h2>
                                    <p className="mb-4">Laissez-nous être les architectes visuels de votre identité d&apos;entreprise. Nous transformons vos concepts en réalité visuelle, renforçant ainsi votre présence sur tous les supports. Contactez-nous dès aujourd&apos;hui pour donner vie à une image de marque qui laisse une impression durable.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[20vw]">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={community} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Community Management</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Community Management</h2>
                                    <p className="mb-4">À l&apos;ère de la conversation en ligne, la gestion de votre communauté sur les médias sociaux est cruciale. Nous cultivons des relations significatives avec votre audience pour faire croître votre influence numérique. Notre équipe dédiée de Community Managers est prête à propulser votre présence sociale vers de nouveaux sommets.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[20vw]">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={uxDesign} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Publicités Réseaux Sociaux</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Publicités Réseaux Sociaux</h2>
                                    <p className="mb-4">À l&apos;ère du numérique, la publicité sur les réseaux sociaux est un levier incontournable pour accroître votre portée. Nous concevons des campagnes publicitaires stratégiques, optimisées pour chaque plateforme, pour maximiser votre impact et générer des résultats tangibles.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
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


                <div className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 flex ${value === 0 && "bg-[#041e42]/[0.5]"} ${value === 1 && "bg-blue-400/[0.5]"} ${value === 2 && "bg-[#f5c120]/[0.5]"} ${value === 3 && "bg-red-800/[0.5]"} lg:w-[25vw] w-[50vw] xl:w-[15vw] rounded-full justify-around items-center py-2 px-4`}>
                    <div>
                        <div className={`${ value === 0 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`}  onClick={click1}></div>
                        <div className={`${ value === 0 ? "flex bg-[#041e42] rounded-full py-2 px-2" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                    
                    <div>
                        <div className={`${ value === 1 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click2}></div>
                        <div className={`${ value === 1 ? "flex bg-blue-700 rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                    
                    <div>
                        <div className={`${ value === 2 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click3}></div>
                        <div className={`${ value === 2 ? "flex bg-[#f5c120] rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>                    
                    
                    <div>
                        <div className={`${ value === 3 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click4}></div>
                        <div className={`${ value === 3 ? "flex bg-red-800 rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}