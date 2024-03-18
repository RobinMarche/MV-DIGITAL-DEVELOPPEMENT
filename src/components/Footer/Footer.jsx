import logoWhite from '../../assets/logo_white.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <>
        <div className="bg-[#188FA7] text-white pb-6">
            <div className='flex justify-between items-center p-8'>
                <div>
                    <h1 className='font-bold text-xl lg:text-2xl lg:mb-2'>Plan du site</h1>
                    <div className='lg:flex lg:text-xl'>
                        <Link to="/">
                            <p>Accueil</p>
                        </Link>
                        <p className='hidden lg:block mx-4'>|</p>
                        <Link to="/equipe">
                            <p>Equipe</p>
                        </Link>
                        <p className='hidden lg:block mx-4'>|</p>
                        <Link to="/services">
                            <p>Services</p>
                        </Link>
                        <p className='hidden lg:block mx-4'>|</p>
                        <Link to="/projets">
                            <p>Projets</p>
                        </Link>
                        <p className='hidden lg:block mx-4'>|</p>
                        <Link to="/contact">
                            <p>Contact</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to="/">
                        <img src={logoWhite} alt="logo" className='w-[40vw] lg:w-[20vw]'/>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <p className='font-bold'>Agence M&V Digital Developpement</p>
                <p className='my-2'>06.33.90.40.50 / 06.81.74.23.42</p>
                <p>mvdigital3989@gmail.com</p>
            </div>
            <nav>
                <div className="flex justify-center my-4">
                    <a className='mr-4'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <Link to="https://www.facebook.com/profile.php?id=100083386928662" target='_blank'>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </Link>
                </div>
            </nav>
        </div>
        </>
    )
}