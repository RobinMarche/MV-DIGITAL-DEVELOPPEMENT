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
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl text-[#041e42]" >Un logo accrocheur pour asseoir la<span className="text-[#188FA7]"> présence de votre marque</span></h1>
                <p className="lg:text-xl">Un logo professionnel, à la fois singulier et captivant, favorise votre distinction sur le marché et grave votre image dans la mémoire de vos clients.</p>
                <div className="mt-12">
                    <Link to="/contact">
                        <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Contactez-nous</button>
                    </Link>
                </div>
            </div>

            <div className='page page_2 flex items-center justify-center' id="page3">
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-start mt-8 text-[#188FA7]'>FORGEZ UNE IMAGE VISUELLE UNIQUE AVEC NOTRE AGENCE DE CRÉATION GRAPHIQUE</h2>
                            <div className='my-8 flex justify-start items-center'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl">Mettez en avant votre image la plus <span className='text-[#188FA7]'>valorisante</span></h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Un logo sur mesure</p>
                                            <p>Créez un logo entièrement personnalisé, conçu pour correspondre parfaitement à votre secteur d&apos;activité.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Votre graphiste attitré</p>
                                            <p>Profitez de l&apos;expertise et de l&apos;innovation d&apos;un graphiste qui vous est exclusivement dédié.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Une identité de marque uniforme</p>
                                            <p>Élaborez une identité visuelle uniforme qui se reflète à travers tous vos supports de communication.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={graphiste} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div id='page4bg'>
                <div className='text-center xl:mx-[20vw] px-4'>
                    <h2>POURQUOI FAIRE APPEL À M&V DIGITAL DEVELOPPEMENT POUR SON IDENTITÉ VISUELLE ?</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl text-[#041e42]'> M&V Digital Développement vous propose une prestation intégrale et<span className='text-[#188FA7]'> sur mesure</span>.</h1>
                    <p className='xl:px-16'> Peu importe vos exigences, nous disposons de la solution adaptée à vos besoins !</p>
                </div>

                <div className='px-4 lg:flex lg:justify-center lg:items-center mt-12'>
                    <img src={print} alt="cool"  className='rounded-2xl my-8 lg:w-[40%] lg:mr-12'/>
                    <div>
                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Consultation initiale avec votre graphiste attitré</p>
                                <p>Pour concevoir un logo qui reflète parfaitement votre identité, précisez vos besoins et vos ambitions lors d&apos;un entretien avec un spécialiste MV digital.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Processus de création graphique</p>
                                <p>Votre graphiste personnel élaborera plusieurs concepts créatifs, vous permettant ainsi de sélectionner l&apos;option qui vous correspond le mieux.</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Révisions et finalisation</p>
                                <p>Nous vous présenterons diverses ébauches de logo et procéderons aux ajustements nécessaires pour qu&apos;il réponde parfaitement à vos critères.</p>
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
                            Pourquoi est-il avantageux de faire appel à une agence de graphisme pour concevoir mon logo et mes cartes de visite ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Faire appel à une agence spécialisée en graphisme pour créer votre logo et vos cartes de visite offre des avantages significatifs. Un logo professionnellement conçu ne se contente pas de capter l&apos;attention ; il communique également les valeurs fondamentales de votre entreprise et vous distingue de la concurrence. Nos graphistes expérimentés s&apos;assurent que votre identité visuelle transmette le message souhaité de manière claire et efficace.
                                <br /><br />
                                Notre agence assure une cohérence visuelle entre tous vos supports de communication, en développant des chartes graphiques qui unifient et renforcent votre marque. En choisissant notre studio, vous bénéficiez d&apos;une direction artistique experte et d&apos;une stratégie de communication visuelle qui amplifie votre présence sur le marché et solidifie votre image de marque.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none my-6">
                            <div className="collapse-title text-xl font-medium">
                            Quelles informations dois-je fournir pour commencer le design de mon logo ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Pour commencer le design de votre logo, il est important de fournir plusieurs informations clés qui aideront à guider le processus de création. Ces informations incluent le nom de votre entreprise, votre secteur d&apos;activité, vos couleurs préférées et tout élément visuel que vous souhaitez inclure. <br /><br /> Il est également utile de partager votre vision de l&apos;entreprise, les valeurs que vous souhaitez communiquer, et des exemples de logos que vous admirez. Plus vous fournissez de détails, plus il sera facile pour les designers de créer un logo qui répond à vos attentes et qui reflète fidèlement l&apos;identité de votre marque.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Offrez-vous des packs combinant logo, cartes de visite et autres supports imprimés ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Oui, nous offrons des packs combinés qui incluent la création de logo, de cartes de visite, et d&apos;autres supports imprimés comme des brochures, des flyers, et des en-têtes de lettre. <br /><br />Ces packs sont conçus pour offrir une solution complète et cohérente pour vos besoins en branding et en communication visuelle. En choisissant un pack combiné, vous bénéficiez d&apos;une image de marque uniforme à travers tous vos supports marketing, ce qui renforce l&apos;identité de votre entreprise et améliore votre visibilité sur le marché.</p>
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