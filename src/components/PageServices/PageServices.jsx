import rocket from '../../assets/rocket.png';
import uxdesign from '../../assets/ux_design.jpg';
import print from '../../assets/print2.jpg';
import web from '../../assets/web.jpg';
import community from '../../assets/community_manager.jpg';
import website from '../../assets/website.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import servicesFAQ from '../../assets/services-faq.webp';



export default function PageServices() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);

  return (
    <>
      <div className="text-gray-900 lg:pb-24" id='servicesPage'>
        <div className='bg-white'  id='page2'>
            <div className="container mx-auto pt-20 lg:py-20 lg:flex ">
                <div className="text-center lg:text-start lg:w-[70vw] lg:flex lg:flex-col lg:items-start lg:justify-center lg:px-16">
                    <h1 className="text-6xl text-[#188FA7]" id='title2'>Propulsez votre réussite</h1>
                    <p className="text-xl text-[#188FA7] mt-4 uppercase text-center lg:text-start py-6 px-12">
                    Chez M&V Digital Developpement, nous transformons vos idées en réalité et boostons votre présence en ligne pour un impact maximal
                    </p>
                    <p className="mt-4 px-4 text-center lg:text-start lg:px-0">
                    Bienvenue dans l&apos;univers dynamique de M&V Digital Developpement, votre partenaire privilégié pour une communication percutante, un développement web innovant et une stratégie de marketing digital efficace. Forts de notre expertise diversifiée, nous façonnons des expériences uniques et mémorables pour propulser votre entreprise vers de nouveaux sommets.
                    </p>
                </div>
                <div>
                    <img src={rocket} alt="place" className='lg:w-[50vw] p-24 lg:p-0' />
                </div>
            </div>
        </div>

        <div className='lg:py-12'>
            <div className='text-center px-8 my-12'>
                <h1 className='text-4xl lg:text-6xl text-[#041e42] capitalize font-bold' id=''>Comment pouvons nous vous <span className='text-[#188FA7]'>aider</span> ?</h1>
            </div>

            <div id='page4bg'>
                <div className='flex flex-wrap justify-center items-center lg:mx-24 2xl:mx-48'>
                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={web} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Web et Web Mobile</h1>
                        <p className='my-6'>Votre présence en ligne est cruciale. Nous concevons des sites web fonctionnels, esthétiques et adaptés à vos besoins spécifiques. Que ce soit une vitrine, un site e-commerce ou une application web, nous utilisons les dernières technologies pour assurer une expérience utilisateur optimale.</p>
                        <Link to="/services/web">
                            <button className='btn rounded-full bg-[#188fa7] font-bold text-white'>Découvrir</button>
                        </Link>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={uxdesign} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Logo et supports imprimés</h1>
                        <p className='my-6'>Explorez une expérience utilisateur immersive et intuitive avec notre conception UX, où chaque élément est soigneusement orchestré pour créer une synergie harmonieuse entre fonctionnalité et esthétique, redéfinissant ainsi la manière dont vous interagissez avec notre site web.</p>
                        <Link to="/services/print">
                            <button className='btn rounded-full bg-[#188fa7] font-bold text-white'>Découvrir</button>
                        </Link>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={print} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Gestion des réseaux sociaux</h1>
                        <p className='my-6'>Donnez une dimension tangible à votre identité avec notre expertise en impression. Chez M&V Digital Developpement, nous sublimons vos idées sur papier, créant des supports print exceptionnels qui captivent et laissent une impression mémorable.</p>
                        <Link to="/services/gestion-rs">
                            <button className='btn rounded-full bg-[#188fa7] font-bold text-white'>Découvrir</button>
                        </Link>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={community} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Publicités en ligne</h1>
                        <p className='my-6'>De la création d&apos;identité visuelle à la gestion de campagnes publicitaires, notre équipe créative s&apos;engage à donner vie à votre histoire de manière captivante. Nous concevons des messages impactants et des stratégies de communication cohérentes pour renforcer votre positionnement sur le marché.</p>
                        <Link to="/services/publicites">
                            <button className='btn rounded-full bg-[#188fa7] font-bold text-white'>Découvrir</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div id='page2'>
                <div className='lg:flex lg:flex-row-reverse lg:mt-32 lg:justify-center'>
                    <div className='text-center lg:text-start px-8 lg:w-[40%]' >
                        <h2 className='mt-8 text-[#188FA7] uppercase'>Notre Mission</h2>
                        <h1 className='text-4xl lg:text-6xl mt-4 mb-4 text-[#188FA7] font-bold capitalize' id=''>Transformer vos idées en réalité</h1>
                        <div className='bg-white w-[10vw] h-[2px] lg:my-8 hidden lg:block'></div>
                        <p className='text-[#188FA7] text-xl' id='subtitle'>Votre succès en ligne commence ici !</p>
                        <div className='flex flex-col lg:flex-row justify-around items-center my-12 text-[#188FA7]'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-2xl font-bold'>SEO</h1>
                                <p className='text-5xl mt-4 font-bold text-[#041e42]'>96%</p>
                            </div>
                            <div className='flex flex-col items-center justify-center my-12 lg:my-0'>
                                <h1 className='text-2xl font-bold'>Developpement</h1>
                                <p className='text-5xl mt-4 font-bold text-[#041e42]'>98%</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-2xl font-bold'>Design</h1>
                                <p className='text-5xl mt-4 font-bold text-[#041e42]'>94%</p>
                            </div>
                        </div>
                        <Link to="/contact">
                            <button className="btn my-8 rounded-full px-16 bg-red-400 border-red-400 text-white">Contactez-nous</button>
                        </Link>
                    </div>
                    <div className='flex justify-center lg:w-[40%] mx-8 pb-8'>
                        <img src={website} alt="website" className='rounded-2xl lg:w-[100%]' />
                    </div>
                </div>
            </div>
        </div>

        <div className='mx-6 lg:mx-24 xl:mx-48 mt-24 flex flex-col lg:flex-row items-center justify-around'>
                <div className='flex flex-col justify-center items-center lg:w-[50%] lg:items-start lg:mr-12'>
                    <h2 className='font-bold'>FAQ</h2>
                    <h1 className='my-6 text-3xl text-center lg:text-start font-bold capitalize'>Questions fréquemments posées</h1>
                    <p className='text-center mb-6 lg:w-[70%] lg:text-start'>Vous trouverez ci-dessous les questions les plus fréquemments posées par nos clients concernants le service séléctionné.</p>
                    <div className='mb-12'>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            Pourquoi choisir une agence de communication telle que M&V Digital Developpement ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Choisir M&V Digital Développement pour la création de site internet, la publicité en ligne et la gestion des réseaux sociaux vous offre expertise professionnelle, efficacité, et une approche intégrée qui maximise votre visibilité et optimise vos investissements. L&apos;agence vous aide à économiser du temps en gérant toutes vos nécessités numériques sous un même toit, assurant des résultats mesurables et un accompagnement personnalisé pour répondre à vos objectifs spécifiques.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none my-6">
                            <div className="collapse-title text-xl font-medium">
                            Pourquoi devrais-je choisir MV Digital pour gérer mes réseaux sociaux ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Opter pour MV Digital pour la gestion de vos réseaux sociaux vous offre expertise et efficacité, permettant d&apos;améliorer votre interaction avec l&apos;audience et d&apos;élargir votre présence en ligne. MV Digital libère vos ressources internes en prenant en charge la création de contenu engageant, l&apos;analyse des performances, et l&apos;ajustement des stratégies en temps réel. Cela vous assure que votre communication numérique est gérée par des professionnels, optimisant ainsi vos investissements et favorisant la croissance de votre marque.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-[1px] border-black rounded-none">
                            <div className="collapse-title text-xl font-medium">
                            MV Digital propose-t-elle des consultations ou des audits gratuits avant de commencer un projet ?
                            </div>
                            <div className="collapse-content"> 
                                <p>Oui, MV Digital offre des consultations initiales ou des audits gratuits avant de commencer un projet. Cela permet à l&apos;agence de mieux comprendre les besoins spécifiques de chaque client et d&apos;évaluer l&apos;état actuel de leur présence en ligne. Durant cette phase préliminaire, MV Digital peut identifier les défis et les opportunités pour formuler une stratégie efficace. Cet audit initial aide à établir une relation de confiance et à assurer que les objectifs du client sont clairement définis et compris avant de s&apos;engager dans un projet complet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={servicesFAQ} alt="" />
                </div>
            </div>
      </div>



    
    </>
  );
}
