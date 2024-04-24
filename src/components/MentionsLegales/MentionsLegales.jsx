import { useEffect } from "react";

export default function MentionsLegales() {

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
            <div>
                <div>
                    <h1 className="text-center lg:pt-32 xl:pt-40 mt-6 text-3xl lg:text-4xl font-bold text-[#041e42]">Mentions Légales</h1>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <p>Le site &quot;mv-digital-developpement.fr&quot; est le site de la Micro Entreprie MV DIGITAL DEVELOPPEMENT, société de communication et création de site internet à Dole, co-dirigée par VANNIER Thomas et MARCHE Robin :
                    <br /><br />
                    Tél : 06.81.74.23.42 / 06.33.90.40.50
                    <br /><br />
                    Email : mvdigital3989@gmail.com
                    <br /><br />
                    SIREN : 908140619
                    <br /><br />
                    MV Digital Developpement est une marque déposée à l&apos;usage exclusif de la Micro Entreprie MV DIGITAL DEVELOPPEMENT</p>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <h1 className="text-center lg:text-start lg:mt-12 mt-6 text-2xl font-bold text-[#041e42]">Confidentialité</h1>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <p>Mv-digital-developpement.fr n&apos;enregistre pas d&apos;informations personnelles permettant l&apos;identification, à l&apos;exception des formulaires que l&apos;utilisateur est libre de remplir. Ces informations ne seront pas utilisées sans votre accord, nous les utiliserons seulement pour vous adresser des courriers et vous contacter.
                    <br /><br />
                    Nous pouvont procéder à des analyses statistiques sans que celles-ci soient nominatives et pourront en informer des tiers (organismes d&apos;évaluation de fréquentation) sous une forme résumée et non nominative.</p>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <h1 className="lg:mt-12 mt-6 font-bold text-[#041e42]">Les droits que vous avez sur vos données :</h1>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <p>Vous avez un droit d&apos;accès, de rectification, d&apos;opposition à communication et de suppression des données vous concernant sur simple demande via notre formulaire contact ou par courrier à l&apos;adresse indiquée ci-dessus.
                    <br /><br />
                    Ces actions seront réalisées dans les meilleurs délais, sous réserve de faisabilité technique.</p>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <h1 className="lg:mt-12 mt-6 font-bold text-[#041e42]">Utilisation des cookies :</h1>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <p>Ce site internet utilise des cookies (témoins de connexion). Un cookie est un fichier texte stocké par votre navigateur, qui lui permet de conserver des informations entre les pages internet et les sessions de navigation. Ces cookies nous permettent de conserver les informations sur votre navigation. Ils nous aident aussi à comprendre le comportement des utilisateurs sur notre site, nous permettant ainsi de rendre votre expérience plus agréable.
                    <br /><br />
                    Les cookies ne peuvent conserver que du texte, qui est toujours confidentiel et bien souvent crypté. Nous ne conservons pas de données personnelles dans un cookie.
                    <br /><br />
                    Un cookie est également utilisé pour se souvenir de vous lors de votre visite, et ne plus vous afficher le message d&apos;alerte au sujet des cookies si vous l&apos;avez accepté.</p>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <h1 className="text-center lg:text-start lg:mt-12 mt-6 text-2xl font-bold text-[#041e42]">Conception du site</h1>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <p>Réalisation du site par la Micro Entreprie MV DIGITAL DEVELOPPEMENT, agence de communication et agence web à Dole.</p>
                </div>

                <div className="mt-8 mx-4 lg:mx-24">
                    <h1 className="text-center lg:text-start lg:mt-12 mt-6 text-2xl font-bold text-[#041e42]">Hébergement du site</h1>
                </div>

                <div className="mt-8 mx-4 lg:mx-24 mb-24">
                    <p>Le site https://logiworks.fr est hébergé par HOSTINGER INTERNATIONAL LTD.
                    <br /><br />
                    61 Lordou Vironos Street 6023 Larnaca, Chypre
                    <br /><br />
                    Contact : https://www.hostinger.fr/contact</p>
                </div>



            </div>        
        </>
    );
}