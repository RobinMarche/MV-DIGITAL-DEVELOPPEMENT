import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import badgeCheck from '../../assets/badge-check.png';
import arrow from '../../assets/move-right.png';
import print from '../../assets/34109.jpg';
import graphiste from '../../assets/2149370126.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesFAQ from '../../assets/services-faq.webp';



export default function PrintPage() {

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
                <h2 className="uppercase">Studio graphique</h2>
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl text-[#041e42]" >Un logo percutant pour <span className="text-[#188FA7]">rassurer ses clients</span></h1>
                <p className="lg:text-xl">Unique et impactant, un logo pro vous permet de vous différencier et de marquer les esprits de vos clients.</p>
                <div className="mt-12">
                    <Link to="/contact">
                        <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Contactez-nous</button>
                    </Link>
                </div>
            </div>

            <div className='page page_2 flex items-center justify-center' id="page3">
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-start mt-8 text-[#188FA7]'>UNE IDENTITÉ VISUELLE UNIQUE AVEC NOTRE AGENCE DE GRAPHISME</h2>
                            <div className='my-8 flex justify-start items-center'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl">Partagez votre <span className='text-[#188FA7]'>meilleure</span> image</h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Un logo personnalisé</p>
                                            <p>Obtenez un logo 100% personnalisé adapté à votre activité.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Un graphiste dédié</p>
                                            <p>Bénéficiez du savoir-faire et de la créativité d&apos;un graphiste dédié.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Une identité de marque cohérente</p>
                                            <p>Construisez une identité visuelle cohérente sur l&apos;ensemble de vos supports.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={graphiste} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div id='page4bg'>
                <div className='text-center xl:mx-[25vw] px-4'>
                    <h2>POURQUOI FAIRE APPEL À M&V DIGITAL DEVELOPPEMENT POUR SON IDENTITÉ VISUELLE ?</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl text-[#041e42]'>M&V Digital Developpement vous propose une solution <span className='text-[#188FA7]'>clé en main</span></h1>
                    <p className='xl:px-16'>Quels que soient vos besoins, nous avons une solution pour vous !</p>
                </div>

                <div className='px-4 lg:flex lg:justify-center lg:items-center mt-12'>
                    <img src={print} alt="cool"  className='rounded-2xl my-8 lg:w-[40%] lg:mr-12'/>
                    <div>
                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Prise de brief par un graphiste dédié</p>
                                <p>Afin de créer un logo qui vous corresponde, définissez vos attentes et vos objectifs avec un expert ALEO.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Création graphique</p>
                                <p>Votre graphiste dédié vous proposera différentes pistes créatives pour que vous puissiez choisir celle qui vous convient le plus.</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Retouches et livraison</p>
                                <p>Nous vous envoyons différentes propositions de logo et effectuons des retouches afin qu’il soit conforme à vos attentes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12 mx-4 text-white'>
                <div className="bg-[#188FA7] rounded-2xl p-8 shadow-2xl lg:w-[50vw]">
                    <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                    <div className="flex justify-center items-center">
                        <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase" id="font-price">299.99€</p>
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
                                Focus me to see content
                            </div>
                            <div className="collapse-content"> 
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none my-6">
                            <div className="collapse-title text-xl font-medium">
                                Focus me to see content
                            </div>
                            <div className="collapse-content"> 
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                                Focus me to see content
                            </div>
                            <div className="collapse-content"> 
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
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