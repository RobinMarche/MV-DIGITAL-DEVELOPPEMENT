import { useState, useEffect } from 'react';

export default function ContactHomepage() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY || window.pageYOffset);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <div className="mt-10 flex flex-col justify-center items-center">
        <div className="px-4 flex flex-col items-center justify-center lg:w-1/2 pb-10 m-4" id='contact'>
            <div>
                <h1 className="text-3xl uppercase text-center lg:text-start">Vous avez un projet ? Contactez-nous !</h1>
                <div className='my-8 flex justify-center items-center lg:block lg:mt-2'>
                        <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                </div>
            </div>
            <div>
                <p className="text-center">
                    Vous avez une idée de projet ? Vous souhaitez en savoir plus sur nos services ? N&apos;hésitez pas à nous contacter pour plus d&apos;informations.
                </p>
                
            </div>

        </div>

        <div className="flex justify-between flex-col lg:flex-row" id='filigrane'>
            <div className='flex flex-col items-center lg:mt-12 lg:mr-48  lg:pl-24'>
                <div className={`flex flex-col justify-center items-center border mb-8 px-8 py-16 w-[60vw] xl:w-[20vw] rounded-xl rounded-tr-[50%] shadow-xl lg:w-auto lg:mr-16 bg-white text-black ${scrollY > 2500 ? 'fade-in3' : 'slideOffRight2'}`}>
                    <p>06.33.90.40.50</p>
                    <p>06.81.74.23.42</p>
                    <p>mvdigital3989@gmail.com</p>
                </div>
                <div className={`flex flex-col justify-center items-center border px-8 py-16 w-[60vw] xl:w-[20vw] rounded-xl rounded-bl-[50%] shadow-xl lg:w-auto bg-white text-black bg-blue-400 ${scrollY > 2900 ? 'fade-in3' : 'slideOffRight2'}`}>
                    <p>Du Lundi au Vendredi</p>
                    <p>9h - 18h</p>
                    <p>Sur rendez-vous</p>
                </div>
            </div>
            <div className='p-8'>
                <h2 className="text-xl text-center px-12 lg:px-0">Remplissez notre formulaire de contact, nous vous garantissons une réponse sous 24h</h2>
                <form className="w-full flex flex-col">
                    <div className="mx-16 md:mx-48 lg:mx-0">
                        <div className={`bg-white flex items-center border border-[#022e60] rounded-full py-2 my-8 ${scrollY > 2500 ? 'slideInRight3' : 'slideOffRight3'}`}>
                            <input className={`appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none`} type="text" placeholder="Votre Nom" aria-label="Full name"/>
                        </div>
                        <div className={`bg-white flex items-center border border-[#022e60] rounded-full py-2 ${scrollY > 2600 ? 'slideInRight3' : 'slideOffRight3'}`}>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none" type="text" placeholder="Votre Mail" aria-label="Mail"/>
                        </div>
                    </div>
                    <div className="mx-16 md:mx-48 lg:mx-0">
                        <div className={`bg-white flex items-center border border-[#022e60] rounded-full py-2 my-8 ${scrollY > 2700 ? 'slideInRight3' : 'slideOffRight3'}`}>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none" type="text" placeholder="Téléphone" aria-label="Phone"/>
                        </div>
                        <div className={`bg-white flex items-center border border-[#022e60] rounded-2xl py-2 mb-8 ${scrollY > 2800 ? 'slideInRight3' : 'slideOffRight3'}`}>
                            <textarea className="bg-transparent border-none w-full text-gray-700 py-1 px-4 leading-tight focus:outline-none min-h-[20vh]" type="text" placeholder="Votre Message ..." aria-label="Message"></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center mb-24">
                        <button className="btn bg-[#022a60] text-white rounded-full">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}