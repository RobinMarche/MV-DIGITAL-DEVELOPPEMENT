import rocket from '../../assets/rocket.png';
import uxdesign from '../../assets/ux_design.jpg';
import print from '../../assets/print2.jpg';
import web from '../../assets/web.jpg';
import community from '../../assets/community_manager.jpg';
import website from '../../assets/website.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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
      <div className="text-gray-900 bg-[#188FA7] lg:pb-24" id='servicesPage'>
        <div className='bg-white'>
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
                <h1 className='text-4xl lg:text-5xl text-white' id='title2'>Comment pouvons nous vous aider ?</h1>
            </div>

            <div>
                <div className='flex flex-wrap justify-center items-center lg:mx-24 2xl:mx-48'>
                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={web} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Web et Web Mobile</h1>
                        <p className='my-6'>Votre présence en ligne est cruciale. Nous concevons des sites web fonctionnels, esthétiques et adaptés à vos besoins spécifiques. Que ce soit une vitrine, un site e-commerce ou une application web, nous utilisons les dernières technologies pour assurer une expérience utilisateur optimale.</p>
                        <Link to="/services/web">
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </Link>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={uxdesign} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Logo et supports imprimés</h1>
                        <p className='my-6'>Explorez une expérience utilisateur immersive et intuitive avec notre conception UX, où chaque élément est soigneusement orchestré pour créer une synergie harmonieuse entre fonctionnalité et esthétique, redéfinissant ainsi la manière dont vous interagissez avec notre site web.</p>
                        <Link to="/services/print">
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </Link>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={print} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Gestion des réseaux sociaux</h1>
                        <p className='my-6'>Donnez une dimension tangible à votre identité avec notre expertise en impression. Chez M&V Digital Developpement, nous sublimons vos idées sur papier, créant des supports print exceptionnels qui captivent et laissent une impression mémorable.</p>
                        <Link to="/services/gestion-rs">
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </Link>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={community} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-2xl text-[#188FA7] tracking-widest' id='subtitle'>Publicités en ligne</h1>
                        <p className='my-6'>De la création d&apos;identité visuelle à la gestion de campagnes publicitaires, notre équipe créative s&apos;engage à donner vie à votre histoire de manière captivante. Nous concevons des messages impactants et des stratégies de communication cohérentes pour renforcer votre positionnement sur le marché.</p>
                        <Link to="/services/publicites">
                            <button className='font-bold text-blue-500'>En savoir plus</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <div className='lg:flex lg:flex-row-reverse lg:mt-32 lg:justify-center'>
                    <div className='text-center lg:text-start px-8 lg:w-[40%]' >
                        <h2 className='mt-8 text-white'>Notre équipe à votre écoute</h2>
                        <h1 className='text-4xl lg:text-6xl mt-4 mb-4 text-white' id='title2'>Vous avez un projet ?</h1>
                        <div className='bg-white w-[10vw] h-[2px] lg:my-8 hidden lg:block'></div>
                        <p className='text-white text-xl' id='subtitle'>Votre succès en ligne commence ici ! <br /><br /> Explorez de nouveaux horizons digitaux avec notre accompagnement.</p>
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
      </div>



    
    </>
  );
}
