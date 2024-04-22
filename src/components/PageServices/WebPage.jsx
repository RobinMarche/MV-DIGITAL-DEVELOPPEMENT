import smile from '../../assets/femme.jpg';
import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import badgeCheck from '../../assets/badge-check.png';
import cool from '../../assets/46486.jpg';
import arrow from '../../assets/move-right.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesFAQ from '../../assets/services-faq.webp';


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
            <div className="text-center py-12 px-12 lg:pt-24 xl:px-60 lg:px-40" id='page2'>
                <h2 className="uppercase">Création de site internet</h2>
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl text-[#041e42]">Site web <span className="text-[#188FA7]">clé en main</span>, optimisé pour le référencement</h1>
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
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl capitalize">Votre site web, <br /> <span className='ml-12'>votre <span className="text-[#188FA7]">vitrine</span> numérique</span></h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Un site professionnel</p>
                                            <p>une expérience web sur mesure, conçue spécifiquement pour répondre à vos besoins.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Une équipe d’experts</p>
                                            <p>Profitez de l&apos;expertise d&apos;une équipe complète de professionnels aguerris à votre service.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Des offres imbattables</p>
                                            <p>Gardez le contrôle de vos finances grâce à nos offres flexibles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={smile} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div id='page4bg'>
                <div className='text-center xl:mx-[25vw] px-4'>
                    <h2>CONCEPTION DE SITE WEB ADAPTÉ À VOTRE ACTIVITÉ</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl text-[#041e42]'>Pour chaque objectif, une solution <span className='text-[#188FA7]'>Digitale</span></h1>
                    <p className='xl:px-16'>Nous élaborons un site internet sur mesure en fonction de vos exigences, tout en mettant en œuvre une stratégie de référencement spécialement adaptée à votre secteur d&apos;activité.</p>
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

            <div className='flex justify-center my-12 mx-4 text-white'>
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

            <div className='mx-6 lg:mx-24 xl:mx-48 my-24 flex flex-col lg:flex-row items-center justify-around'>
                <div className='flex flex-col justify-center items-center lg:w-[50%] lg:items-start lg:mr-12'>
                    <h2 className='font-bold'>FAQ</h2>
                    <h1 className='my-6 text-3xl text-center lg:text-start font-bold capitalize'>Questions fréquemments posées</h1>
                    <p className='text-center mb-6 lg:w-[70%] lg:text-start'>Vous trouverez ci-dessous les questions les plus fréquemments posées par nos clients concernants le service séléctionné.</p>
                    <div className='mb-12'>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Quel est le prix de la création d’un site web ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Le tarif pour la création d&apos;un site web peut varier en fonction de plusieurs éléments, tels que la complexité du design, le nombre de pages, le SEO, et les besoins spécifiques. Chaque projet est unique et mérite une évaluation sur mesure.
                                <br /><br />
                                Pour une estimation adaptée à votre projet, n&apos;hésitez pas à nous contacter. Vous pouvez demander nos tarifs détaillés en cliquant sur &apos;Contactez-nous&apos; sur notre site pour prendre rendez-vous avec un de nos experts pour discuter de vos besoins spécifiques.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none my-6">
                            <div className="collapse-title text-xl font-medium">
                            Est-il possible d&apos;apporter des modifications à un site web créé par MV Digital Développement après sa mise en ligne ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Bien sûr, nous reconnaissons que les besoins de votre entreprise évoluent au fil du temps. Chez MV Digital Développement, nous proposons non seulement la création initiale de votre site internet mais également la possibilité de le mettre à jour en fonction de vos nouvelles exigences.
                                <br /><br />
                                Si vous souhaitez actualiser les textes, remplacer des images, ou modifier la disposition de certaines pages, notre équipe dédiée est prête à intervenir. Grâce à un design responsive, votre site reste parfaitement utilisable et esthétique sur tous types de dispositifs, qu&apos;il s&apos;agisse d&apos;ordinateurs, de tablettes ou de smartphones.
                                <br /><br />
                                Nous nous engageons à ce que votre site web continue de refléter le dynamisme et l&apos;évolution de votre entreprise, assurant ainsi qu&apos;il reste un outil de communication et de marketing efficace et pertinent.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Pourquoi est-il avantageux de choisir une agence de création de sites web telle que MV Digital Développement ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Faire appel à une agence de création de sites web telle que MV Digital Développement présente plusieurs avantages clés. Notre mission est de soutenir votre entreprise dans son développement numérique, en vous garantissant un site internet constamment actualisé et adapté à vos besoins.
                                <br /><br />
                                Notre équipe est prête à mettre à jour votre contenu, vos images, et à sécuriser votre site avec un certificat SSL. Nous gérons également l&apos;hébergement de votre site sur des serveurs fiables et sécurisés, basés en France.
                                <br /><br />
                                De plus, MV Digital Développement est à votre disposition pour la refonte de votre site existant. Si vous possédez déjà un site et souhaitez en conserver le contenu, nos spécialistes en développement web prendront en charge l&apos;ensemble du processus pour vous.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Puis-je envisager MV Digital Web pour la refonte de mon site internet ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Oui, vous pouvez absolument vous tourner vers MV Digital Web pour la refonte de votre site internet. MV Digital Web est spécialisée dans la modernisation et l&apos;amélioration de sites web, en veillant à ce que ceux-ci répondent aux dernières normes en matière de design et de fonctionnalité. Ils sont également experts en transition vers de nouveaux sites web tout en conservant le contenu existant. <br /><br />Que vous souhaitiez rafraîchir l&apos;esthétique de votre site, améliorer l&apos;expérience utilisateur, optimiser le référencement, ou simplement migrer votre contenu vers une nouvelle plateforme plus moderne, l&apos;équipe de MV Digital Web peut vous fournir une solution sur mesure qui répondra parfaitement à vos attentes.</p>
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