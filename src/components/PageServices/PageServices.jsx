import rocket from '../../assets/rocket.png';
import place from '../../assets/place.jpg';
import print from '../../assets/print.jpg';
import social from '../../assets/social.jpg';

export default function PageServices() {
  return (
    <>
      <div className="text-gray-900 lg:bg-[#EBEBEB] pb-24">
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

        <div className='lg:mx-36 lg:my-12 bg-white shadow-xl p-8 lg:flex lg:flex-row-reverse'>
            <div className='text-center lg:text-end p-2'>
                <h1 className="text-5xl uppercase">Le Développement Web</h1>
                <p className='mt-6 mb-6 lg:mb-0'>
                Votre présence en ligne est cruciale. Nous concevons des sites web fonctionnels, esthétiques et adaptés à vos besoins spécifiques. Que ce soit une vitrine, un site e-commerce ou une application web, nous utilisons les dernières technologies pour assurer une expérience utilisateur optimale.
                </p>
                <div className='flex justify-center lg:justify-end mt-8 mb-8 lg:mb-0'>
                    <button className='btn btn-outline'>Découvrir notre offre</button>
                </div>
            </div>
            <div className='lg:w-[100vw] xl:w-[80vw] 2xl:w-[40vw] relative'>
                <img src={place} alt="place" className='lg:w-[100vw] xl:w-[80vw] 2xl:w-[40vw]'/>
            </div>
        </div>

        <div className='lg:mx-36 lg:my-12 bg-white shadow-xl p-8 lg:flex'>
            <div className='text-center lg:text-start p-2'>
                <h1 className="text-5xl uppercase">Le Service Print</h1>
                <p className='mt-6 mb-6 lg:mb-0'>
                Donnez une dimension tangible à votre identité avec notre expertise en impression. Chez M&V Digital Developpement, nous sublimons vos idées sur papier, créant des supports print exceptionnels qui captivent et laissent une impression mémorable.
                </p>
                <div className='flex justify-center lg:justify-start mt-8 mb-8 lg:mb-0'>
                    <button className='btn btn-outline'>Découvrir notre offre</button>
                </div>
            </div>
            <div className='lg:w-[100vw] xl:w-[80vw] 2xl:w-[40vw] relative'>
                <img src={print} alt="place" className='lg:w-[100vw] xl:w-[80vw] 2xl:w-[40vw]'/>
            </div>
        </div>

        <div className='lg:mx-36 lg:my-12 bg-white shadow-xl p-8 lg:flex lg:flex-row-reverse'>
            <div className='text-center lg:text-end p-2'>
                <h1 className="text-5xl uppercase">Le Community Management</h1>
                <p className='mt-6 mb-6 lg:mb-0'>
                De la création d&apos;identité visuelle à la gestion de campagnes publicitaires, notre équipe créative s&apos;engage à donner vie à votre histoire de manière captivante. Nous concevons des messages impactants et des stratégies de communication cohérentes pour renforcer votre positionnement sur le marché.
                </p>
                <div className='flex justify-center lg:justify-end mt-8 mb-8 lg:mb-0'>
                    <button className='btn btn-outline'>Découvrir notre offre</button>
                </div>
            </div>
            <div className='lg:w-[100vw] xl:w-[80vw] 2xl:w-[40vw] relative'>
                <img src={social} alt="place" className='lg:w-[100vw] xl:w-[80vw] 2xl:w-[40vw]'/>
            </div>
        </div>
      </div>



    
    </>
  );
}
