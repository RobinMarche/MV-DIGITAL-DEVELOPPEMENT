import { useState, useEffect } from 'react';
import envelopes from '../../assets/envelopes.png';
import clock from '../../assets/clock-three.png';
import mobile from '../../assets/mobile-notch.png';
import show from '../../assets/show.jpg';

export default function ContactPage() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);


  return (
    <>
        <div className='lg:m-16 lg:pt-20 lg:p-20 p-8 pt-12 m-6 rounded-2xl bg-[#188FA7]'>
            <div>
                <p className='text-center lg:text-start text-white'>Contact</p>
            </div> 
            <div className='lg:text-6xl lg:uppercase my-12 text-center lg:text-start text-4xl text-white font-bold'>
                Discutons de votre projet !
            </div>
            <div className='lg:flex lg:justify-around bg-gray-200/[0.4] lg:py-24 rounded-2xl text-white'>
                <div className='flex flex-col justify-center items-center py-12 lg:py-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={clock} alt="clock" className='' />
                        <p className='text-lg font-bold lg:my-8'>Horaires d&apos;ouverture</p>
                    </div>
                    <div className='text-center'>
                        <p>Du Lundi au vendredi</p>
                        <p>De 9h à 18h</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center py-12 lg:py-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={envelopes} alt="envelopes" className='' />
                        <p className='text-lg font-bold lg:my-8'>Adresse Mail</p>
                    </div>
                    <div className='text-center'>
                        <p>mvdigital3989@gmail.com</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center py-12 lg:py-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={mobile} alt="mobile" className=''/>
                        <p className='text-lg font-bold lg:my-8'>Téléphone</p>
                    </div>
                    <div className='text-center'>
                        <p>06.33.90.40.50</p>
                        <p>06.81.74.23.42</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='my-12 px-8'>
            <div className='text-center mb-6'>
            <h1 className="text-center text-lg mt-8 uppercase tracking-widest">Parlons en</h1>
                <h1 className='text-3xl my-4 font-bold text-[#188FA7]'>Envoyez nous votre message</h1>
                <p>Vous avez une idée de projet ? Vous souhaitez en savoir plus sur nos services ? N&apos;hésitez pas à nous contacter pour plus d&apos;informations.</p>
            </div>

            <div className='mt-4 lg:flex lg:justify-around xl:items-center'>
                <div className='lg:w-[50%]'>
                    <img src={show} alt="show" className='rounded-2xl lg:h-[100%]' />
                </div>
                <div>
                    <form className="w-full flex flex-col">
                        <div className="mx-6 lg:mx-0">
                            <div className={`bg-white flex items-center border border-[#022e60] rounded-xl py-2 my-8`}>
                                <input className={`appearance-none bg-transparent border-none w-full lg:w-[40vw] text-gray-700 py-1 px-4 leading-tight focus:outline-none`} type="text" placeholder="Votre Nom" aria-label="Full name"/>
                            </div>
                            <div className={`bg-white flex items-center border border-[#022e60] rounded-xl py-2`}>
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none" type="text" placeholder="Votre Mail" aria-label="Mail"/>
                            </div>
                        </div>
                        <div className="mx-6 lg:mx-0">
                            <div className={`bg-white flex items-center border border-[#022e60] rounded-xl py-2 my-8`}>
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none" type="text" placeholder="Téléphone" aria-label="Phone"/>
                            </div>
                            <div className={`bg-white flex items-center border border-[#022e60] rounded-2xl py-2 mb-8`}>
                                <textarea className="bg-transparent border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none min-h-[20vh]" type="text" placeholder="Votre Message ..." aria-label="Message"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center mb-12">
                            <button className="btn my-8 rounded-full px-16 bg-red-400 border-red-400 text-white">Contactez-nous</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    </>
  );
}