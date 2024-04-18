import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'given') {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'given');
    setShowBanner(false);
    // Activer Google Analytics ici si nécessaire
    ReactGA.initialize('G-WPSXB94Q39');
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div className='fixed bottom-0 lg:bottom-4 lg:right-4 z-50 bg-white lg:w-2/4 xl:w-1/3 p-8 text-black rounded-2xl border-[1px] border-[#188fa7] text-sm shadow-2xl'>
      <h2 className='text-center mb-6 text-lg'>Gérer le consentement aux cookies</h2>
      <p>Pour offrir les meilleures expériences, nous utilisons des technologies telles que les cookies pour stocker et/ou accéder aux informations des appareils. Le fait de consentir à ces technologies nous permettra de traiter des données telles que le comportement de navigation ou les ID uniques sur ce site. Le fait de ne pas consentir ou de retirer son consentement peut avoir un effet négatif sur certaines caractéristiques et fonctions.</p>
      <div className='mt-8 flex flex-col lg:flex-row justify-between'>
        <button onClick={handleConsent} className='btn-md bg-[#188fa7] rounded-xl text-white w-full'>Accepter</button>
        <button onClick={handleRefuse} className='btn-md w-full rounded-xl lg:mx-2 my-2 lg:my-0 bg-gray-200'>Refuser</button>
        <Link to="/mentions-legales" className=' w-full rounded-xl bg-gray-200'>
            <button className='btn-md w-full rounded-xl bg-gray-200'>Mentions Légales</button>
        </Link>
      </div>
    </div>
  );
};

export default CookieConsent;
