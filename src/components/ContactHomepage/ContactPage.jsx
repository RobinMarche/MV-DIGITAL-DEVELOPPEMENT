import { useState, useEffect, useRef } from 'react';
import envelopes from '../../assets/envelopes.png';
import clock from '../../assets/clock-three.png';
import mobile from '../../assets/mobile-notch.png';
import show from '../../assets/show.jpg';
import check from '../../assets/check.png';
import emailjs from '@emailjs/browser';


export default function ContactPage() {

    const [messageForm, setMessageForm] = useState('');


    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
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


  return (
    <>
        <div className='lg:mx-48 lg:mt-12 lg:pt-20 lg:p-20 p-8 pt-12 m-6 rounded-2xl bg-[#188FA7]' id='contact_bg'>
            <div>
                <p className='text-center lg:text-start text-white'>Contact</p>
            </div> 
            <div className='lg:text-6xl lg:uppercase my-12 text-center lg:text-start text-4xl text-white font-bold'>
                Discutons de votre projet !
            </div>
            <div className='lg:flex lg:justify-around items-start bg-black/[0.7] lg:py-12 rounded-2xl text-white'>
                <div className='flex flex-col justify-center items-center py-12 lg:py-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={clock} alt="clock" className='' />
                        <p className='text-lg font-bold lg:my-8 text-[#188fa7]'>Horaires d&apos;ouverture</p>
                    </div>
                    <div className='text-center'>
                        <p>Du Lundi au vendredi</p>
                        <p>De 9h à 18h</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center py-12 lg:py-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={envelopes} alt="envelopes" className='' />
                        <p className='text-lg font-bold lg:my-8 text-[#188fa7]'>Adresse Mail</p>
                    </div>
                    <div className='text-center'>
                        <p>mvdigital3989@gmail.com</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center py-12 lg:py-0'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={mobile} alt="mobile" className=''/>
                        <p className='text-lg font-bold lg:my-8 text-[#188fa7]'>Téléphone</p>
                    </div>
                    <div className='text-center'>
                        <p>06 33 90 40 50</p>
                        <p>06 81 74 23 42</p>
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
                <div className="flex bg-white py-8 px-12 flex flex-col  border-gray-300 rounded-xl">
                        <h2 className="text-3xl font-bold text-[#188fa7]" id="subtitle">Contactez-nous</h2>
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
  );
}