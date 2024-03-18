import { Link } from "react-router-dom";
import web from '../../assets/web.jpg';
import { useState, useEffect } from 'react';
import community from '../../assets/community_manager.jpg';
import print from '../../assets/print2.jpg';
import { useRef } from "react";
import smile from '../../assets/femme.jpg';
import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import arrow from '../../assets/move-right.png';
import uxDesign from '../../assets/ux_design.jpg';
import badgeCheck from '../../assets/badge-check.png';


export default function TestHomePageMobile() {

    const [displayText, setDisplayText] = useState('');
    const words = [
        { id: "word", text: "Artisans" },
        { id: "word", text: "Commercants" },
        { id: "word", text: "Indépendants" }
      ];
    const wordDuration = 1000;
    const letterDuration = 100; // Délai entre chaque lettre
    const deleteDuration = 500; // Délai entre la suppression et l'écriture du mot suivant
  
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

    
    return(
        <>

            <div id='' ref={containerRef} style={{ scrollBehavior: 'smooth' }}>
                <div className='page page_1' id="page1">
                    <div className='lg:h-[100vh] h-[100vh] flex flex-col text-gray-900 '  id='hero'>
                        <h2 className="pt-24 text-center uppercase text-[#188FA7] mb-4 font-bold mx-8">M&V Digital Developpement - au service des pros</h2>
                        <h1 className="text-center text-4xl font-bold mx-8 lg:mx-48 xl:mx-80">L&apos;agence de communication dédiée aux</h1>
                        <h1 className={`text-center text-4xl fade-in h-[9vh] text-[#188FA7] font-bold
                        `} id="">{displayText}</h1>

                        <div className="flex flex-col justify-center items-center pt-12">
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

                        <div className="flex justify-center pt-24">
                            <Link to="/contact">
                                <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Prendre rendez-vous</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='page page_1' id="page2">
                    <div className='flex flex-col lg:pt-20 text-gray-900 flex flex-col items-center' id="price">
                        <h2 className='text-4xl mx-[10vw] font-bold text-center my-8 text-gray-900 pt-12 shadowtext'>Les <span className="text-[#188FA7]">meilleures</span> offres adaptées à votre activité et à votre budget</h2>
                        <div className="flex flex-col w-full justify-around">
                            <div className="bg-white rounded-2xl p-8 shadow-2xl m-8">
                                <h1 className="text-center text-2xl text-[#188FA7]" id="font-menu">Site Web</h1>
                                <h1 className="text-center text-lg mt-8 uppercase tracking-widest">A Partir De</h1>
                                <div className="flex justify-center items-center">
                                    <p className="text-[45px] uppercase text-[#188FA7]" id="font-price">44.99€</p>
                                    <div className="text-xl text-[#188FA7] ml-2" id="">
                                        <p>par</p>
                                        <p>mois</p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-6 text-md text-center">
                                    <p className="">Boostez votre activité grâce à <br /> votre site internet clé en main.</p>
                                </div>
                                <div className="flex justify-center my-6">
                                    <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-2xl m-8">
                                <h1 className="text-center text-2xl text-[#188FA7]" id="font-menu">Réseaux sociaux</h1>
                                <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                                <div className="flex justify-center items-center">
                                    <p className="text-[45px] uppercase text-[#188FA7]" id="font-price">144.99€</p>
                                    <div className="text-xl text-[#188FA7] ml-2" id="">
                                        <p>par</p>
                                        <p>mois</p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-6 text-md text-center">
                                    <p className="">Développez votre notoriété et gagnez en crédibilité pour attirer de nouveaux clients.</p>
                                </div>
                                <div className="flex justify-center my-6">
                                    <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='page page_2 flex items-center justify-center' id="page3">
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-start mt-8 text-[#188FA7]'>Soyez accompagné par une agence de communication</h2>
                            <div className='my-8 flex justify-start items-center'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-7xl text-[#041e42] font-bold">Votre <span className="text-[#188FA7]">Réussite</span>, <br /></h1>
                            <h1 className="text-7xl text-[#041e42] font-bold lg:ml-48">Notre Métier</h1>
                            <p className={`text-center lg:text-start lg:ml-48 mt-8 text-xl`}>
                                Votre entreprise mérite la meilleure communication. <br />
                                Libérez votre potentiel avec M&V Digital Developpement !
                            </p>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <p className="font-bold text-lg">Devenez plus visible pour attirer plus de clients</p>
                                    </div>

                                    <div className="flex items-center my-6">
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
                        <img src={smile} alt="" className="rounded-xl my-8"/>
                    </div>
                </div>




                <div className='page page_3 flex flex-col justify-center' id="page4">
                    <div className='text-center px-8'>
                    <h2 className='text-4xl mx-[10vw] font-bold text-center my-8 text-gray-900 shadowtext'>Comment pouvons nous <span className="text-[#188FA7]">vous aider</span> ?</h2>
                    </div>
                    <div className='flex flex-wrap items-center justify-center flex-col'>
                        <div className="box rounded-xl">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={web} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Web et Web Mobile</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Web et Web Mobile</h2>
                                    <p className="mb-4">Que vous ayez besoin d&apos;un site web professionnel ou d&apos;une plateforme e-commerce robuste, nous sommes là pour transformer vos idées en réalité numérique.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={print} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Logo et Supports Imprimés</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Logo et Supports Imprimés</h2>
                                    <p className="mb-4">Nous transformons vos concepts en réalité visuelle, renforçant ainsi votre présence sur tous les supports et donnant vie à une image de marque qui laisse une impression durable.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={community} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Gestion des Réseaux Sociaux</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Gestion des Réseaux Sociaux</h2>
                                    <p className="mb-4">Nous cultivons des relations significatives avec votre audience pour faire croître votre influence numérique vers de nouveaux sommets.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-inner rounded-xl shadow-xl">
                                <div className="box-front flex flex-col items-center justify-center">
                                    <img src={uxDesign} alt="" className="w-1/2" />
                                    <h2 className="font-bold text-xl">Publicités en ligne</h2>
                                </div>
                                <div className="box-back py-4 px-10">
                                    <h2 className="font-bold text-xl mb-4">Publicités en ligne</h2>
                                    <p className="mb-4">Nous concevons des campagnes publicitaires stratégiques, optimisées pour chaque plateforme, pour maximiser votre impact et générer des résultats tangibles.</p>
                                    <p className="text-blue-700 font-bold">En Savoir Plus</p>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>

                <div className='page page_4 flex items-center justify-center text-white pt-12' id="page5">
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='fade-right px-6'>
                            <h2 className='text-md uppercase text-center lg:text-start text-[#188FA7] font-bold'>pourquoi choisir M&V digital Developpement ?</h2>
                            <div className='2xl:my-8 my-2 flex justify-center items-center lg:block lg:mt-2'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-center text-3xl text-[#041e42] font-bold">Une communication par des <span className="text-[#188FA7]">pros</span>, pour des <span className="text-[#188FA7]">pros</span></h1>

                            <div className="items-center justify-center">
                                <div className="flex flex-col rounded-2xl my-8 p-4 text-black border-[1px] border-[#188FA7] shadow-xl">
                                    <h1 className="text-4xl text-center pb-12 font-bold uppercase">Expertise</h1>
                                    <p className="py-2 2xl:py-4 text-center">Bénéficiez des compétences et du savoir-faire d’experts en communication pour propulser votre activité.</p>
                                    <div className="flex justify-center py-12">
                                        <button className="btn 2xl:mb-4 rounded-full px-16 glass bg-[#188FA7] text-white normal-case">En Savoir Plus</button>
                                    </div>
                                </div>

                                <div className="flex flex-col rounded-2xl my-8 p-4 text-black border-[1px] border-[#188FA7] shadow-xl">
                                    <h1 className="text-4xl text-center pb-12 font-bold uppercase">Créativité</h1>
                                    <p className="py-2 2xl:py-4 text-center">Des visuels et des messages impactants pour montrer le meilleur de votre entreprise.</p>
                                    <div className="flex justify-center py-12">
                                        <button className="btn 2xl:mb-4 rounded-full px-16 glass bg-[#188FA7] text-white normal-case">En Savoir Plus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-gradient-to-r from-[#188FA7] to-blue-300 flex flex-col justify-center" id="contact5">
                            <h1 className="text-center 2xl:text-6xl text-4xl font-bold text-white">Echangez gratuitement avec un expert</h1>
                            <div className="flex flex-col justify-center items-center 2xl:mt-24 mt-12">
                                <button className="btn mb-6 rounded-full px-16 btn-outline text-white">En savoir plus</button>
                                <button className="btn mb-12 rounded-full px-16 bg-red-400 border-red-400 text-white">Contactez-nous</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}