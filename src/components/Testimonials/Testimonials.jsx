import Ema from "../../assets/LogoEma_cmjn.jpg"
import logoAsphalt from "../../assets/logo_svg.png"
import LogoLogiworks from "../../assets/faviconLogo.png"
import { useState, useEffect } from 'react';

export default function Testimonials() {

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

        <div className="pb-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-0 flex flex-col justify-center items-center lg:mt-8">
          <div className="px-4 flex flex-col items-center justify-center lg:w-1/2 pb-10 m-4" id='contact'>
            <div>
              <h1 className={`text-5xl text-center lg:text-start ${scrollY > 2700 ? 'fade-in' : 'slideOffRight2'}`} id="title2">Ce que disent nos clients</h1>
              <div className={`my-8 flex justify-center items-center lg:block lg:mt-4 ${scrollY > 2700 ? 'slideInRight3' : 'slideOffRight3'}`}>
                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div
              className="row-span-2 rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-2xl"
            >
              <div className="flex h-full flex-col justify-center space-y-4">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={Ema}
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="md:text-xl">
                  <span className="font-serif">&quot;</span> Un immense merci pour le magnifique site internet que vous avez créé !! Votre passion pour votre métier transparaît dans chaque détail de notre site, ce qui le rend vraiment unique. Je suis ravie d&apos;avoir collaboré avec une équipe aussi professionnelle et dévouée. Je recommande vivement vos services à tous ceux qui recherchent une qualité supérieure et un savoir-faire incomparable. Merci encore pour tout ! <span className="font-serif">&quot;</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Ema F.</h6>
                  <span className="text-xs text-gray-500">La Fromagerie d&apos;Ema</span>
                </div>
              </div>
            </div>
      
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 bg-gray-50 p-8 text-center shadow-2xl">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={LogoLogiworks}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p >
                  <span className="font-serif">&quot;</span> Un site qui fonctionne parfaitement, un accompagnement complet, un grande disponibilité et du professionnalisme lors de leur accompagnement. Voilà comment résumer le travail de MV Digital Developpement. Je recommande ! <span className="font-serif">&quot;</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Rayan C.</h6>
                  <span className="text-xs text-gray-500">Logiworks</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 bg-gray-50 p-8 text-center shadow-2xl">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={logoAsphalt}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span className="font-serif">&quot;</span> Je suis absolument ravi du site internet que vous avez créé pour mon entreprise! La qualité de votre travail est tout simplement remarquable. Grâce à votre expertise en marketing digital, notre entreprise est désormais parfaitement représentée en ligne. Travailler avec vous a été un plaisir du début à la fin, et je n&apos;hésiterais pas à recommander vos services. Merci encore pour tout ce que vous avez fait pour notre entreprise ! <span className="font-serif">&quot;</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Loïc M.</h6>
                  <span className="text-xs text-gray-500">Asphalt Eater</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                                          
    )
}