import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import web from '../../assets/web.jpg';
import { useState, useEffect, useCallback } from 'react';
import community from '../../assets/community_manager.jpg';
import print from '../../assets/print2.jpg';
import { useRef } from "react";
import smile from '../../assets/femme.jpg';
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
import badgeCheck from '../../assets/badge-check.png';


export default function TestHomePageScroll() {

    const [displayText, setDisplayText] = useState('');
    const words = [
        { id: "word", text: "Artisans" },
        { id: "word", text: "Commerçants" },
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
            setDisplayText(currentWord.substring(0, letterIndex + 1));
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
            setDisplayText(currentWord.substring(0, letterIndex));
            letterIndex -= 1;
            timeoutId = setTimeout(deleteText, letterDuration);
          } else {
            // Passe au mot suivant
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
    
            // Appelle récursivement la fonction après le temps restant dans wordDuration
            timeoutId = setTimeout(animateText, wordDuration - displayText.length);
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
            setValue((prevValue) => Math.min(prevValue + 1, 4));
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

    const click5 = () => {
        const page5 = document.getElementById('page5');
        page5.scrollIntoView({ behavior: 'smooth' });
        setValue(4);
    }
    
    return(
        <>

            <div id='container' onWheel={horizontalScroll} ref={containerRef} style={{ scrollBehavior: 'smooth' }} className="relative h-[100vh] overflow-y-hidden">
                <div className='page page_1' id="page1">
                    <div className='h-[100vh] h-[100vh] flex flex-col lg:pt-16 2xl:pt-32 text-gray-900'  id='hero'>
                        <h2 className="pt-12 text-center uppercase text-[#188FA7] mb-4 font-bold mx-8">M&V Digital Developpement - au service des pros</h2>
                        <h1 className="text-center text-4xl lg:text-6xl 2xl:text-7xl font-bold mx-8 lg:mx-48 xl:mx-80 text-[#041e42]">L&apos;agence de communication dédiée aux</h1>
                        <h1 className={`text-center text-4xl 2xl:text-7xl lg:text-7xl fade-in h-[9vh] lg:h-[16vh] text-[#188FA7] lg:mx-80 font-bold
                        `} id="">{displayText}</h1>

                        <div className="flex flex-col justify-center md:flex-row items-center">
                            <div className="flex items-center justify-center border-[1px] border-gray-500 p-3 bg-white/[0.9] mx-12 rounded-full lg:mx-0">
                                <img src={badgeCheck} alt="badge-check" className="mr-4"/>
                                <p>Un véritable savoir faire</p>
                            </div>
                            <div className="flex items-center justify-center border-[1px] border-gray-500 p-3 bg-white/[0.9] mx-12 rounded-full my-4 lg:my-0 lg:mx-6">
                                <img src={badgeCheck} alt="badge-check" className="mr-4"/>
                                <p>Les meilleurs experts</p>
                            </div>
                            <div className="flex items-center justify-center border-[1px] border-gray-500 p-3 bg-white/[0.9]  mx-12 rounded-full lg:mx-0">
                                <img src={badgeCheck} alt="badge-check" className="mr-4"/>
                                <p>Des offres imbattables</p>
                            </div>
                        </div>

                        <div className="flex justify-center xl:mt-12 mt-4">
                            <Link to="/contact">
                                <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Prendre rendez-vous</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='page page_1' id="page2">
                    <div className='lg:h-[100vh] h-[100vh] flex flex-col 2xl:pt-20 pt-4 text-gray-900 flex flex-col items-center' id="price">
                        <h2 className='text-4xl 2xl:text-6xl mx-[22vw] font-bold text-center my-8 text-[#041e42] pt-12 shadowtext'>Les <span className="text-[#188FA7]">meilleures</span> offres adaptées à votre activité et à votre budget</h2>
                        <div className="flex w-full justify-around">
                            <div className="bg-white rounded-2xl p-8 shadow-2xl w-[35vw]">
                                <h1 className="text-center text-xl 2xl:text-2xl text-[#188FA7]" id="font-menu">Site Web</h1>
                                <h1 className="text-center text-lg mt-8 uppercase tracking-widest">A Partir De</h1>
                                <div className="flex justify-center items-center">
                                    <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase text-[#188FA7]" id="font-price">44.99€</p>
                                    <div className="text-2xl text-[#188FA7] ml-2" id="">
                                        <p>par</p>
                                        <p>mois</p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-6 text-lg 2xl:text-2xl text-center">
                                    <p className="">Boostez votre activité grâce à <br /> votre site internet clé en main.</p>
                                </div>
                                <div className="flex justify-center my-2 2xl:my-6">
                                    <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                </div>
                                {/* <div className="flex justify-center items-center">
                                    <img src={webpage2} alt="" />
                                </div> */}
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-2xl w-[35vw]">
                                <h1 className="text-center text-xl 2xl:text-2xl text-[#188FA7]" id="font-menu">Réseaux sociaux</h1>
                                <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                                <div className="flex justify-center items-center">
                                    <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase text-[#188FA7]" id="font-price">144.99€</p>
                                    <div className="text-2xl text-[#188FA7] ml-2" id="">
                                        <p>par</p>
                                        <p>mois</p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-6 text-lg 2xl:text-2xl text-center">
                                    <p className="">Développez votre notoriété et gagnez en <br /> crédibilité pour attirer de nouveaux clients.</p>
                                </div>
                                <div className="flex justify-center my-2 2xl:my-6">
                                    <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
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
                            <h2 className='text-lg uppercase text-center lg:text-start mt-8 text-[#188FA7]'>Soyez accompagné par une agence de communication</h2>
                            <div className='my-8 flex justify-center items-center lg:block lg:mt-2'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-4xl 2xl:text-7xl text-[#041e42] font-bold">Votre <span className="text-[#188FA7]">Réussite</span>, <br /></h1>
                            <h1 className="text-4xl 2xl:text-7xl text-[#041e42] font-bold ml-36">Notre Métier</h1>
                            <p className={`text-center lg:text-start 2xl:mt-8 mt-4 text-lg 2xl:text-xl`}>
                                Votre entreprise mérite la meilleure communication. <br />
                                Libérez votre potentiel avec M&V Digital Developpement !
                            </p>

                            <div className="flex items-center justify-center 2xl:mt-12 mt-4">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <p className="font-bold text-lg">Devenez plus visible pour attirer plus de clients</p>
                                    </div>

                                    <div className="flex items-center 2xl:my-6 my-3">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <p className="font-bold text-lg">Obtenez des résultats rapides et mesurables.</p>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <p className="font-bold text-lg">Gagnez du temps grâce à une équipe d&apos;experts dédiée.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={smile} alt="" className="w-[27%] rounded-xl"/>
                    </div>
                </div>

                <div className='page page_3 h-[100vh] w-[100vw] flex items-start justify-center 2xl:pt-32 pt-24' id="page4">
                    <div className='text-start pl-24 mt-12'>
                        <h2 className='text-lg uppercase text-center lg:text-start mt-8 text-[#188FA7]'>Soyez accompagné par une agence de communication</h2>
                        <div className='my-8 flex justify-center items-center lg:block lg:mt-2'>
                            <div className='bg-[#022a60] w-[20vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                        </div>
                        <h1 className='text-7xl 2xl:text-9xl w-[35vw]'>Comment <br />pouvons nous <br /> <span className="text-[#188FA7] font-bold">vous aider</span> ?</h1>
                    </div>
                    <div className='flex flex-wrap items-center justify-center lg:mx-24 2xl:mx-48' id="page4bg">
                        <div className="flex">
                            <div className="box rounded-xl">
                                <div className="box-inner rounded-xl shadow-xl">
                                    <div className="box-front flex flex-col items-center justify-center">
                                        <img src={web} alt="" className="w-1/2" />
                                        <h2 className="font-bold text-xl">Web et Web Mobile</h2>
                                    </div>
                                    <div className="box-back py-4 px-10">
                                        <h2 className="font-bold text-xl mb-4">Web et Web Mobile</h2>
                                        <p className="mb-4">Avoir une présence en ligne efficace est essentiel pour le succès de votre entreprise. Notre équipe de designers et de développeurs s&apos;engage à donner vie à votre vision. Que vous ayez besoin d&apos;un site web professionnel ou d&apos;une plateforme e-commerce robuste, nous sommes là pour transformer vos idées en réalité numérique.</p>
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
                        </div>

                        <div className="flex">
                            <div className="box w-[20vw]">
                                <div className="box-inner rounded-xl shadow-xl">
                                    <div className="box-front flex flex-col items-center justify-center">
                                        <img src={community} alt="" className="w-1/2" />
                                        <h2 className="font-bold text-xl">Gestion des Réseaux Sociaux</h2>
                                    </div>
                                    <div className="box-back py-4 px-10">
                                        <h2 className="font-bold text-xl mb-4">Gestion des Réseaux Sociaux</h2>
                                        <p className="mb-4">À l&apos;ère de la conversation en ligne, la gestion de votre communauté sur les médias sociaux est cruciale. Nous cultivons des relations significatives avec votre audience pour faire croître votre influence numérique. Notre équipe dédiée de Community Managers est prête à propulser votre présence sociale vers de nouveaux sommets.</p>
                                        <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                    </div>
                                </div>
                            </div>

                            <div className="box w-[20vw]">
                                <div className="box-inner rounded-xl shadow-xl">
                                    <div className="box-front flex flex-col items-center justify-center">
                                        <img src={uxDesign} alt="" className="w-1/2" />
                                        <h2 className="font-bold text-xl">Publicités en ligne</h2>
                                    </div>
                                    <div className="box-back py-4 px-10">
                                        <h2 className="font-bold text-xl mb-4">Publicités en ligne</h2>
                                        <p className="mb-4">À l&apos;ère du numérique, la publicité sur les réseaux sociaux est un levier incontournable pour accroître votre portée. Nous concevons des campagnes publicitaires stratégiques, optimisées pour chaque plateforme, pour maximiser votre impact et générer des résultats tangibles.</p>
                                        <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='page page_4 flex items-center justify-center text-white pt-12 2xl:pt-24 pt-32' id="page5">
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='w-1/2 fade-right px-6'>
                            <h2 className='text-md uppercase text-center lg:text-start text-[#188FA7] font-bold'>pourquoi choisir M&V digital Developpement ?</h2>
                            <div className='2xl:my-8 my-2 flex justify-center items-center lg:block lg:mt-2'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="2xl:text-5xl text-3xl text-[#041e42] font-bold">Une communication par des <span className="text-[#188FA7]">pros</span>, pour des <span className="text-[#188FA7]">pros</span></h1>

                            <div className="items-center justify-center 2xl:mt-12">
                                <div className="flex flex-col bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl m-4 p-4 w-[40vw] text-black" id="bg-creation">
                                    <h1 className="2xl:text-3xl text-2xl font-bold uppercase">Expertise</h1>
                                    <p className="py-2 2xl:py-4 2xl:text-xl">Bénéficiez des compétences et du savoir-faire d’experts en communication pour propulser votre activité.</p>
                                    <div className="flex justify-center">
                                        <button className="btn 2xl:mb-4 rounded-full px-16 glass bg-[#188FA7] text-white normal-case">En Savoir Plus</button>
                                    </div>
                                </div>

                                <div className="flex flex-col bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl m-4 p-4 w-[40vw] text-black" id="bg-creation2">
                                    <h1 className="2xl:text-3xl text-2xl font-bold uppercase">Créativité</h1>
                                    <p className="py-2 2xl:py-4 2xl:text-xl">Des visuels et des messages impactants pour montrer le meilleur de votre entreprise.</p>
                                    <div className="flex justify-center">
                                        <button className="btn 2xl:mb-4 rounded-full px-16 glass bg-[#188FA7] text-white normal-case">En Savoir Plus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40vw] p-24 bg-gradient-to-r from-[#188FA7] to-blue-300 rounded-2xl flex flex-col justify-center" id="contact5">
                            <h1 className="text-center 2xl:text-6xl text-4xl font-bold text-white">Echangez gratuitement avec un expert</h1>
                            <div className="flex flex-col justify-center items-center 2xl:mt-24 mt-12">
                                <button className="btn mb-6 rounded-full px-16 btn-outline text-white">En savoir plus</button>
                                <button className="btn mb-12 rounded-full px-16 bg-red-400 border-red-400 text-white">Contactez-nous</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`hidden lg:flex lg:fixed bottom-5 left-1/2 transform -translate-x-1/2 flex bg-[#188FA7]/[0.5] lg:w-[30vw] w-[50vw] xl:w-[20vw] rounded-full justify-around items-center py-2 px-4`}>
                    <div>
                        <div className={`${ value === 0 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`}  onClick={click1}></div>
                        <div className={`${ value === 0 ? "flex bg-[#041e42] rounded-full py-2 px-2" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                    
                    <div>
                        <div className={`${ value === 1 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click2}></div>
                        <div className={`${ value === 1 ? "flex bg-[#041e42] rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                    
                    <div>
                        <div className={`${ value === 2 ? "" : "badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer"}`} onClick={click3}></div>
                        <div className={`${ value === 2 ? "flex bg-[#041e42] rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>                    
                    
                    <div>
                        <div className={`${ value === 3 ? "" : `badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer`}`} onClick={click4}></div>
                        <div className={`${ value === 3 ? "flex bg-[#041e42] rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>

                    <div>
                        <div className={`${ value === 4 ? "" : `badge badge-neutral bg-white border-white badge-xs mx-2 hover:cursor-pointer`}`} onClick={click5}></div>
                        <div className={`${ value === 4 ? "flex bg-[#041e42] rounded-full py-2 px-2 ease-out duration-1000" : "hidden"}`}>
                            <img src={chevLeft} alt="" />
                            <img src={chevRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}