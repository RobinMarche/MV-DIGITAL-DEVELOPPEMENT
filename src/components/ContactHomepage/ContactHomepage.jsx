import message from '../../assets/messages-question.png';
import calendar from '../../assets/daily-calendar.png';

export default function ContactHomepage() {
  return (
    <div className="lg:flex items-center justify-around">
        <div className="px-4 flex flex-col justify-center items-center lg:w-1/2 py-20 lg:text-white m-4" id="contact">
            <div>
                <h1 className="text-3xl uppercase text-center">Vous avez un projet ? Contactez-nous !</h1>
            </div>
            <div className='lg:bg-white bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw] mt-2 mb-16'></div>
            <div>
                <p className="text-center">
                    Vous avez un projet ? Vous souhaitez en savoir plus sur nos services ? N&apos;hésitez pas à nous contacter pour plus d&apos;informations.
                </p>
            </div>
            <div className='flex flex-col items-center lg:flex-row lg:justify-around'>
                <div className='flex flex-col justify-center items-center my-12 border p-4 w-[60vw] xl:w-[13vw] rounded-xl shadow-xl lg:w-auto lg:mr-16 bg-white text-black'>
                    <img src={message} alt="message" className='w-[10vw] lg:w-[5vw] mb-4'/>
                    <p>06.33.90.40.50</p>
                    <p>06.81.74.23.42</p>
                    <p>mvdigital3989@gmail.com</p>
                </div>
                <div className='flex flex-col justify-center items-center border p-4 w-[60vw] xl:w-[13vw] rounded-xl shadow-xl lg:w-auto bg-white text-black'>
                    <img src={calendar} alt="calendar" className='w-[10vw] lg:w-[5vw] mb-4'/>
                    <p>Du Lundi au Vendredi</p>
                    <p>9h - 18h</p>
                    <p>Sur rendez-vous</p>
                </div>
            </div>
        </div>

        <div className="lg:w-1/2 xl:px-48 lg:px-24">
            <form className="w-full flex flex-col">
                <div className="mx-16 md:mx-48 lg:mx-0">
                    <div className="flex items-center border-b border-[#022e60] py-2 my-8">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Votre Nom" aria-label="Full name"/>
                    </div>
                    <div className="flex items-center border-b border-[#022e60] py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Votre Mail" aria-label="Mail"/>
                    </div>
                </div>
                <div className="mx-16 md:mx-48 lg:mx-0">
                    <div className="flex items-center border-b border-[#022e60] py-2 my-8">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Téléphone" aria-label="Phone"/>
                    </div>
                    <div className="flex items-center border-b border-[#022e60] py-2 mb-8">
                        <textarea className="bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none min-h-[20vh]" type="text" placeholder="Votre Message ..." aria-label="Message"></textarea>
                    </div>
                </div>
                <div className="flex justify-center mb-24">
                    <button className="btn bg-[#022a60] text-white rounded-full">Envoyer</button>
                </div>
            </form>
        </div>
    </div>
  );
}