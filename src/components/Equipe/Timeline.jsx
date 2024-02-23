import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    return (
        <>
        <div className='mt-12 bg-red-200' id='parcours'>

            <h1 className='uppercase text-3xl text-center mb-12 pt-20 text-white'>Notre parcours</h1>

            <VerticalTimeline lineColor={'#022a60'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Février 2023"
                    iconStyle={{ background: '#022a60', color: '#022a60' }}
                    dateClassName={'text-white'}
                    >
                    <h3 className="vertical-timeline-element-title">Ecole O&apos;clock</h3>
                    <h4 className="vertical-timeline-element-subtitle">Etablissement de formation numérique</h4>
                    <p>
                    Nous suivons tous deux la Formation de développeur web et mobile et faisons parti de la promotion Watt.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Octobre 2023"
                    iconStyle={{ background: '#022a60', color: '#fff' }}
                    dateClassName={'text-white'}

                    >
                    <h3 className="vertical-timeline-element-title">Obtention du Titre Professionnel de Niveau V</h3>
                    <h4 className="vertical-timeline-element-subtitle">Paris</h4>
                    <p>
                    Nous avons obtenu le titre professionnel en développement web et mobile.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Novembre 2023"
                    iconStyle={{ background: '#022a60', color: '#fff' }}
                    dateClassName={'text-white'}

                    >
                    <h3 className="vertical-timeline-element-title">Création de M&V Digital Developpement</h3>
                    <h4 className="vertical-timeline-element-subtitle">Agence de Développement Web et Marketing Digital</h4>
                    <p>
                    Suite à l&apos;obtention de notre titre professionnel et à la sollicitation de nos premiers clients, nous avons décidé de créer notre agence.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Février 2023"
                    iconStyle={{ background: '#022a60', color: '#fff' }}
                    dateClassName={'text-white'}

                    >
                    <h3 className="vertical-timeline-element-title">Développement de notre offre</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Après avoir obtenu satisfaction auprès de nos premiers clients, nous avons décidé de développer notre offre en proposant à chaque client un accompagnement pour développer sa stratégie digitale et sa visibilité sur le net.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </>
    );
    }