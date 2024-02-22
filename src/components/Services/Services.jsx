import separation from '../../assets/sep2.png';
import web from '../../assets/web-browser.gif';
import newspaper from '../../assets/newspaper.gif';
import society from '../../assets/society.gif';

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
                      <p className="text-gray-900 text-start">
                      C&apos;est ici que prennent vie les vitrines digitales qui captivent, charment et transforment. Le design web devient l&apos;art subtil de fusionner esthétisme et performance, créant des expériences en ligne qui marquent les esprits. Que ce soit pour donner vie à votre site internet ou façonner le webdesign d&apos;une application, notre savoir-faire vous ouvre les portes d&apos;une réussite digitale distinctive.
                      </p>  
                      <p>- Sites Vitrines / E-Commerce</p>
                      <p>- SEO</p>             
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
                      <p className="text-gray-900 text-start">
                      Brochures, dépliants, flyers, affiches ou cartes de visite, ces ambassadeurs matériels propagent l&apos;essence de votre marque dans le monde tangible. Ils captent le regard, communiquent des informations et laissent une empreinte inoubliable. Le design graphique devient l&apos;art influent de susciter l&apos;attention, d&apos;informer et d&apos;inspirer à l&apos;action.
                      </p>
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
                      <p className="text-gray-900 text-start">
                      Nous étendons notre expertise au-delà du tangible pour offrir également une gestion communautaire dynamique. Le community management devient ainsi un pilier essentiel de notre approche, permettant à votre marque de rayonner non seulement dans le monde matériel, mais aussi au cœur des communautés virtuelles, créant ainsi une empreinte inoubliable à chaque interaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                                    


        </>
    )
}