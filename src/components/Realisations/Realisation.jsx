import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

import fromagerie from "../../assets/fromagerie-ema.png";
import pronotistik from "../../assets/pronotistik.png";
import asphalteater from "../../assets/asphalt-eater.png";
import logiworks from "../../assets/logiworks.png";
import coachsportif from "../../assets/coachsportif.png";



function Realisations() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={fromagerie} 
            title={"La Fromagerie d'Ema"}
            description={"Site E-Commerce de Click & Collect pour la Fromagerie d'Ema, situé à Dole dans le Jura"}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={logiworks} 
            title={"Logiworks"}
            description={"Site de service d'emploi spécialisé dans le recrutement des métiers du transport et de la logistique"}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
            imagen={asphalteater} 
            title={"Asphalt Eater"}
            description={"Site E-Commerce pour la vente de prestation automobile sur circuit et sur route ouverte"}
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
        />
      )
    }
  ];
  return (
    <div className=" mt-24">
        <h1 className="uppercase text-3xl text-center">Nos dernieres Réalisations</h1>
        <div className='mb-16 lg:mb-36 flex justify-center items-center mt-2'>
            <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw]'></div>
        </div>
      <Carousel
        cards={cards}
        height="500px"
        width="50%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Realisations;