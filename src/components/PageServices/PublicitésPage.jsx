import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import badgeCheck from '../../assets/badge-check.png';
import arrow from '../../assets/move-right.png';
import print from '../../assets/34109.jpg';
import ads1 from '../../assets/59.jpg';
import ads2 from '../../assets/75742.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


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
            <div className="text-center py-12 px-12 lg:pt-24 xl:px-80 lg:px-40">
                <h2 className="uppercase">Studio graphique</h2>
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl">Obtenez un <span className="text-[#188FA7]">maximum </span> de contrats grâce à la publicité en ligne</h1>
                <p className="lg:text-xl">Lancez des campagnes publicitaires ciblées avec un budget maîtrisé pour générer plus de ventes.</p>
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
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl">Visez le <span className='text-[#188FA7]'>top</span> de la visibilité</h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Opportunités</p>
                                            <p>Tirez profit de tout le potentiel de la publicité en ligne.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Savoir-faire</p>
                                            <p>Bénéficiez des compétences de nos experts en référencement.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Retour sur investissement</p>
                                            <p>Générez des résultats rapides à la hauteur de vos ambitions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={ads1} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div>
                <div className='text-center xl:mx-[25vw] px-4'>
                    <h2>DES CAMPAGNES GÉRÉES PAR DES EXPERTS SEA</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl '>Un <span className='text-[#188FA7]'>expert </span>en référencement dédié à votre projet</h1>
                    <p className='xl:px-16'>Pour vous assurer les meilleurs résultats, un référenceur prend en charge de A à Z votre campagne.</p>
                </div>

                <div className='px-4 lg:flex lg:justify-center lg:items-center mt-12'>
                    <img src={ads2} alt="cool"  className='rounded-2xl my-8 lg:w-[40%] lg:mr-12'/>
                    <div>
                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Accompagnement complet avec un expert dédié</p>
                                <p>Pour un suivi sur-mesure et personnalisé dédié à votre activité.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Choix des meilleurs mots-clés en fonction de votre activité</p>
                                <p>Pour garantir le meilleur retour sur investissement, nous définissons les mots-clés les mieux adaptés.</p>
                            </div>
                        </div>

                        <div className='flex items-start mb-8 lg:mb-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Création de campagnes et annonces percutantes</p>
                                <p>Pour être dans les meilleurs résultats Google rapidement.</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Suivi de vos campagnes en temps réel</p>
                                <p>Mesurez l&apos;efficacité de vos campagnes facilement et rapidement avec notre outil de suivi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12 text-white'>
                <div className="bg-[#188FA7] rounded-2xl p-8 shadow-2xl lg:w-[50vw]">
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


                
        </div>
    )
}