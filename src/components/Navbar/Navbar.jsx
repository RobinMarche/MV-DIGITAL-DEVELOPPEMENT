import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo_white.png';
import phone from '../../assets/phone.png';
import menu from '../../assets/menu.png';
import xcircle from '../../assets/x.png';
import xWhite from '../../assets/xcircle.png';
import phoneWhite from '../../assets/phoneWhite.png';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollBackground, setScrollBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const shouldChangeBackground = scrollPosition > 400;
          setScrollBackground(shouldChangeBackground);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handlePhoneClick = () => {
        // Mettre ici le numéro de téléphone à appeler
        const phoneNumber = '0681742342';
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <>
        <div className='relative'>

        <div className='relative lg:hidden z-10'>

            <div className={`flex justify-between p-4 items-center ${showMenu ? 'text-white bg-[#188FA7] transition-bg' : 'text-[#022a60]'}`}>
                <div onClick={handleMenu}>
                    {showMenu ? <img src={xWhite} alt="close-menu" /> : <img src={menu} alt="menu-burger" />}
                </div>
                <div>
                    <Link to="/">
                        <p className='text-xl' id='title-navbar'>M&V</p>
                    </Link>
                </div>
                <div onClick={handlePhoneClick}>
                    {showMenu ? <img src={phoneWhite} alt="phone" /> : <img src={phone} alt="phone" />}
                </div>
            </div>

            <CSSTransition
                in={showMenu}
                timeout={1000}
                classNames="menu"
                unmountOnExit
                >
                <div className="menu-container bg-[#188FA7] pb-24 min-h-screen absolute w-full lg:w-1/2 top-14 right-0">
                    <ul className='text-white text-center text-[300%] uppercase flex flex-col font-bold lg:text-start lg:pl-24 lg:text-[600%]' id='font-menu'>
                            <Link to="/" onClick={handleMenu}>
                                <li className='text-container mt-4 mb-4'>Accueil</li>
                            </Link>

                            <Link to="/equipe" onClick={handleMenu}>
                                <li className='text-container mb-4'>Equipe</li>
                            </Link>
                            <Link to="/services" onClick={handleMenu}>
                                <li className='text-container mb-4'>Services</li>
                            </Link>
                            <Link to="/projets" onClick={handleMenu}>
                                <li className='text-container mb-4'>Projets</li>
                            </Link>
                            <Link to="/contact" onClick={handleMenu}>
                                <li className='text-container mb-4'>Contact</li>
                            </Link>
                    </ul>
                    <footer className="footer pt-10 bg-[#188FA7] text-neutral-content flex justify-around items-center">
                        <aside>
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                            <p>M&V Digital Developpement<br/>Agence de Développement Web et <br /> Marketing digital depuis 2023</p>
                        </aside> 
                        <nav>
                            <h6 className="footer-title">Social</h6> 
                            <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <Link to="https://www.facebook.com/profile.php?id=100083386928662" target="_blank">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </Link>
                            </div>
                        </nav>
                    </footer>
                
                </div>
            </CSSTransition>
        </div>


        <div className={`hidden lg:block items-center px-8 w-full fixed z-10 transition-all duration-500 ${scrollBackground ? 'bg-[#188fa7] shadow-xl' : 'bg-opacity-[0] bg-white'}`}>
            <div className={`flex justify-between p-4 items-center`}>
                    <div onClick={handleMenu} className='hover:cursor-pointer'>
                        {showMenu ? <img src={xcircle} alt="close-menu" className='xl:w-[1.7vw]'/> : <img src={menu} alt="menu-burger" className='xl:w-[1.7vw]'/>}
                    </div>
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" className={`${scrollBackground ? 'w-[7vw]' : 'w-[10vw]'}`}/>
                        </Link>
                    </div>
                    <div className='flex text-white p-2 rounded-xl items-center'>

                    </div>
            </div>
        
            <CSSTransition
                in={showMenu}
                timeout={1000}
                classNames="desktop"
                unmountOnExit
            >
                <div className="desktop-container bg-[#188FA7] pb-24 min-h-screen absolute lg:w-2/3 top-0 right-0 shadow-2xl flex flex-col">
                    <ul className='text-white text-end text-[400%] uppercase flex flex-col font-bold lg:text-start lg:pl-24 lg:text-[400%]' id='font-menu'>
                        <img src={logoWhite} alt="logo" className='w-[15vw] py-12'/>
                        <Link to="/" onClick={handleMenu}>
                            <li className='pr-4 text-container hover:cursor-pointer hover:text-black'>Accueil</li>       
                        </Link>

                        <Link to="/equipe" onClick={handleMenu}>
                            <li className='pr-4 text-container hover:cursor-pointer hover:text-black'>Equipe</li>
                        </Link>
                        <Link to="/services" onClick={handleMenu}>
                            <li className='pr-4 text-container hover:cursor-pointer hover:text-black'>Services</li>
                        </Link>
                        <Link to="/projets" onClick={handleMenu}>
                            <li className='pr-4 text-container hover:cursor-pointer hover:text-black'>Projets</li>
                        </Link>
                        <Link to="/contact" onClick={handleMenu}>
                            <li className='pr-4 text-container hover:cursor-pointer hover:text-black'>Contact</li>
                        </Link>
                    </ul>

                    <footer className="footer pt-10 bg-[#188FA7] text-neutral-content pl-24 2xl:pt-18">
                        <aside>
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                            <p>M&V Digital Developpement<br/>Agence de Développement Web et Marketing digital depuis 2023</p>
                        </aside> 
                        <nav>
                            <h6 className="footer-title">Social</h6> 
                            <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <Link to="https://www.facebook.com/profile.php?id=100083386928662" target="_blank">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </Link>
                            </div>
                        </nav>
                    </footer>
                </div>
            </CSSTransition>        
        </div>
        </div>
        </>
    );
}
