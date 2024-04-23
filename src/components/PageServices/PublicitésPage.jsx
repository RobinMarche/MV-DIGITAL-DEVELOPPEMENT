import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import badgeCheck from '../../assets/badge-check.png';
import arrow from '../../assets/move-right.png';
import ads1 from '../../assets/59.jpg';
import ads2 from '../../assets/75742.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesFAQ from '../../assets/services-faq.webp';



export default function PublicitesPage() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);


    return (
        <div>
            <div className="text-center py-12 px-12 lg:pt-24 xl:px-80 lg:px-40" id='page2'>
                <h2 className="uppercase">ATELIER DE DESIGN GRAPHIQUE</h2>
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl text-[#041e42]">Maximisez vos contrats avec des <span className="text-[#188FA7]">stratégies </span>de publicité en ligne efficaces</h1>
                <p className="lg:text-xl">Déployez des campagnes publicitaires précises et budgetisées pour augmenter vos ventes.</p>
                <div className="mt-12">
                    <Link to="/contact">
                        <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Contactez-nous</button>
                    </Link>
                </div>
            </div>

            <div className='page page_2 flex items-center justify-center' id="page3">
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-start mt-8 text-[#188FA7]'>Confiez nous vos campagnes publicitaires</h2>
                            <div className='my-8 flex justify-start items-center'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl">Atteignez le <span className='text-[#188FA7]'>sommet</span>  en matière de visibilité </h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Potentiel</p>
                                            <p>Exploitez pleinement les avantages de la publicité numérique.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Expertise</p>
                                            <p>Profitez de l&apos;expertise pointue de nos spécialistes en référencement.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Rendement</p>
                                            <p>Obtenez des résultats immédiats qui correspondent à vos objectifs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={ads1} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div id='page4bg'>
                <div className='text-center xl:mx-[25vw] px-4'>
                    <h2>VOS CAMPAGNES PILOTÉES PAR DES SPÉCIALISTES SEA</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl text-[#041e42]'>Un <span className='text-[#188FA7]'>spécialiste </span>SEA dédié à votre projet</h1>
                </div>

                <div className='px-4 lg:flex lg:justify-center lg:items-center mt-12'>
                    <img src={ads2} alt="cool"  className='rounded-2xl my-8 lg:w-[40%] lg:mr-12'/>
                    <div>
                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Accompagnement complet avec un expert dédié</p>
                                <p>Bénéficiez d&apos;un accompagnement personnalisé et adapté spécifiquement à votre secteur.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Sélection optimale de mots-clés pour votre secteur</p>
                                <p>Nous identifions les mots-clés les plus efficaces pour maximiser votre retour sur investissement.</p>
                            </div>
                        </div>

                        <div className='flex items-start mb-8 lg:mb-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Développement de campagnes et annonces impactantes </p>
                                <p>Atteignez rapidement les premières positions sur Google.</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Monitoring en continu de vos campagnes </p>
                                <p>Évaluez la performance de vos campagnes en temps réel grâce à notre système de suivi avancé.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12 mx-8 text-white'>
                <div className="bg-[#188FA7] rounded-2xl p-4 shadow-2xl lg:w-[50vw]">
                    <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                    <div className="flex justify-center items-center">
                        <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase" id="font-price">249.99€</p>
                        <div className="text-2xl ml-2" id="">
                            <p>par</p>
                            <p>mois</p>
                        </div>
                    </div>
                    <div className="flex justify-center my-6 text-lg 2xl:text-2xl text-center">
                        <p className="">Marquez les esprits de vos clients dès maintenant.</p>
                    </div>
                    <div className="flex justify-center my-2 2xl:my-6">
                        <Link to="/contact">
                            <button className="btn rounded-full bg-red-400 border-red-400 text-white">Je lance mon projet <img src={arrow} alt="" /></button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mx-6 lg:mx-24 xl:mx-48 my-24 flex flex-col lg:flex-row items-center justify-around'>
                <div className='flex flex-col justify-center items-center lg:w-[50%] lg:items-start lg:mr-12'>
                    <h2 className='font-bold'>FAQ</h2>
                    <h1 className='my-6 text-3xl text-center lg:text-start font-bold capitalize'>Questions fréquemments posées</h1>
                    <p className='text-center mb-6 lg:w-[70%] lg:text-start'>Vous trouverez ci-dessous les questions les plus fréquemments posées par nos clients concernants le service séléctionné.</p>
                    <div className='mb-12'>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                                Pourquoi devrais-je choisir MV Digital pour mes campagnes sur Facebook Ads et Instagram ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Faire appel à MV Digital pour vos campagnes publicitaires sur Facebook et Instagram offre des bénéfices significatifs pour votre présence en ligne. Nos spécialistes utilisent des outils avancés, comme le pixel Facebook, pour affiner le ciblage de votre audience et améliorer les conversions de vos publicités.
                                <br /><br />
                                Nous nous engageons également à produire et partager du contenu qui capte l&apos;attention et fidélise votre communauté, tout en veillant à ce que chaque pièce reflète fidèlement votre marque. Chez MV Digital, nous travaillons en étroite collaboration avec vous pour valider tout contenu avant publication, assurant ainsi que tout matériel diffusé soit parfaitement aligné avec vos objectifs et valeurs de marque.
                                <br /><br />
                                En somme, travailler avec MV Digital vous garantit non seulement une expertise en publicité numérique mais aussi une cohérence et un contrôle accru sur l&apos;image de votre entreprise.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none my-6">
                            <div className="collapse-title text-xl font-medium">
                            Quels sont les principaux avantages de la publicité en ligne pour une entreprise ?
                            </div>
                            <div className="collapse-content"> 
                                <p>La publicité en ligne offre plusieurs avantages clés pour les entreprises :
                                Ciblage précis : Les plateformes en ligne permettent de cibler des audiences spécifiques en fonction de critères détaillés tels que l&apos;âge, le sexe, la localisation, les intérêts, et plus encore. <br /><br />
                                Mesurabilité : Les résultats des campagnes publicitaires en ligne peuvent être mesurés avec précision, permettant aux entreprises de voir le nombre de clics, de conversions, et d&apos;interactions. <br /><br />
                                Flexibilité : Les campagnes peuvent être ajustées en temps réel en fonction de leur performance, ce qui permet une optimisation continue.
                                Coût-efficacité : Comparativement aux médias traditionnels, la publicité en ligne peut être moins coûteuse et les budgets peuvent être ajustés selon les besoins. <br /><br />
                                Portée étendue : Internet offre une portée globale, permettant aux marques de toucher des clients potentiels au-delà des frontières géographiques.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Quelle est la différence entre la publicité payante (SEA) et le référencement naturel (SEO), et comment peuvent-ils se compléter ?
                            </div>
                            <div className="collapse-content"> 
                                <p>SEA (Search Engine Advertising) consiste à acheter des annonces qui apparaissent dans les résultats de recherche pour obtenir une visibilité immédiate. C&apos;est efficace pour générer un trafic ciblé rapidement. SEO (Search Engine Optimization), en revanche, vise à améliorer le classement organique d’un site via l&apos;optimisation du contenu et de la structure, offrant une visibilité durable sans coût direct par clic.
                                <br /><br />
                                Combiner SEA et SEO permet de maximiser la stratégie de marketing numérique : le SEA pour des résultats immédiats, surtout lors de lancements ou promotions, et le SEO pour construire une présence en ligne solide sur le long terme. Ensemble, ils offrent une approche complète pour attirer à la fois un trafic rapide et soutenu.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Comment la publicité en ligne peut-elle aider à cibler mon audience spécifique ?
                            </div>
                            <div className="collapse-content"> 
                                <p>La publicité en ligne utilise des outils et des technologies avancés pour segmenter le public en fonction de divers critères démographiques, comportementaux et psychographiques. Les plateformes comme Google Ads et Facebook Ads permettent aux annonceurs de spécifier qui verra leurs annonces en fonction de facteurs tels que l&apos;âge, le lieu, les intérêts, les habitudes de navigation, et les interactions précédentes avec la marque. <br /><br /> Cela aide à maximiser l&apos;efficacité des campagnes en s&apos;assurant que les annonces sont vues par les personnes les plus susceptibles d&apos;être intéressées par le produit ou service offert, améliorant ainsi le retour sur investissement et minimisant le gaspillage de ressources.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={servicesFAQ} alt="" />
                </div>
            </div>


                
        </div>
    )
}