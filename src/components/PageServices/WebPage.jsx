import smile from '../../assets/femme.jpg';
import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import badgeCheck from '../../assets/badge-check.png';
import cool from '../../assets/46486.jpg';
import arrow from '../../assets/move-right.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function WebPage() {

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
                <h2 className="uppercase">Création de site internet</h2>
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl">Un site web <span className="text-[#188FA7]">clé en main </span> et bien référencé</h1>
                <p className="lg:text-xl">Devenez visible avec un site internet professionnel conçu par des experts.</p>
                <div className="mt-12">
                    <Link to="/contact">
                        <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Contactez-nous</button>
                    </Link>
                </div>
            </div>

            <div className='page page_2 flex items-center justify-center' id="page3">
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-start mt-8 text-[#188FA7]'>CRÉATION DE SITE WEB OPTIMISÉ POUR LE RÉFÉRENCEMENT</h2>
                            <div className='my-8 flex justify-start items-center'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl">Le site web qui vous rendra visible</h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Un site professionnel</p>
                                            <p>Présentez votre activité avec un site 100 % personnalisé adapté à vos besoins.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Une équipe d’experts</p>
                                            <p>Bénéficiez du savoir-faire de toute une équipe d&apos;experts.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Des offres flexibles</p>
                                            <p>Restez maître de votre budget avec nos offres sans engagement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={smile} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div>
                <div className='text-center xl:mx-[25vw] px-4'>
                    <h2>CONCEPTION DE SITE WEB ADAPTÉ À VOTRE ACTIVITÉ</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl '>Pour chaque objectif, une solution <span className='text-[#188FA7]'>Digitale</span></h1>
                    <p className='xl:px-16'>En fonction de vos besoins, nous concevons le site internet adapté et mettons en place une stratégie de référencement spécifique à votre activité.</p>
                </div>

                <div className='px-4 lg:flex lg:justify-center lg:items-center mt-12'>
                    <img src={cool} alt="cool"  className='rounded-2xl my-8 lg:w-[40%] lg:mr-12'/>
                    <div>
                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Création graphique et rédaction des contenus</p>
                                <p>Votre site web à la hauteur de vos ambitions.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Mise en place d’une stratégie de référencement</p>
                                <p>Bien référencé sur Google pour booster votre visibilité.</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Version mobile et tablette</p>
                                <p>Accessible partout et à toute heure.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Réservation de votre nom de domaine</p>
                                <p>Imposez votre identité avec un www qui fait rêver.</p>
                            </div>
                        </div>

                        <div className='flex items-start mb-8'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Hébergement, maintenance et sécurisation sur nos serveurs</p>
                                <p>La facilité et la sécurité en un tour de main.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12 text-white'>
                <div className="bg-[#188FA7] rounded-2xl p-8 shadow-2xl lg:w-[50vw]">
                    <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                    <div className="flex justify-center items-center">
                        <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase" id="font-price">49.99€</p>
                        <div className="text-2xl ml-2" id="">
                            <p>par</p>
                            <p>mois</p>
                        </div>
                    </div>
                    <div className="flex justify-center my-6 text-lg 2xl:text-2xl text-center">
                        <p className="">Développez votre notoriété et gagnez en <br /> crédibilité pour attirer de nouveaux clients.</p>
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