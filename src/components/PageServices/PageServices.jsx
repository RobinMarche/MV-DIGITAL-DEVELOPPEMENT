import rocket from '../../assets/rocket.png';
import uxdesign from '../../assets/ux_design.jpg';
import print from '../../assets/print2.jpg';
import web from '../../assets/web.jpg';
import community from '../../assets/community_manager.jpg';
import website from '../../assets/website.jpg';
import { Link } from 'react-router-dom';

export default function PageServices() {
  return (
    <>
      <div className="text-gray-900 bg-[#EBEBEB] lg:pb-24" id='servicesPage'>
        <div className='bg-white'>
            <div className="container mx-auto pt-20 lg:py-20 lg:flex ">
                <div className="text-center lg:text-start lg:w-[70vw] lg:flex lg:flex-col lg:items-start lg:justify-center lg:px-16">
                    <h1 className="text-5xl uppercase">Propulsez votre réussite</h1>
                    <p className="text-xl text-gray-500 mt-4 uppercase text-center lg:text-start py-6">
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
                <h1 className='text-3xl uppercase lg:text-4xl'>Comment pouvons nous vous aider ?</h1>
                <p className='mt-6 lg:mx-48'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptate architecto corporis sapiente voluptatem provident. Qui eligendi reprehenderit dicta harum beatae debitis placeat! Obcaecati alias tempore voluptates.</p>
            </div>

            <div>
                <div className='flex flex-wrap justify-center items-center lg:mx-24 2xl:mx-48'>
                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={web} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-xl'>Web et Web Mobile</h1>
                        <p className='my-6'>Votre présence en ligne est cruciale. Nous concevons des sites web fonctionnels, esthétiques et adaptés à vos besoins spécifiques. Que ce soit une vitrine, un site e-commerce ou une application web, nous utilisons les dernières technologies pour assurer une expérience utilisateur optimale.</p>
                        <button className='font-bold text-blue-500'>En savoir plus</button>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={uxdesign} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-xl'>UX Design</h1>
                        <p className='my-6'>Explorez une expérience utilisateur immersive et intuitive avec notre conception UX, où chaque élément est soigneusement orchestré pour créer une synergie harmonieuse entre fonctionnalité et esthétique, redéfinissant ainsi la manière dont vous interagissez avec notre site web.</p>
                        <button className='font-bold text-blue-500'>En savoir plus</button>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={print} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-xl'>Print</h1>
                        <p className='my-6'>Donnez une dimension tangible à votre identité avec notre expertise en impression. Chez M&V Digital Developpement, nous sublimons vos idées sur papier, créant des supports print exceptionnels qui captivent et laissent une impression mémorable.</p>
                        <button className='font-bold text-blue-500'>En savoir plus</button>
                    </div>

                    <div className='flex flex-col items-center text-center m-6 shadow-xl p-4 rounded-xl bg-white lg:w-[30vw] lg:py-24 lg:px-12'>
                        <img src={community} alt="web" className='md:w-1/2' />
                        <h1 className='font-bold text-xl'>Community Management</h1>
                        <p className='my-6'>De la création d&apos;identité visuelle à la gestion de campagnes publicitaires, notre équipe créative s&apos;engage à donner vie à votre histoire de manière captivante. Nous concevons des messages impactants et des stratégies de communication cohérentes pour renforcer votre positionnement sur le marché.</p>
                        <button className='font-bold text-blue-500'>En savoir plus</button>
                    </div>
                </div>
            </div>

            <div>
                <div className='lg:flex lg:flex-row-reverse lg:mt-32 lg:justify-center'>
                    <div className='text-center lg:text-start px-8 lg:w-[40%]' >
                        <h2 className='mt-8 text-blue-500'>Notre équipe à votre écoute</h2>
                        <h1 className='text-3xl uppercase lg:text-5xl mt-4 mb-4' >Vous avez un projet ?</h1>
                        <div className='bg-black w-[10vw] h-[2px] lg:my-8 hidden lg:block'></div>
                        <p className='lg:text-xl lg:w-2/3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, maiores nostrum delectus culpa illo corporis illum</p>
                        <Link to="/contact">
                            <button className='btn bg-blue-500 text-white my-8 lg:mt-24 lg:px-12'>Contactez-nous !</button>
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
