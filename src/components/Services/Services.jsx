import separation from '../../assets/sep2.png';
import web from '../../assets/web-browser.gif';
import newspaper from '../../assets/newspaper.gif';
import society from '../../assets/society.gif';
import checked from '../../assets/check.png';
import { useState, useEffect } from 'react';
import webwww from '../../assets/www.png';

export default function Services() {

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
        <>
          <div className='mb-[-10px]'>
            <img src={separation} alt="" />
          </div>
          <div className="py-16 bg-[#022a60]">
            <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center">
              <div className={`px-4 flex flex-col items-center justify-center lg:w-1/2 pb-10 m-4 ${scrollY > 600 ? 'fade-in' : 'slideOffRight2'}`} id='contact'>
                <div className="mb-12">
                  <h1 className="text-3xl uppercase text-center lg:text-start text-white">Notre eventail de compétences</h1>
                  <div className={`my-8 flex justify-center items-center lg:block lg:mt-2 ${scrollY > 600 ? 'slideInRight3' : 'slideOffRight3'}`}>
                    <div className='bg-white w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                  </div>
                </div>
              </div>
              <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3">
                <div className={`p-8 py-12 sm:p-12 bg-white rounded-xl web-section ${scrollY > 700 ? 'slideInRight' : 'slideOffRight1'}`}>
                  <div className={`space-y-12 text-center `}>
                    <img
                      src={webwww}
                      className="w-32 mx-auto"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-800 transition text-6xl" id='finesse'>
                        Web
                      </h3> 
                      <div className='text-start'>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Création de votre site Vitrine</p>
                        </div>
                        <div className='flex items-center my-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Création de votre boutique en ligne</p>
                        </div>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Mise en avant de votre marque sur les navigateurs (Référencement SEO)</p>
                        </div>
                        <div className='flex items-center my-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Optimisation de la vitesse du site et expérience utilisateur (UX)</p>
                        </div>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Refonte de site Internet existant</p>
                        </div>
                        <div className='flex items-center my-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Analyse et Rapports de Performance</p>
                        </div>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Sécurité Web optimale</p>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`p-8 py-12 sm:p-12 bg-white rounded-xl web-section lg:mb-16 lg:mt-[-4rem] ${scrollY > 900 ? 'slideInRight2' : 'slideOffRight2'}`}>
                  <div className="space-y-12 text-center">
                    <img
                      src={newspaper}
                      className="w-32 mx-auto"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-800 transition text-6xl"  id='finesse'>
                        Print
                      </h3>
                      <div className='text-start'>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Brochures</p>
                        </div>
                        <div className='flex items-center my-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Dépliants</p>
                        </div>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Flyers</p>
                        </div>
                        <div className='flex items-center my-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Affiches</p>
                        </div>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Cartes de visite</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`p-8 py-12 sm:p-12 bg-white shadow-2xl rounded-xl web-section ${scrollY > 1100 ? 'slideInRight3' : 'slideOffRight3'}`}>
                  <div className="space-y-12 text-center">
                    <img
                      src={society}
                      className="w-32 mx-auto"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-800 transition text-6xl"  id='finesse'>
                        Community Management
                      </h3>
                      <div className='text-start'>
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Gestion des Réseaux sociaux</p>
                        </div> 
                        <div className='flex items-center my-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Marketing de contenu</p>
                        </div> 
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Publicité ciblée en ligne</p>
                        </div> 
                        <div className='flex items-center mt-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Email marketing</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                                    


        </>
    )
}