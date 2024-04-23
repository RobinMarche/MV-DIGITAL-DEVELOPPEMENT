import imgLanding from '../../assets/imgLanding.png';
import logo from '../../assets/logoMV.svg';
import sparkles from '../../assets/sparkles.svg';
import telescope from '../../assets/telescope.svg';
import rocket from '../../assets/rocket.svg';
import clock from '../../assets/clock.svg';
import phone from '../../assets/phone.png';
import show from '../../assets/show.jpg';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import check from '../../assets/check.png';
import website from '../../assets/977.svg';


import { Link } from 'react-router-dom';

export default function LandingPage() {

    const [messageForm, setMessageForm] = useState('');


    const form = useRef();
      
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_qba6i34",
            "template_oofhvb8",
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
    
    return (
        <>
            {/* <div className='flex items-center justify-center lg:justify-between px-12 py-4 lg:py-2'>
                <img src={logo} alt="logo" className='w-[7vw] xl:w-[6vw] hidden lg:block'/>
                <div className='flex items-center jusstify-center'>
                    <img src={phone} alt="phone" className='mr-2'/>
                    <p>06 81 74 23 42 / 06 33 90 40 50</p>
                </div>
            </div>
            <div className='h-[1px] bg-[#188fa7] mx-12'></div> */}
            <div className="text-blue-800 " >
                <div className='flex flex-col lg:flex-row lg:items-center px-8 xl:px-12 h-[100vh]' id='page2'>
                    <div className='xl:px-12 px-2 lg:max-w-[50vw]'>
                        <div className='flex justify-center'>
                            <img src={logo} alt="logo" className='w-1/4 mb-6' />
                        </div>
                        <div className='relative inline-block flex flex-col justify-center'>
                            <h1 className='text-4xl xl:text-6xl font-bold capitalize text-center'>Votre succès en ligne</h1>
                            <div className='relative inline-block flex justify-center xl:block'>
                                <span className='absolute bottom-0 left-[25%] xl:left-[25%] xl:w-[50%] w-[50%] h-[30%] bg-[#5ce1e6] -z-1'></span>
                                <h1 className='text-4xl xl:text-6xl font-bold capitalize relative text-center'>commence ici</h1>
                            </div>
                        </div>

                        <div className='lg:hidden w-full flex justify-center'>
                            <img src={imgLanding} alt="imgLanding" className='w-[100vw] md:w-1/2'/>
                        </div>

                        <div className='flex flex-col justify-start items-start lg:mt-12'>
                            <div className='flex items-center'>
                                <img src={sparkles} alt="check" className='mr-2' />
                                <p className='text-xl font-bold' id='subtitle'>Création et refonte de site internet sur mesure</p>
                            </div>
                            <div className='flex items-center'>
                                <img src={sparkles} alt="check" className='mr-2 my-4' />
                                <p className='text-xl font-bold' id='subtitle'>Gestion de vos réseaux sociaux</p>
                            </div>
                            <div className='flex items-center'>
                                <img src={sparkles} alt="check" className='mr-2' />
                                <p className='text-xl font-bold' id='subtitle'>Lancement de campagnes publicitaires</p>
                            </div>
                        </div>

                        <p className='mt-12 text-lg text-center lg:text-start leading-10'>
                        Que vous ayez besoin d&apos;un <span className='text-[#ff66c4] font-bold' id='subtitle'>Site Internet</span> , d&apos;une <span className='text-[#ff66c4] font-bold' id='subtitle'>Gestion de vos Réseaux Sociaux</span>, de la <span className='text-[#ff66c4] font-bold' id='subtitle'>Création de publicités</span> en ligne, ou de toutes ces solutions réunies,</p>

                        <p className='font-bold italic text-2xl text-center my-2'>Nous avons la solution pour vous !</p>


                        <div className='flex flex-col justify-center mt-6 items-center'>
                            <p className='mb-8 font-bold text-lg' id='subtitle'>A partir de <span className='text-2xl'>49,99 €</span> !</p>
                            <a href="#contact">
                                <button className='btn glass rounded-full bg-[#ff66c4] px-16 h-[10vh] border-none text-white text-3xl normal-case hover:bg-[#188fa7] hover:glass'>Contactez-nous !</button>
                            </a>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={imgLanding} alt=""/>
                    </div>
                </div>


                <div className='mt-12 mb-24 px-8 xl:px-12'>
                    <div className='flex justify-center lg:justify-start lg:px-12'>
                        <div className='relative inline-block'>
                            <span className='absolute bottom-0 left-0 w-[100%] h-[35%] bg-[#5ce1e6] -z-1'></span>
                            <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold relative'>Soyez dans l&apos;ère du temps</h1>
                        </div>
                    </div>
                    <div className='mt-6 lg:mt-12 lg:flex lg:justify-around md:px-24 lg:px-0'>
                        <div className='shadow-2xl p-12'>
                            <img src={telescope} alt="views" className='bg-[#188fa7] rounded-full p-2 mb-4 w-[19%] lg:w-[14%] md:w-[10%]'/>
                            <p className='text-xl font-bold'>Augmentez votre visibilité</p>
                            <p>Attirer davantage de clients pour maximiser votre rentabilité</p>
                        </div>
                        <div className='shadow-2xl p-12 my-8 lg:my-0'>
                            <img src={rocket} alt="views" className='bg-[#ff66c4] rounded-full p-2 mb-4 w-[19%] lg:w-[14%] md:w-[10%]'/>
                            <p className='text-xl font-bold'>Boostez votre activité</p>
                            <p>Grâce à votre site internet clé en main prêt à l&apos;emploi</p>
                        </div>
                        <div className='shadow-2xl p-12'>
                            <img src={clock} alt="views" className='bg-[#fd9426] rounded-full p-2 mb-4 w-[19%] lg:w-[14%] md:w-[10%]'/>
                            <p className='text-xl font-bold'>Optimisez votre temps</p>
                            <p>Grâce à notre équipe totalement dévouée à votre projet</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-20'>
                        <Link to="/services">
                            <button className='btn bg-[#fd9426] rounded-full glass px-12 text-white normal-case text-xl'>En savoir plus</button>
                        </Link>
                    </div>
                </div>


                <div className='my-12 px-8 xl:px-12'>
                    {/* <div className='flex justify-center lg:justify-start lg:px-12'>
                        <div className='relative inline-block'>
                            <span className='absolute bottom-0 left-0 w-[100%] h-[35%] bg-[#ff66c4] -z-1'></span>
                            <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold relative'>Donnez vie à vos idées</h1>
                        </div>
                    </div> */}

                    <div>
                        <div className='lg:flex lg:flex-row mt-12 lg:justify-center'>
                            <div className='text-center lg:text-start px-8 lg:w-[50%]' >
                                <h2 className='mt-8 text-[#188FA7] uppercase'>Notre Mission</h2>
                                <h1 className='text-4xl lg:text-6xl mt-4 mb-4 text-blue-800 font-bold' id=''>Transformer vos idées en réalité</h1>
                                <div className='bg-white w-[10vw] h-[2px] lg:my-8 hidden lg:block'></div>
                                <div className='flex flex-col justify-around items-start my-12 text-[#188FA7]'>
                                    <div className='flex flex-row items-center justify-center'>
                                        <p className='text-3xl font-bold text-white bg-[#188fa7] rounded-full p-4 mr-4'>94%</p>
                                        <h1 className='md:text-xl text-blue-800'>des premières impressions sont liées au design du site web</h1>
                                    </div>
                                    <div className='h-[1px] bg-black w-[70vw] md:w-[30vw] my-8'></div>
                                    <div className='flex flex-row items-center justify-center'>
                                        <p className='text-3xl font-bold text-white bg-[#ff66c4] rounded-full p-4 mr-4'>75%</p>
                                        <h1 className='md:text-xl text-blue-800'> des consommateurs admettent juger la crédibilité d&apos;une entreprise à partir de la conception de son site web</h1>
                                    </div>
                                    <div className='h-[1px] bg-black w-[70vw] md:w-[30vw] my-8'></div>
                                    <div className='flex flex-row items-center justify-center'>
                                        <p className='text-3xl font-bold text-white bg-[#fd9426] rounded-full p-4 mr-4'>11%</p>
                                        <h1 className='md:text-xl text-blue-800'>Une refonte réussie du site peut entraîner une augmentation de 11% des taux de conversion</h1>
                                    </div>
                                    <div className='h-[1px] bg-black w-[70vw] md:w-[30vw] my-8'></div>
                                    <div className='flex flex-row items-center justify-center'>
                                        <p className='text-3xl font-bold text-white bg-[#041e42] rounded-full p-4 mr-4'>77%</p>
                                        <h1 className='md:text-xl text-blue-800'>des marques utilisent les médias sociaux pour atteindre leurs clients, et une grande partie de cette interaction contribue à la fidélisation de la clientèle</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <a href="#contact">
                                        <button className="btn bg-[#188fa7] rounded-full glass px-12 text-white normal-case text-xl">Contactez-nous</button>
                                    </a>
                                </div>
                            </div>
                            <div className='flex justify-center lg:w-[40%] mx-8 pb-8'>
                                <img src={website} alt="website" className='rounded-2xl hidden lg:block lg:w-[100%]' />
                            </div>
                        </div>
                    </div>
                </div>








                <div className='my-12 px-8 xl:px-12' id='contact'>
                    <div className='flex justify-center lg:px-12'>
                        <div className='relative inline-block'>
                            <span className='absolute bottom-0 left-0 w-[100%] h-[35%] bg-[#fd9426] -z-1'></span>
                            <h1 className='text-2xl lg:text-3xl xl:text-5xl font-bold relative'>Lancez-vous !</h1>
                        </div>
                    </div>
                    <div className='mt-6 lg:mt-12 lg:flex lg:justify-around md:px-24 lg:px-0'>
                    <div className='mt-4 lg:flex lg:justify-around xl:items-center'>
                <div className='lg:w-[40%]'>
                    <img src={show} alt="show" className='rounded-2xl lg:h-[100%]' />
                </div>
                <div className="flex bg-white py-8 px-10 flex flex-col  border-gray-300 rounded-xl">
                        <h2 className="text-3xl font-bold text-[#188fa7]" id="subtitle">Contactez-nous !</h2>
                        <p className="mt-6 mb-12 text-[#188fa7]">Remplissez ce formulaire pour être contacté par l&apos;un de nos experts</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex md:mb-12 flex-col md:flex-row">
                                <div className="flex flex-col md:mr-8 mb-4 md:mb-0">
                                    <label htmlFor="name">Nom et Prénom*</label>
                                    <input type="text" id="name" name="name" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none" required/>
                                </div>
                                <div className="flex flex-col mb-4 md:mb-0">
                                    <label htmlFor="name">Nom de l&apos;entreprise <span className="italic text-gray-500">(facultatif)</span></label>
                                    <input type="text" id="name" name="company" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none"/>
                                </div>
                            </div>

                            <div className="flex mb-12 flex-col md:flex-row">
                                <div className="flex flex-col md:mr-8 mb-4 md:mb-0">
                                    <label htmlFor="name">Téléphone*</label>
                                    <input type="text" id="name" name="phone" className="border-b-[1px] border-gray-300 p-2 mb-4 outline-none" required/>
                                </div>
                                <div className="flex flex-col mb-4 md:mb-0">
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
)}