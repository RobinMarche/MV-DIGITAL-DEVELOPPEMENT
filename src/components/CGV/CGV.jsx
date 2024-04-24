import { useEffect } from "react";

export default function CGV() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);


    return(
        <>
            <div className="p-4 lg:p-24 lg:pt-48">
                <div>
                    <h1 className="text-center text-2xl lg:text-4xl font-bold text-[#041e42]">Conditions Générales de Vente</h1>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">1. CHAMP D’APPLICATION</h2>
                    <p>Les présentes Conditions Générales de Vente s’appliquent sans restriction ni réserve à l’ensemble des produits et des services proposés par la société MV DIGITAL DEVELOPPEMENT. <br /><br />
                    À défaut de dispositions particulières stipulées par écrit, le fait de
                    passer commande à MV DIGITAL DEVELOPPEMENT implique l’acceptation pleine et entière de nos Conditions Générales de Vente, accessibles à tout moment à partir de
                    l’adresse Internet https://www.mv-digital-developpement.fr/cgv/. Les Conditions Générales applicables et opposables au Client sont celles en vigueur à la date de la commande. MV DIGITAL DEVELOPPEMENT peut les modifier à tout moment, mais ces modifications ne peuvent en aucun cas s’appliquer aux contrats conclus antérieurement.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">2. RESPONSABILITÉS DU CLIENT</h2>
                    <p>Le Client devra reconnaître avoir eu les autorisations relatives aux droits d’auteur ou droits voisins pour les contenus mis en ligne sur Internet. Ces contenus diffusés sur Internet par le Client sont sous sa seule et unique responsabilité. Le Client s’engage à fournir à MV DIGITAL DEVELOPPEMENT des données et informations loyales, de qualité et conformes à la législation en vigueur, et à respecter l’ensemble des prescriptions légales et réglementaires en vigueur relatives à l’informatique, aux fichiers et aux libertés. <br /><br />
                    Le Client est parfaitement conscient qu’à compter de la date à laquelle il souscrit à l’offre et qu’il transmet son mode de paiement, MV DIGITAL DEVELOPPEMENT commencera à le facturer, et l’équipe MV DIGITAL DEVELOPPEMENT sera à sa disposition pour l’accompagner dans l’élaboration de son offre. Dans le cas où le Client ne sollicite pas MV DIGITAL DEVELOPPEMENT malgré cette mise à disposition, ou dans le cas où l’attitude du Client ne mettrait pas MV DIGITAL DEVELOPPEMENT en mesure d’exécuter sa mission, l’offre du Client ne pourra pas être réalisée et le Client ne pourra en aucun cas se faire rembourser des sommes payées
                    au titre de la mise à disposition du service, bien qu’il ne soit pas utilisé.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">3. PROPRIÉTÉ</h2>
                    <p>Le Client ne dispose pas du droit de réutiliser ce code source pour un autre projet que celui qui lui a été vendu par MV DIGITAL DEVELOPPEMENT, les
                    droits du Client étant conformes aux dispositions de l’article L.122-6-1 IV du Code de la Propriété Intellectuelle. <br /><br />
                    Le Client est propriétaire des éléments individuels comme les textes, les photos et le nom de domaine apportés à MV DIGITAL DEVELOPPEMENT et utilisés en vue de la conception du site Web. <br /><br />
                    Conformément à l’article L 111-1 du Code de la propriété intellectuelle, MV DIGITAL DEVELOPPEMENT reste le propriétaire exclusif de la base du site, donc de son code source, des textes produits par MV DIGITAL DEVELOPPEMENT,
                    des visuels apportés par MV DIGITAL DEVELOPPEMENT, ainsi que de toutes les créations graphiques réalisées en interne (identité visuelle, affiches, flyers…). Le Client peut demander la récupération de la
                    gestion de son nom de domaine, sous réserve que son dossier comptable soit favorable.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">4. TARIFS</h2>
                    <p>
                    Les tarifs en vigueur des prestations MV DIGITAL DEVELOPPEMENT sont disponibles auprès de nos experts sur simple demande. À l’exception des modifications annuelles de tarifs consécutives à l’application éventuelle d’un taux lié à l’inflation ou à la déflation, toute modification de tarif sera
                    notifiée au Client au moins un mois avant sa date d’application. <br /><br />À défaut de contestation par le Client de ces nouveaux tarifs dans le respect du délai indiqué ci-dessus, ceux-ci sont
                    réputés avoir été définitivement et irrévocablement acceptés par le Client. <br /><br /> La mise en production de toutes les offres se fait à l’issue du délai légal de rétractation. <br /><br />Les paiements
                    seront donc dus dès le premier mois, même dans les cas où les produits sont en cours de production et/ou de livraison.

                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">5. GARANTIES</h2>
                    <p>
                    MV DIGITAL DEVELOPPEMENT se réserve le droit de modifier à tout moment les caractères de ses infrastructures techniques et le choix de ses fournisseurs techniques. Compte tenu de la complexité des
                    réseaux mondiaux, de l’inégalité des capacités des différents sous réseaux, de l’afflux à certaines heures des utilisateurs, le prestataire ne peut en aucun cas être tenu responsable
                    des vitesses d’accès depuis d’autres sites dans le monde ou de ralentissement externes. <br /><br /> La société MV DIGITAL DEVELOPPEMENT peut être amenée à interrompre le service à des fins de maintenance de sa
                    plate-forme d’hébergement. Sa responsabilité ne saurait être engagée si cette plate-forme d’hébergement était indisponible pour des raisons de force majeure telles que défaillance
                    de longue durée du réseau public de distribution d’électricité, grèves, émeutes, guerres, tempêtes, tremblements de terre, défaillance du réseau public des télécommunications, perte
                    de connectivité Internet dues aux opérateurs publics et privés dont dépend MV DIGITAL DEVELOPPEMENT.

                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">6. PRESTATION(S) COMPLÉMENTAIRE(S)</h2>
                    <p>
                    Ces prestations nécessitent une étude et l’acceptation d’un devis préalable pour la conception et la réalisation des nouveaux contenus et/ou l’ajout de nouvelles fonctionnalités au site Internet. Les interventions après livraison, hors correction de bugs éventuels, pourront faire l’objet de devis complémentaires.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">7. PAIEMENT</h2>
                    <p>
                    En rémunération de ses prestations, MV DIGITAL DEVELOPPEMENT percevra les sommes dont les montants et modalités de règlement sont fixés aux Conditions Particulières ou à la commande (signature du devis, contrat ou bon de commande). <br /><br /> Sauf indication contraire de MV DIGITAL DEVELOPPEMENT, le paiement s’effectue comptant au moyen d’un prélèvement bancaire à la réception de la facture définitive. La réception de la facture définitive intervenant comme suit : Offres RÉSEAUX SOCIAUX, RÉFÉRENCEMENT PAYANT GOOGLE ADS, LEBONCOIN, et SITE INTERNET, Offres spéciales GRAPHISME : La réception de la facture définitive interviendra dans un délai de 15 jours suivant la signature du bon de commande tenant lieu de facture provisoire. <br /><br />
                    Les droits et taxes seront facturés à leur taux légal à la date de facturation. Le paiement des prestations périodiques (hébergement, gestion de nom de domaine, maintenance…) se fait mensuellement, trimestriellement ou annuellement. L’expiration du délai légal de rétractation conditionne le démarrage technique du projet.

                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">8. RETARD DE PAIEMENT</h2>
                    <p>
                    À défaut de paiement à la date prévue, l’indemnité forfaitaire pour frais de recouvrement de 40 euros, prévue par la loi n° 2012-387 du 22 mars 2012 sera perçue de plein droit, sans préjudice d’un intérêt de retard égal au taux d’intérêt de la Banque Centrale Européenne (BCE) pour ses opérations de refinancement, majoré de 10 points. Lequel est immédiatement exigible, sans qu’un rappel ne soit nécessaire, en application de l’article 53 de la loi n° 2001-420 du 15 mai 2001. Les intérêts sont capitalisés dans les conditions de l’article 1154 du Code civil. <br /><br />
                    À titre de clause pénale, le débiteur défaillant devra acquitter entre les mains du Vendeur, une indemnité forfaitaire de 500 euros, sans préjudice d’éventuels frais de recouvrement. Si pour quelques raisons que ce soit nous ne parvenons pas à prélever votre paiement (par exemple solde insuffisant, etc.), nous renvoyons alors la demande de prélèvement à votre banque. <br /><br /> Si vous ne respectez pas votre obligation de paiement, MV DIGITAL DEVELOPPEMENT se réserve le droit de suspendre l’exécution des prestations ou de restreindre la fourniture des services jusqu’à ce que vous vous conformiez à votre obligation de paiement. <br /><br />
                    Le Client dispose d’un délai de 2 mois à compter du premier défaut de paiement pour régulariser la situation. Le fait de suspendre les prestations n’exonère pas le Client du paiement de la totalité des sommes dues et majorations appliquées.
                    Le Client est averti que les services d’hébergement, gestion des domaines et gestion des e-mails sont gérés de manière automatique et que le non-paiement des sommes dues entraînera la suspension de ces services le lendemain de la date de limite de paiement de la facture. <br /><br /> En aucun cas, MV DIGITAL DEVELOPPEMENT ne pourra être tenu pour responsable des éventuelles pertes occasionnées à la suite de l’arrêt des services fournis pour non-paiement des sommes dues.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">9. RÉSILIATION</h2>
                    <h3 className="font-bold">9.1 Résiliation de la part du client</h3>
                    <p>
                    Le Client informera MV DIGITAL DEVELOPPEMENT de sa volonté de résilier tout contrat, obligatoirement par courrier recommandé avec accusé de réception à l’adresse du siège social de la société MV DIGITAL DEVELOPPEMENT .
                    La demande de résiliation sera traitée à réception, étant entendu que toute période entamée sera intégralement due par le Client.
                    Conditions de résiliation des offres : <br /><br />
                    </p>
                    <h3 className="font-bold">9.1.1 Offre avec engagement</h3>
                    <p>Le Contrat prend effet à la date de sa signature par le Client pour une durée de 12 ou 24 mois à compter du début de la prestation de service, renouvelable par tacite reconduction à compter de cette date anniversaire pour des durées successives de 12 ou 24 mois sauf à être dénoncé par le Client par LRAR avant la prochaine échéance contractuelle, moyennant un préavis d’un (1) mois pour les contrats de 12 mois et deux (2) mois pour les contrats de 24 mois. <br /><br />
                    Lorsque le Client est engagé pour 12 ou 24 mois, ce dernier devra alors payer l’intégralité des sommes restant dues jusqu’au terme de l’engagement.
                    Chaque modification du périmètre initial des Prestations matérialisée par un nouveau Contrat fera courir un nouveau délai de 12 ou 24 mois à compter de la nouvelle mise en service, lequel sera tacitement renouvelable conformément au principe énoncé ci-avant.
                    </p>
                    <h3 className="font-bold mt-4">9.2 Résiliation de MV DIGITAL DEVELOPPEMENT</h3>
                    <p>
                    MV DIGITAL DEVELOPPEMENT se réserve le droit de résilier unilatéralement l’abonnement du Client en cas de défaut de paiement ou toute autre faute grave (par exemple et sans que cela soit exhaustif : <br /><br />
                    utilisation de contenus illicites ou propos insultants envers les collaborateurs MV DIGITAL DEVELOPPEMENT , etc.), sans indemnité.  <br /><br />Cette résiliation interviendra dès la notification par MV DIGITAL DEVELOPPEMENT au Client par
                    LRAR ou par courriel.
                    </p>
                    <h3 className="font-bold mt-4">9.2.1 Offre avec engagement</h3>
                    <p>Le Contrat prend effet à la date de sa signature par le Client pour une durée de 12 ou 24 mois à compter de la date de mise en service, renouvelable par tacite reconduction à compter de cette date anniversaire pour des durées successives de 12 ou 24 mois sauf à être dénoncé par MV DIGITAL DEVELOPPEMENT. <br /><br />
                    Lorsque le Client est engagé pour 12 ou 24 mois, ce dernier devra alors payer l’intégralité des sommes restant dues jusqu’au terme de l’engagement.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">10. ABONNEMENT ET ENGAGEMENT</h2>
                    <p>
                    L’abonnement de la maintenance et de l’hébergement du site du Client ou l’accès aux services en ligne lorsqu’il est souscrit, entre en vigueur à compter de la date de l’enregistrement par MV DIGITAL DEVELOPPEMENT de la commande du Client. <br /><br /> Le contrat de maintenance, d’hébergement et de nom de domaine court à compter de la signature du contrat de prestation de service. Les contrats de création et de maintenance, d’hébergement, de nom de domaine sont indépendants les uns des autres. L’annulation de l’un n’entraîne pas l’annulation de l’autre. <br /><br />
                    L’abonnement est mensuel, avec tacite reconduction automatique.

                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">11. RÉFÉRENCE AU CLIENT</h2>
                    <p>
                    Le Client autorise MV DIGITAL DEVELOPPEMENT à mentionner son nom ou sa dénomination sociale, et à l’illustrer de son logo dans ses documents commerciaux, à titre de référence aux fins de la promotion commerciale de MV DIGITAL DEVELOPPEMENT .
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">12. TRAITEMENT DES DONNÉES À CARACTÈRE PERSONNEL</h2>
                    <p>
                    Respect de la réglementation : MV DIGITAL DEVELOPPEMENT et son Client s’engagent à respecter les dispositions légales et réglementaires en vigueur en France et en Europe relatives à la protection des personnes physiques à l’égard du stockage, du traitement des données à caractère personnel et à la libre circulation de ces données. Notamment, le Client demeure le seul responsable des traitements de données à caractère personnel réalisés pour son propre compte ou pour le compte d’un tiers. Le Client reste l’unique responsable du choix des services souscrits. 
                    <br /><br />
                    En particulier, il doit vérifier l’adéquation des caractéristiques requises pour procéder aux traitements des données, notamment si ceux-ci ont vocation à traiter des données sensibles soumises à des dispositions légales ou réglementaires spécifiques (données de santé ou informations de paiement, par exemple).
                    <br /><br />
                    Sécurité : MV DIGITAL DEVELOPPEMENT prend toutes les précautions utiles pour préserver la sécurité et la confidentialité des données à caractère personnel auxquelles elle a accès, et notamment empêcher qu’elles soient déformées, endommagées ou que des tiers non autorisés y aient accès. À l’exception des applications mises à disposition par MV DIGITAL DEVELOPPEMENT et dont elle se porte garante de la sécurité, le Client assure de son côté la sécurité des applications qu’il déploie sur les hébergements de MV DIGITAL DEVELOPPEMENT . 
                    <br /><br />
                    Dans le cas où MV DIGITAL DEVELOPPEMENT viendrait à avoir connaissance d’un ou des risques pour la sécurité de l’hébergement, elle s’engage à en informer son Client, ainsi qu’à lister les actions à mettre en place pour remédier à cette situation. Dans le cas où le Client viendrait à refuser la mise en place des recommandations de MV DIGITAL DEVELOPPEMENT relatives à la sécurité de son hébergement, le Client assumera l’unique responsabilité des conséquences des défauts de sécurité issus de ce ou ces risques. Dans le cas où MV DIGITAL DEVELOPPEMENT viendrait à avoir connaissance d’une violation de la sécurité de données personnelles ayant entraîné de manière accidentelle ou illicite la destruction, la perte, l’altération, la divulgation ou l’accès à des données personnelles, elle s’engage à communiquer cette information à son Client.
                    <br /><br />
                    Localisation et transfert de données : pour assurer ses services d’hébergement, stockage, sauvegarde et archivage, MV DIGITAL DEVELOPPEMENT est autorisée à transmettre, stocker et traiter les données de ses Clients sur ses propres serveurs hébergés. Sauf stipulation contraire prévue par le contrat, les données seront hébergées en France par un hébergeur français.
                    <br /><br />
                    Traitements MV DIGITAL DEVELOPPEMENT : dans le cadre de l’exécution de son service, MV DIGITAL DEVELOPPEMENT collecte les données à caractère personnel de son Client, de ses collaborateurs et de ses éventuels partenaires techniques, si ceux-ci sont habilités à contacter MV DIGITAL DEVELOPPEMENT pour le compte de son Client. MV DIGITAL DEVELOPPEMENT est autorisée à stocker et traiter les données personnelles des personnes avec qui elle est en contact pour assurer son service, en particulier leur nom, leur(s) prénom(s), leur(s) numéro(s) de téléphone, leur(s) adresse(s) e-mail, leur(s) préférence(s) et la nature du lien avec le Client. MV DIGITAL DEVELOPPEMENT est autorisée à stocker et traiter les journaux d’activité et logs d’utilisation des outils qu’elle met à disposition. 
                    <br /><br />
                    MV DIGITAL DEVELOPPEMENT est autorisée à stocker et traiter les identifiants et mots de passe de ses Clients, dès lors où ils sont nécessaires pour mener à bien son service. Pour assurer son service d’hébergement et d’infogérance, MV DIGITAL DEVELOPPEMENT est autorisée à accéder, transférer, stocker et effectuer des traitements sur tous les fichiers de logs, qu’ils contiennent directement ou indirectement des données personnelles.
                    <br /><br />
                    MV DIGITAL DEVELOPPEMENT s’engage à ne pas communiquer les données personnelles collectées. MV DIGITAL DEVELOPPEMENT peut toutefois être amenée à devoir les communiquer à des autorités judiciaires et/ou administratives, notamment en cas de réquisition. Dans ce cas, et sauf disposition légale l’en empêchant, MV DIGITAL DEVELOPPEMENT s’engage à en informer son Client et à limiter la communication des
                    données à celles expressément requises par lesdites autorités.

                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">13. SOUS TRAITANCE</h2>
                    <p>
                    MV DIGITAL DEVELOPPEMENT se réserve le droit de travailler avec des prestataires indépendants et des sous-traitants et plus généralement s’adjoindre tout tiers pour exécuter sa mission tout en conservant la direction et la responsabilité de son exécution.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">14. LITIGE</h2>
                    <p>
                    En cas de difficultés ou de différends entre les parties à l’occasion de l’interprétation, de l’exécution ou de la résiliation du présent accord, les parties conviennent de rechercher une solution amiable dans l’esprit du présent contrat. <br /><br /> Le présent contrat est soumis à la loi française et tout litige ou différend qui pourrait naître entre les parties à l’occasion de l’interprétation, de l’exécution ou de la résiliation du présent contrat relèvera de la compétence exclusive des tribunaux de LONS LE SAUNIER.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-bold">15. DROIT DE RÉTRACTATION (L 121-17 ET R 221-3 ET SUIVANTS DU CODE DE LA CONSOMMATION)</h2>
                    <p>
                    Le Client a le droit de se rétracter du présent contrat sans donner de motif dans un délai de quatorze (14) jours. Le délai de rétractation expire (14) quatorze jours après le jour de la conclusion du contrat. Pour exercer ce droit, le Client doit notifier (à l’attention de la société MV DIGITAL DEVELOPPEMENT , 55 rue de Besançon, 39100 Dole) sa décision de rétractation du présent contrat au moyen d’une déclaration dénuée d’ambiguïté par courrier recommandé avec accusé de réception, en y précisant nom, prénom, adresse, nom du représentant de la personne morale le cas échéant, date du contrat, prestation concernée. 
                    <br /><br />
                    Le Client peut utiliser le modèle de formulaire de rétractation, mais ce n’est pas obligatoire. 
                    <br /><br />
                    Pour que le délai de rétractation soit respecté, il est impératif que le Client exerce sa communication relative à l’exercice du droit de rétractation avant l’expiration du délai de rétractation.
                    <br /><br /> 
                    En cas de rétractation du Client, MV DIGITAL DEVELOPPEMENT remboursera tous les paiements reçus du Client au plus tard quatorze (14) jours à compter du jour où MV DIGITAL DEVELOPPEMENT est informée de la décision de rétractation du présent contrat, sans frais pour le Client.
                    </p>
                </div>

                <div>
                    <h1 className="font-bold">FORMULAIRE DE RÉTRACTATION À ENVOYER PAR COURRIER RECOMMANDÉ AVEC ACCUSÉ DE RÉCEPTION UNIQUEMENT</h1>
                    <p>
                    À l’attention de MARCHE Robin, 55 rue de Besançon 39100 Dole <br /><br />
                    Je vous notifie par la présente ma rétractation du contrat portant sur la prestation de services dessous : <br /><br />
                    Commandé le : <br /><br />
                    Nom du consommateur :<br /><br />
                    Adresse complète du consommateur :<br /><br />
                    Date : <br /><br />
                    Signature du consommateur :<br /><br />
                    </p>
                </div>
            </div>
        </>
    )
}