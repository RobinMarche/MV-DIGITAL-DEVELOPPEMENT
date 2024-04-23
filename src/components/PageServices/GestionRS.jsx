import visibility from '../../assets/visibility.png';
import timer from '../../assets/timer.png';
import chart from '../../assets/bar-chart-3.png';
import badgeCheck from '../../assets/badge-check.png';
import arrow from '../../assets/move-right.png';
import phone from '../../assets/phone.jpg';
import RS from '../../assets/26150.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesFAQ from '../../assets/services-faq.webp';


export default function GestionRS() {

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
            <div className="text-center py-12 px-12 lg:pt-24 xl:px-60 lg:px-32" id='page2'>
                <h2 className="uppercase">GESTION DE VOS PUBLICATIONS sur les réseaux sociaux</h2>
                <h1 className="text-4xl font-bold my-6 lg:text-6xl xl:text-8xl text-[#041e42]"><span className="text-[#188FA7]">Inspirez confiance</span> à vos clients grâce à une présence professionnelle sur les réseaux sociaux
</h1>
                <p className="lg:text-xl">Démontrez votre savoir-faire à travers des comptes Instagram et Facebook gérés de manière experte.</p>
                <div className="mt-12">
                    <Link to="/contact">
                        <button className="bg-red-600 text-white rounded-full normal-case px-8 py-4 text-xl">Contactez-nous</button>
                    </Link>
                </div>
            </div>

            <div className='page page_2 flex items-center justify-center' id="page3">
                    <div className='flex flex-col justify-center items-center p-8 lg:p-16 lg:flex-row lg:justify-center'>
                        <div className='lg:w-1/2 fade-right'>
                            <h2 className='text-lg uppercase text-start mt-8 text-[#188FA7]'>SIMPLIFIEZ LA GESTION DE VOS RÉSEAUX SOCIAUX</h2>
                            <div className='my-8 flex justify-start items-center'>
                                <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
                            </div>
                            <h1 className="text-4xl text-[#041e42] font-bold text-center lg:text-start lg:text-5xl">Mettez en lumière les qualités de
 <span className='text-[#188FA7]'> votre entreprise</span></h1>

                            <div className="flex items-center justify-center mt-12">
                                <div>
                                    <div className="flex items-center">
                                        <img src={visibility} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4"/>
                                        <div>
                                            <p className="font-bold text-lg">Création visuelle</p>
                                            <p>Laissez nos spécialistes concevoir vos publications pour valoriser votre savoir-faire.</p>
                                        </div>

                                    </div>

                                    <div className="flex items-center my-6">
                                        <img src={chart} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Consistance</p>
                                            <p>Bénéficiez d&apos;une communication de qualité avec 4 à 8 posts mensuels réguliers.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <img src={timer} alt="" className="bg-[#188FA7] rounded-full p-2 mr-4" />
                                        <div>
                                            <p className="font-bold text-lg">Présence de marque</p>
                                            <p>Renforcez votre présence sur les réseaux sociaux et projetez une image professionnelle auprès de vos clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={phone} alt="" className="rounded-xl my-8 lg:w-[27%]"/>
                    </div>
            </div>

            <div id='page4bg'>
                <div className='text-center xl:mx-[25vw] px-4'>
                    <h2>VOTRE STRATÉGIE SUR LES RÉSEAUX SOCIAUX PILOTÉE PAR NOTRE AGENCE</h2>
                    <h1 className='text-4xl font-bold my-6 lg:text-5xl xl:text-7xl text-[#041e42]'>Un atout <span className='text-[#188FA7]'>majeur</span> pour renforcer votre crédibilité</h1>
                    <p className='xl:px-16'>Exploitez le potentiel complet des réseaux sociaux avec tranquillité !</p>
                </div>

                <div className='px-4 lg:flex lg:justify-center lg:items-center mt-12'>
                    <img src={RS} alt="cool"  className='rounded-2xl my-8 lg:w-[40%] lg:mr-12'/>
                    <div>
                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Gestion professionnelle de vos comptes Facebook et Instagram </p>
                                <p>Laissez nos professionnels prendre en charge la création et l&apos;amélioration de vos pages Facebook et Instagram.</p>
                            </div>
                        </div>

                        <div className='flex items-start my-8 lg:my-6'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>Contenu éditorial sur-mesure pour votre secteur</p>
                                <p>Nous sélectionnons des thèmes éprouvés et les adaptons parfaitement aux besoins de votre entreprise.</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <img src={badgeCheck} alt="badge"/>
                            <div className='ml-2'>
                                <p className='font-bold text-md lg:text-xl text-[#188FA7]'>4 à 8 publications mensuelles</p>
                                <p>Nos experts garantissent une communication fréquente et efficace pour accroître votre visibilité.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12 mx-8 text-white'>
                <div className="bg-[#188FA7] rounded-2xl p-4 shadow-2xl lg:w-[50vw]">
                    <h1 className="text-center text-xl mt-8 uppercase tracking-wide">A Partir De</h1>
                    <div className="flex justify-center items-center">
                        <p className="2xl:text-[80px] text-6xl 2xl:text-[70px] uppercase" id="font-price">149.99€</p>
                        <div className="text-2xl ml-2" id="">
                            <p>par</p>
                            <p>mois</p>
                        </div>
                    </div>
                    <div className="flex justify-center my-6 text-lg 2xl:text-2xl text-center">
                        <p className="">La meilleure solution pour développer sa communauté !</p>
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
                            Pourquoi devrais-je choisir MV Digital pour gérer mes réseaux sociaux ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Opter pour MV Digital pour la gestion de vos réseaux sociaux vous offre expertise et efficacité, permettant d&apos;améliorer votre interaction avec l&apos;audience et d&apos;élargir votre présence en ligne. MV Digital libère vos ressources internes en prenant en charge la création de contenu engageant, l&apos;analyse des performances, et l&apos;ajustement des stratégies en temps réel. Cela vous assure que votre communication numérique est gérée par des professionnels, optimisant ainsi vos investissements et favorisant la croissance de votre marque.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none my-6">
                            <div className="collapse-title text-xl font-medium">
                            MV Digital peut-il s&apos;occuper de la création de mon compte Facebook, Instagram ou autre réseau social ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Oui, MV Digital peut absolument prendre en charge la création de vos comptes sur Facebook, Instagram, ou toute autre plateforme de réseaux sociaux. Ils s&apos;occuperont de l&apos;ensemble du processus, depuis la mise en place des comptes jusqu&apos;à leur personnalisation, en s&apos;assurant que tout soit optimisé pour engager efficacement votre audience cible. En confiant la création et la gestion de vos réseaux sociaux à MV Digital, vous bénéficiez d&apos;un démarrage professionnel et stratégique sur les réseaux, essentiel pour construire une présence en ligne solide.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Combien de publications MV Digital va-t-il poster par mois sur mes réseaux sociaux ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Selon l&apos;offre que vous sélectionnerez pour affiner votre stratégie de médias sociaux, MV Digital postera entre 4 et 16 publications par mois sur vos comptes Facebook et Instagram. Ce nombre varie en fonction de vos objectifs spécifiques et du plan de gestion des réseaux sociaux que vous choisissez, permettant ainsi une personnalisation adaptée à vos besoins.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Comment MV Digital choisit-elle les plateformes de réseaux sociaux adaptées à mon entreprise ?
                            </div>
                            <div className="collapse-content"> 
                                <p>MV Digital évalue plusieurs facteurs pour déterminer les plateformes de réseaux sociaux les mieux adaptées à votre entreprise. Cela inclut l&apos;analyse de votre public cible, l&apos;identification des plateformes où ce public est le plus actif, et l&apos;évaluation des objectifs spécifiques de votre stratégie marketing. Par exemple, si votre audience est principalement jeune et visuelle, Instagram et TikTok pourraient être privilégiés. Pour des interactions B2B, LinkedIn pourrait être plus approprié. MV Digital s&apos;assure que les plateformes choisies maximisent votre visibilité et engagement, alignées avec votre stratégie globale de communication.</p>
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