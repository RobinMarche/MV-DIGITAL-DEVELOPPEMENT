import logoWhite from '../../assets/MVLogoWhite.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <>
        <div className="bg-[#188FA7] text-white pb-6">
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center lg:items-start items-center p-8'>
                <div className=''>
                    <Link to="/">
                        <img src={logoWhite} alt="logo" className='w-[20vw] lg:w-[10vw]'/>
                    </Link>
                    <div className='hidden lg:block'>
                        <div className='text-center lg:text-start '>
                            <p className='font-bold text-[#041e42]'>Agence M&V Digital Developpement</p>
                            <p className='my-2'>06.33.90.40.50 / 06.81.74.23.42</p>
                            <p>mvdigital3989@gmail.com</p>
                        </div>
                        <nav>
                            <div className="flex justify-center lg:justify-start my-4">
                                <a className='mr-4'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <Link to="https://www.facebook.com/profile.php?id=100083386928662" target='_blank'>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl lg:text-xl lg:mb-2 text-[#041e42] text-center lg:text-start'>Plan du site</h1>
                    <div className='lg:flex lg:text-lg lg:flex-col text-center lg:text-start'>
                        <Link to="/">
                            <p className='my-2 hover:text-black'>Accueil</p>
                        </Link>
                        <Link to="/equipe">
                            <p className='my-2 hover:text-black'>Equipe</p>
                        </Link>
                        <Link to="/services">
                            <p className='my-2 hover:text-black'>Services</p>
                        </Link>
                        <Link to="/projets">
                            <p className='my-2 hover:text-black'>Projets</p>
                        </Link>
                        <Link to="/contact">
                            <p className='my-2 hover:text-black'>Contact</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl lg:text-xl lg:mb-2 mt-6 lg:mt-0 text-[#041e42] text-center lg:text-start'>Nos Services</h1>
                    <div className='lg:flex lg:flex-col lg:text-lg text-center lg:text-start'>
                        <Link to="/">
                            <p className='my-2 hover:text-black'>Création de sites Web</p>
                        </Link>
                        <Link to="/equipe">
                            <p className='my-2 hover:text-black'>Gestion des réseaux sociaux</p>
                        </Link>
                        <Link to="/services">
                            <p className='my-2 hover:text-black'>Logos & supports imprimés</p>
                        </Link>
                        <Link to="/projets">
                            <p className='my-2 hover:text-black'>Publicités en ligne</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-center lg:text-start lg:mx-24 lg:hidden'>
                <p className='font-bold text-[#041e42]'>Agence M&V Digital Developpement</p>
                <p className='my-2'>06.33.90.40.50 / 06.81.74.23.42</p>
                <p>mvdigital3989@gmail.com</p>
            </div>
            <nav className='lg:hidden'>
                <div className="flex justify-center lg:justify-start lg:mx-24 my-4">
                    <a className='mr-4'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <Link to="https://www.facebook.com/profile.php?id=100083386928662" target='_blank'>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </Link>
                </div>
            </nav>
            <div className='flex justify-between mx-4 lg:justify-end'>
                <Link to="/mentions-legales">
                    <p className='hover:text-black'>Mentions Légales</p>
                </Link>
                <p className='lg:mx-4'>-</p>
                <Link to="/mentions-legales">
                    <p className='hover:text-black'>Conditions Générales de Vente</p>
                </Link>
            </div>
        </div>
        </>
    )
}