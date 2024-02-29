import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./CardPage";
import Carousel from "./Carousel";

import fromagerie from "../../assets/fromagerie-ema.png";
import pronotistik from "../../assets/pronotistik.png";
import asphalteater from "../../assets/asphalt-eater.png";
import logiworks from "../../assets/logiworks.png";
import coachsportif from "../../assets/coachsportif.png";
import { useState, useEffect } from 'react';

function RealisationPage() {


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={fromagerie} 
            title={"La Fromagerie d'Ema"}
            description={"Site E-Commerce de Click & Collect pour la Fromagerie d'Ema, situé à Dole dans le Jura"}
            link={"https://www.lafromageriedema.fr"}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={logiworks} 
            title={"Logiworks"}
            description={"Site de service d'emploi spécialisé dans le recrutement des métiers du transport et de la logistique"}
            link={"https://www.logiworks.fr"}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={asphalteater} 
            title={"Asphalt Eater"}
            description={"Site E-Commerce pour la vente de prestation automobile sur circuit et sur route ouverte"}
            link={"https://www.asphalt-eater.fr"}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={pronotistik} 
            title={"Pronotistik"}
            description={"Site E-Commerce basé sur un système d'abonnement afin d'avoir accès à différentes fonctionnalités centrées sur les paris sportifs"}
            link={"https://www.pronotistik.com"}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={coachsportif} 
            title={"Franck Marche - Coach Sportif"}
            description={"Site vitrine pour un coach sportif, présentant ses différentes prestations"}
            link={"https://franck-marche-coach.vercel.app"}
        />
      )
    }
  ];
  return (
    <div className="mt-[-10px] lg:pt-12 px-12 flex flex-col justify-center items-center">
      <div className={`px-4 flex flex-col items-center justify-center lg:w-1/2 pb-10 m-4 ${scrollY > 1500 ? 'fade-in' : 'slideOffRight2'}`} id='contact'>
        <div className="mb-12">
          <h1 className="text-3xl uppercase text-center lg:text-start text-white">Nos dernieres realisations web</h1>
          <div className={`my-8 flex justify-center items-center lg:block lg:mt-2 ${scrollY > 1500 ? 'slideInRight3' : 'slideOffRight3'}`}>
            <div className='bg-white w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
          </div>
        </div>
      </div>
      <Carousel
        cards={cards}
        height=""
        width="45%"
        margin="0px auto 250px auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default RealisationPage;