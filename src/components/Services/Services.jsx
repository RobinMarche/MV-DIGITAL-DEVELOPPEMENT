import separation from '../../assets/sep2.png';
import web from '../../assets/web-browser.gif';
import newspaper from '../../assets/newspaper.gif';
import society from '../../assets/society.gif';
import checked from '../../assets/check.png';

export default function Services() {
    return (
        <>
          <div className='mb-[-10px]'>
            <img src={separation} alt="" />
          </div>
          <div className="py-16 bg-[#022a60]">
            <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20 ">
              <div>
                <h2 className="mt-4 text-center text-3xl text-white web-section uppercase">
                  Notre éventail de compétences
                </h2>
                <div className='flex justify-center my-4'>
                  <div className='bg-white w-[15vw] h-[2px] lg:w-[35vw] 2xl:w-[8vw]'></div>
                </div>
              </div>
              <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
                <div className="p-8 py-12 sm:p-12 bg-white shadow-2xl shadow-gray-600/10 web-section">
                  <div className="space-y-12 text-center">
                    <img
                      src={web}
                      className="w-16 mx-auto"
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
                <div className="p-8 py-12 sm:p-12 bg-white shadow-2xl shadow-gray-600/10 web-section">
                  <div className="space-y-12 text-center">
                    <img
                      src={newspaper}
                      className="w-16 mx-auto"
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
                <div className="p-8 py-12 sm:p-12 bg-white shadow-2xl shadow-gray-600/10 web-section">
                  <div className="space-y-12 text-center">
                    <img
                      src={society}
                      className="w-16 mx-auto"
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
                          <p>Gestion des Réseaux Sociaux</p>
                        </div> 
                        <div className='flex items-center my-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Marketing de Contenu</p>
                        </div> 
                        <div className='flex items-center'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Publicité en Ligne</p>
                        </div> 
                        <div className='flex items-center mt-4'>
                          <img src={checked} alt="checked" className='mr-2'/> 
                          <p>Email Marketing</p>
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