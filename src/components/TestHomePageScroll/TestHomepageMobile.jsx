import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useRef } from "react";
import smile from '../../assets/femme.jpg';
import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import check from '../../assets/check.png';
import chart from '../../assets/bar-chart-3.png';
import arrow from '../../assets/move-right.png';
import badgeCheck from '../../assets/badge-check.png';
import Service1 from '../../assets/web_web_mobile.jpg';
import Service2 from '../../assets/phone.jpg';
import Service3 from '../../assets/34109.jpg';
import Service4 from '../../assets/pubRS.jpg';
import contact from '../../assets/40001.jpg';
import banniereRS from '../../assets/banniere_logo_RS.svg';

import emailjs from '@emailjs/browser';



export default function TestHomePageMobile() {

    const [displayText, setDisplayText] = useState('');
    const [messageForm, setMessageForm] = useState('');

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

      
      const form = useRef();
      
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "MV_Digital_FORM",
            "template_a2um0he",
            form.current,
            "axsoEjorY55q6cjMx"
          )
          .then(
            (result) => {
              setMessageForm("Votre message a bien été envoyé !");
              console.log(result.text);
              setTimeout(() => {
                setMessageForm("");
                form.current.reset();
              }, 3000);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };




    return(
        <>

            <div id='' style={{ scrollBehavior: 'smooth' }}>
                <div className='page page_1' id="page1">
                    <div className='lg:h-[100vh] h-[100vh] flex flex-col text-gray-900 '  id='hero'>
                        <h2 className="pt-12 text-center uppercase text-[#188FA7] mb-4 font-bold mx-8">M&V Digital Developpement - au service des pros</h2>
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
                        <h2 className='text-4xl mx-[10vw] font-bold text-center my-8 text-gray-900 pt-12 shadowtext'>Les <span className="text-[#188FA7]">meilleures</span> offres adaptées à votre budget</h2>
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
                                    <Link to="/contact">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                    </Link>
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
                                    <Link to="/contact">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-2xl m-8">
                            <div className="flex flex-col items-center justify-around" id="pub">
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
                                    <div className="flex justify-center mt-8 2xl:my-6">
                                        <Link to="/services/publicites">
                                            <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /> </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center text-xl mx-4">
                                    <h1 className="mb-8 text-2xl text-red-400" id="font-menu">Propulsez votre visibilité !</h1>
                                    <p>
                                        La publicité en ligne offre une visibilité essentielle à la croissance de toute entreprise dans l&apos;économie numérique.
                                    </p>
                                </div>
                                <div className="text-2xl text-[#188fa7] flex flex-col justify-center items-center mt-4" id="font-menu">
                                    <img src={banniereRS} alt="" />
                                </div>
                                

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

                
                <div className='page page_3 w-[100vw] mb-24' id="page4bg">
                    <div className='text-start mt-12'>
                        <div className="flex justify-center items-center">
                            <h1 className='text-4xl 2xl:text-7xl w-[70vw] text-center 2xl:mt-16' id="title-help">Comment pouvons nous vous <span className="text-[#188FA7] font-bold"> aider</span> ?</h1>
                        </div>
                    </div>
                    
                    <div className="justify-center mt-16 flex flex-col mx-8">
                       <div className="">
                            <div className="rounded-xl h-[28vh] mb-[32px] flex flex-col justify-between relative overflow-hidden" id="service1">
                                <img src={Service1} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_serviceMobile"/>
                                <p className="font-bold text-xl text-white z-0 p-8">Site Web et Web Mobile</p>
                                <div className="z-0 p-8">
                                    <Link to="/services/web">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white z-0">en savoir plus <img src={arrow} alt="" /></button>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="rounded-xl h-[28vh] mb-[32px] flex flex-col justify-between relative overflow-hidden" id="service2">
                                <img src={Service2} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_serviceMobile"/>
                                <p className="font-bold text-xl text-white z-0 p-8">Gestion des Réseaux Sociaux</p>
                                <div className="z-0 p-8">
                                    <Link to="/services/gestion-rs">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white z-0">en savoir plus <img src={arrow} alt="" /></button>
                                    </Link>
                                </div>
                            </div>
                       </div>

                       <div className="">
                            <div className="rounded-xl h-[28vh] mb-[32px] flex flex-col justify-between relative overflow-hidden" id="service3">
                                <img src={Service3} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_serviceMobile"/>
                                <p className="font-bold text-xl text-white z-0 p-8">Logo et Supports Imprimés</p>
                                <div className="z-0 p-8">
                                    <Link to="/services/print">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white">en savoir plus <img src={arrow} alt="" /></button>
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-xl h-[28vh] flex flex-col justify-between relative overflow-hidden" id="service4">
                                <img src={Service4} alt="" className="object-cover absolute w-full h-full -z-1 rounded-xl" id="img_serviceMobile"/>
                                <p className="font-bold text-xl text-white z-0 p-8">Publicités en ligne</p>
                                <div className="z-0 p-8">
                                    <Link to="/services/publicites">
                                        <button className="btn rounded-full bg-red-400 border-red-400 text-white">en savoir plus <img src={arrow} alt="" /></button>
                                    </Link>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>



                <div className='page page_4' id="page5">
                    <div className='text-start mt-6'>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className='text-lg uppercase text-center mt-8 text-[#188FA7]'>pourquoi choisir M&V Digital Developpement ?</h2>
                            <h1 className='text-3xl mx-8 mt-4 text-center' id="title-help">une communication par des<span className="text-[#188FA7] font-bold"> pros</span>, pour des<span className="text-[#188FA7] font-bold"> pros</span></h1>
                        </div>
                    </div>
                    <div className="mx-2 flex flex-col justify-center items-center mt-6">
                        <div className="m-4 p-8 rounded-xl text-center" id="bg-creation">
                            <h1 className="font-bold text-4xl" id="subtitle">Expertise</h1>
                            <p className="my-4 xl:w-2/3 text-xl">Bénéficiez des compétences et du savoir-faire d&apos;experts pour propulser votre activité.</p>
                            <Link to="/services">
                                <button className="btn glass bg-[#188fa7] rounded-full text-white mt-8 mb-12">En savoir plus</button>
                            </Link>
                        </div>

                        <div className="m-4 p-8 rounded-xl text-center" id="bg-creation2">
                            <h1 className="font-bold text-4xl" id="subtitle">Créativité</h1>
                            <p className="my-4 xl:w-2/3 text-xl">Des visuels et des messages impactants pour montrer le meilleur de votre entreprise.</p>
                            <Link to="/services">
                                <button className="btn glass bg-[#188fa7] rounded-full text-white mt-8 mb-12">En savoir plus</button>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-6 p-8 bg-[#188fa7] rounded-2xl text-[#188fa7] mb-12" id="bgcreation3">
                        <h1 className="text-center text-4xl font-bold mt-12 mb-24" id="subtitle">Échangez gratuitement <br />avec un expert</h1>
                        <div className="flex flex-col justify-center mt-12 items-center">
                            <Link to="/services">
                                <button className="btn btn-outline bg-white rounded-full border-[#188fa7] text-[#188fa7] px-14 text-lg mb-6">En savoir plus</button>
                            </Link>
                            <Link to="/contact">
                                <button className="btn rounded-full px-12 text-lg mb-12 bg-red-400 text-white border-red-400">Contactez-nous</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>


                <div className="relative mt-24 mb-12">
                    <div className="flex justify-center">
                        <img src={contact} alt="contact" className="w-[90vw] rounded-tl-[50%] rounded-br-[50%]"/>
                    </div>
                    <div className="flex bg-white py-8 px-6 flex flex-col border-[1px] border-gray-300 mt-4 mx-4">
                        <h2 className="text-3xl font-bold text-[#188fa7]" id="subtitle">Contactez-nous</h2>
                        <p className="mt-6 mb-12 text-[#188fa7]">Remplissez ce formulaire pour être contacté par l&apos;un de nos experts</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-col">
                                <div className="flex flex-col mr-8">
                                    <label htmlFor="name">Nom et Prénom*</label>
                                    <input type="text" id="name" name="name" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none" required/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name">Nom de l&apos;entreprise <span className="italic text-gray-500">(facultatif)</span></label>
                                    <input type="text" id="name" name="company" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none"/>
                                </div>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-col mr-8">
                                    <label htmlFor="name">Téléphone*</label>
                                    <input type="text" id="name" name="phone" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none" required/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name">Adresse Mail*</label>
                                    <input type="text" id="name" name="mail" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none" required/>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message">Votre Message*</label>
                                <textarea name="message" id="message" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none min-h-[10vh]" required></textarea>
                            </div>

                            <div className="flex justify-center mt-8">
                                <button className="btn glass rounded-full bg-[#188fa7] text-white px-12">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>

                {messageForm !== "" && 
                    <div className="toast">
                        <div className="m-4 shadow-inner px-12 py-6 rounded-none bg-green-100 border-b-[2px] border-[#188fa7] flex items-center">
                            <span className="mr-4">{messageForm}</span>
                            <img src={check} alt="check" />
                        </div>
                    </div>
                }

            </div>
        </>
    )
}