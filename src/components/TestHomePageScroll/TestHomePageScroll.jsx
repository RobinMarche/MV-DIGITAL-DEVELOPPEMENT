import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useRef } from "react";
import smile from '../../assets/femme.jpg';
import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import arrow from '../../assets/move-right.png';
import badgeCheck from '../../assets/badge-check.png';
import Service1 from '../../assets/web_web_mobile.jpg';
import Service2 from '../../assets/phone.jpg';
import Service3 from '../../assets/34109.jpg';
import Service4 from '../../assets/pubRS.jpg';
import contact from '../../assets/40001.jpg';
import fleche from '../../assets/fleche.svg';
import banniereRS from '../../assets/banniere_logo_RS.svg';

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

            <div id='container' ref={containerRef} style={{ scrollBehavior: 'smooth' }} className="relative">
                <div className='page page_1' id="page1">
                    <div className='h-[100vh] h-[100vh] flex flex-col pt-16 2xl:pt-32 text-gray-900'  id='hero'>
                        <h2 className="pt-12 text-center uppercase text-[#188FA7] mb-4 font-bold mx-8">M&V Digital Developpement - au service des pros</h2>
                        <h1 className="text-center text-4xl lg:text-6xl 2xl:text-7xl font-bold mx-8 lg:mx-48 xl:mx-80 text-[#041e42]">L&apos;agence de communication <br /> dédiée aux</h1>
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
                    <div className='flex flex-col 2xl:pt-8 pt-4 text-gray-900 flex flex-col items-center mb-24' id="price">
                        <h2 className='text-5xl 2xl:text-6xl mx-[15vw] font-bold text-center my-8 text-[#041e42] py-12 shadowtext'>Les <span className="text-[#188FA7]">meilleures</span> offres adaptées à votre activité et à votre budget</h2>
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
                                    <Link to="/services/web">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-2xl w-[35vw]">
                                <h1 className="text-center text-xl 2xl:text-2xl text-[#188FA7]" id="font-menu">Réseaux sociaux</h1>
                                <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                                <div className="flex justify-center items-center">
                                    <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase text-[#188FA7]" id="font-price">149.99€</p>
                                    <div className="text-2xl text-[#188FA7] ml-2" id="">
                                        <p>par</p>
                                        <p>mois</p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-6 text-lg 2xl:text-2xl text-center">
                                    <p className="">Développez votre notoriété et gagnez en <br /> crédibilité pour attirer de nouveaux clients.</p>
                                </div>
                                <div className="flex justify-center my-2 2xl:my-6">
                                    <Link to="/services/gestion-rs">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div className="bg-white rounded-2xl p-8 shadow-2xl w-[85vw] mt-12 flex items-center justify-around" id="pub">
                                <div className="my-12 mx-12">
                                    <h1 className="text-center text-xl 2xl:text-2xl text-[#188FA7]" id="font-menu">Vos publicités en ligne</h1>
                                    <h1 className="text-center text-lg mt-8 uppercase tracking-widest">A Partir De</h1>
                                    <div className="flex justify-center items-center">
                                        <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase text-[#188FA7]" id="font-price">130€</p>
                                        <div className="text-2xl text-[#188FA7] ml-2" id="">
                                            <p>par</p>
                                            <p>mois</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center my-2 2xl:my-6">
                                        <Link to="/services/web">
                                            <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-w-[25vw] text-center text-xl mx-8">
                                        <h1 className="mb-8 text-2xl text-red-400" id="font-menu">Propulsez votre visibilité !</h1>
                                        <p>
                                            La publicité en ligne offre une visibilité mondiale ou ciblée, une mesure précise des performances et une flexibilité budgétaire, essentielle à la croissance de toute entreprise dans l&apos;économie numérique.
                                        </p>
                                    </div>
                                    <div className="text-2xl text-[#188fa7]" id="font-menu">
                                        <img src={banniereRS} alt="banniere_RS" className="w-[30vw]" />
                                    </div>
                                </div>
                                

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
                            <h1 className="text-5xl 2xl:text-7xl text-[#041e42] font-bold">Votre <span className="text-[#188FA7]">Réussite</span>, <br /></h1>
                            <h1 className="text-5xl 2xl:text-7xl text-[#041e42] font-bold ml-36">Notre Métier</h1>
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

                <div className='page page_3 w-[100vw] mb-24' id="page4bg">
                    <div className='text-start mt-12'>
                        <div className="flex justify-center items-center">
                            <h1 className='text-6xl 2xl:text-7xl w-[70vw] text-center 2xl:mt-16' id="title-help">Comment pouvons nous <br />vous <span className="text-[#188FA7] font-bold"> aider</span> ?</h1>
                        </div>
                    </div>
                    
                    <div className="flex h-[60vh] justify-center mt-16">
                       <div className="flex">
                            <div className="rounded-xl w-[20vw] mr-8 flex flex-col items-center justify-between relative overflow-hidden" id="service1">
                                <img src={Service1} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_service1"/>
                                <p className="font-bold text-xl text-white z-0 pt-8 text-center">Site Web et Web Mobile</p>
                                <button className="btn rounded-full bg-red-400 border-red-400 text-white z-0 mb-8">en savoir plus <img src={arrow} alt="" /></button>
                            </div>
                            
                            <div className="rounded-xl w-[20vw] flex flex-col items-center justify-between relative overflow-hidden" id="service2">
                                <img src={Service2} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_service1"/>
                                <p className="font-bold text-xl text-white z-0 pt-8 text-center">Gestion des Réseaux Sociaux</p>
                                <button className="btn rounded-full bg-red-400 border-red-400 text-white z-0 mb-8">en savoir plus <img src={arrow} alt="" /></button>
                            </div>
                       </div>

                       <div className="ml-8">
                            <div className="rounded-xl h-[28vh] w-[25vw] mb-[32px] flex flex-col justify-between relative overflow-hidden" id="service3">
                                <img src={Service3} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_service1"/>
                                <p className="font-bold text-xl text-white z-0 p-8">Logo et Supports Imprimés</p>
                                <div className="z-0 p-8">
                                    <button className="btn rounded-full bg-red-400 border-red-400 text-white">en savoir plus <img src={arrow} alt="" /></button>
                                </div>
                            </div>

                            <div className="rounded-xl h-[28vh] w-[25vw] flex flex-col justify-between relative overflow-hidden" id="service4">
                                <img src={Service4} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_service1"/>
                                <p className="font-bold text-xl text-white z-0 p-8">Publicités en ligne</p>
                                <div className="z-0 p-8">
                                    <button className="btn rounded-full bg-red-400 border-red-400 text-white">en savoir plus <img src={arrow} alt="" /></button>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>


                <div className='page page_4' id="page5">
                    <div className='text-start mt-12'>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className='text-lg uppercase text-center mt-8 text-[#188FA7]'>pourquoi choisir M&V Digital Developpement ?</h2>
                            <h1 className='text-6xl 2xl:text-7xl w-[70vw] text-center' id="title-help">une communication par des<span className="text-[#188FA7] font-bold"> pros</span>, <br />pour des<span className="text-[#188FA7] font-bold"> pros</span></h1>
                        </div>
                    </div>
                    <div className="mx-12 xl:mx-48 flex justify-center items-center mt-12">
                        <div className="m-8 p-8 rounded-xl" id="bg-creation">
                            <h1 className="font-bold text-4xl" id="subtitle">Expertise</h1>
                            <p className="my-4 xl:w-2/3 text-xl">Bénéficiez des compétences et du savoir-faire d&apos;experts pour propulser votre activité.</p>
                            <button className="btn glass bg-[#188fa7] rounded-full text-white mt-8 mb-12">En savoir plus</button>
                        </div>

                        <div className="m-8 p-8 rounded-xl" id="bg-creation2">
                            <h1 className="font-bold text-4xl" id="subtitle">Créativité</h1>
                            <p className="my-4 xl:w-2/3 text-xl">Des visuels et des messages impactants pour montrer le meilleur de votre entreprise.</p>
                            <button className="btn glass bg-[#188fa7] rounded-full text-white mt-8 mb-12">En savoir plus</button>
                        </div>
                    </div>
                    <div className="mx-20 xl:mx-56 p-8 bg-[#188fa7] rounded-2xl text-[#188fa7]" id="bgcreation3">
                        <h1 className="text-center text-5xl font-bold mt-12 mb-24" id="subtitle">Échangez gratuitement <br />avec un expert</h1>
                        <div className="flex flex-col justify-center mt-12 items-center">
                            <button className="btn btn-outline rounded-full border-[#188fa7] text-[#188fa7] px-14 text-lg mb-6">En savoir plus</button>
                            <button className="btn rounded-full px-12 text-lg mb-12 bg-red-400 text-white border-red-400">Contactez-nous</button>
                        </div>
                    </div>
                    
                </div>


                <div className="relative h-[110vh] mt-24">
                    <img src={contact} alt="contact" className="w-[70vw] xl:w-[60vw] 2xl:w-[50vw] ml-[10vw] xl:ml-[20vw] absolute rounded-2xl"/>
                    <img src={fleche} alt="contact" className="w-[15vw] xl:w-[20vw] top-[55vh] 2xl:w-[15vw] ml-[10vw] xl:ml-[25vw] absolute rounded-2xl"/>

                    <div className="flex absolute ml-[30vw] xl:ml-[45vw] top-[20vh] bg-white py-8 px-24 flex flex-col border-[1px] border-gray-300 rounded-xl">
                        <h2 className="text-3xl font-bold text-[#188fa7]" id="subtitle">Contactez-nous</h2>
                        <p className="mt-6 mb-12 text-[#188fa7]">Remplissez ce formulaire pour être contacté par l&apos;un de nos experts</p>
                        <form>
                            <div className="flex mb-12">
                                <div className="flex flex-col mr-8">
                                    <label htmlFor="name">Nom et Prénom*</label>
                                    <input type="text" id="name" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name">Nom de l&apos;entreprise</label>
                                    <input type="text" id="name" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none"/>
                                </div>
                            </div>

                            <div className="flex mb-12">
                                <div className="flex flex-col mr-8">
                                    <label htmlFor="name">Téléphone*</label>
                                    <input type="text" id="name" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name">Adresse Mail*</label>
                                    <input type="text" id="name" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none"/>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message">Votre Message*</label>
                                <textarea name="message" id="message" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none min-h-[10vh]"></textarea>
                            </div>

                            <div className="flex justify-center mt-8">
                                <button className="btn glass rounded-full bg-[#188fa7] text-white px-12">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}