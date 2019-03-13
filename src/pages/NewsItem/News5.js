import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Wrapper,
  Container,
  MainSide,
  Title,
  TextContainer,
  Text,
  LeftSide,
  Img,
  Shares
} from './styles'
import Header from './Header'
import Footer from '../../components/Footer'
import img from '../../assets/news/Bixtrim at Blockchain and Bitcoin Conference Georgia.jpg'

const content = {
  en: {
    title: 'Blockchain Expo Europe Recap',
    text_1:
      'The Blockchain Expo was held in RAI Amsterdam on 27-28 June 2018, bringing together 8000+ dedicated blockchain industry attendees across key industries for two days of world-class content from leading brands embracing and developing cutting edge blockchain technologies. ',
    text_2:
      'Bixtrim was a sponsor and attendee at the event, had a presentation led by Iuri Sadoev, the Chief Product Developmentn Officer. Our team exchanged contact information with over 8,000 attendees - which made a fantastic opportunity to learn about the most disruptive technologies and their complimentary',
    text_3:
      'Shown in a series of top-level keynotes, interactive panel discussions and solution-based case studies with a focus on learning and building partnerships in the emerging Blockchain space, Blockchain Expo explored the industries that are set to be disrupted the most by this new technology, including manufacturing, retail, financial services, legal, healthcare,insurance, energy, music, government, real estate and more.',
    text_4:
      'The team gained a lot of experience as well as insight on new projects in the industry in just two days. We would like to formally thank and appreciate the organizers of Blockchain Expo Europe and encourage our readers to check our official social media channels for more information and exclusive materials from the event!'
  },
  ka: {
    title: 'Blockchain Expo Europe შეჯამება',
    text_1:
      'Blockchain Expo ჩატარდა RAI ამსტერდამში, 27-28 ივნისს და შეკრიბა 8000-ზე ადამიანი, რომლებიც მოღვაწეობენ ბლოკჩეინ ინდუსტრიაში. კონფერენციაზე წარმოდგენილი იყო მსოფლიო დონის ბრენდების კონტენტი. სწორედ ეს პრეზენტატორი კომპანიები ქმნიან და აუმჯობესებენ ნოვატორულ ბლოკჩეინ ტექნოლოგიებს..',
    text_2:
      'ბიქსტრიმი კონფერენციის სპონსორი და მონაწილე იყო, კომპანიის სახელით, პროდუქტის შემუშავების მთავარი სპეციალისტი იური სადოევი აუდიტორიის წინაშე პრეზენტაციით წარსდგა. კონფერენციაზე ჩვენმა გუნდმა საკონტაქტო ინფორმაცია გაუცვალა 8000-ზე მეტ მონაწილეს და, გარდა ამისა, მოგვეცა საშუალება გავცნობოდით ნოვატორულ ტექნოლოგიებს და უფასოდ დაგვენერგა ისინი.',
    text_3:
      'Blockchain Expo-მ გამოიკვლია ისეთი ინდუსტრიები, რომლებიც, დიდი ალბათობით, სწორედ ზემოთ ნახსენები ნოვატორული ტექნოლოგიებით განვითარდებიან. მათ რიცხვშია: წარმოება, ვაჭრობა, ფინანსური მომსახურება, ჯანდაცვა, დაზღვევა, ენერგეტიკა, მუსიკა, მმართველობა, უძრავი ქონება და მრავალი სხვა. სწორედ ეს საკითხები განიხილეს მონაწილეებმა კონფერენციის მსვლელობისას. გაიმართა ინტერაქტიული დისკუსიები და თემატური კვლევები.',
    text_4:
      'ჩვენმა გუნდმა დიდი გამოცდილება მიიღო და ახლებურად დაინახა ბლოკჩეინ ინდუსტრია. გვინდა ოფიციალურად გადავუხადოთ მადლობა Blockchain Expo-ს ორგანიზატორებს და მოვუწოდოთ ჩვენს მკითხველებს, შეამოწმონ ჩვენი ოფიციალური არხები სოციალურ ქსელებში, რათა მიიღონ დამატებითი ინფორმაცია და ექსკლუზიური მატერიალები ღონისძიებიდან.'
  },
  ru: {
    title: 'Blockchain Expo Europe ',
    text_1:
      'Blockchain Expo была проведена в RAI Amsterdam 27-28 июня 2018 года, объединив 8000+ блокчейн энтузиастов со всего мира на два дня. Здесь был            представлен контент мирового уровня от ведущих брендов, охватывающих и разрабатывающих самые передовые блокчейн технологии. ',
    text_2:
      'Bixtrim был спонсором и участником мероприятия, где наш специалист по разработке продуктов Юрий Садоев провел презентацию. Наша команда        обменялась контактной информацией с более чем 8 000 участников, это дало фантастическую возможность узнать о самых новаторских технологиях и интегрировать их бесплатно. ',
    text_3:
      'Blockchain Expo исследовал такие индустрии, которые, по всей вероятности, будут развиты этой новой технологией, в том числе: производство, торговля,         финансовые услуги, юридические услуги, здравоохранение, страхование, энергетика, музыка, правительство, недвижимость и многое другое.',
    text_4:
      'Эти вопросы  обсудили участники на конференции. Были проведены интерактивные дискуссии и тематические исследования. Команда получила большой опыт, а также понимание новых проектов в индустрии           всего за два дня. Мы хотели бы официально поблагодарить организаторов Blockchain Expo Europe и поощрять наших читателей проверять наши официальные каналы в социальных сетях для получения дополнительной информации и эксклюзивных материалов с мероприятия!'
  },
  fr: {
    title: 'Blockchain Expo Europe Recap',
    text_1:
      "La Blockchain Expo s'est tenue à RAI Amsterdam les 27 et 28 juin 2018, réunissant plus de 8 000 participants de l'industrie de la blockchain dans des industries clés pour deux jours de contenu de renommée mondiale.",
    text_2:
      "Bixtrim était un sponsor et un participant à l'événement, a eu une présentation dirigée par Iuri Sadoev, le directeur du développement des produits. Notre équipe a échangé des informations de contact avec plus de 8 000 participants, ce qui a constitué une formidable opportunité de se familiariser avec les technologies les plus perturbatrices et leur intégration gratuite.",
    text_3:
      'Blockchain Expo, présentée dans une série de conférences de haut niveau, de tables rondes interactives et d’études de cas axées sur l’apprentissage et la création de partenariats dans l’espace émergent de Blockchain, a exploré les secteurs qui seraient les plus perturbés par cette nouvelle technologie. , comprenant; fabrication, vente au détail, services financiers, services juridiques, soins de santé, assurances, énergie, musique, gouvernement, immobilier, etc.',
    text_4:
      "L’équipe a acquis beaucoup d’expérience et a pu découvrir de nouveaux projets dans l’industrie en deux jours seulement. Nous aimerions remercier et apprécier officiellement les organisateurs de Blockchain Expo Europe et encourager nos lecteurs à consulter nos canaux officiels de médias sociaux pour plus d'informations et de documents exclusifs sur l'événement!"
  },
  de: {
    title: 'Blockchain Expo Europe Recap',
    text_1:
      'Die Blockchain Expo fand vom 27. bis 28. Juni 2018 in der RAI Amsterdam statt und brachte mehr als 8.000 Teilnehmer aus der Blockchain-Industrie in Schlüsselindustrien für zwei Tage mit erstklassigen Inhalten von führenden Marken zusammen, die bahnbrechende Blockchain-Technologien umfassen und entwickeln.',
    text_2:
      'Bixtrim war Sponsor und Teilnehmer der Veranstaltung und hatte eine Präsentation von Iuri Sadoev, dem Chief Product Development Officer. Unser Team tauschte Kontaktinformationen mit über 8.000 Teilnehmern aus - was eine fantastische Gelegenheit bot, sich über die disruptivsten Technologien und ihre komplementäre Integration zu informieren.',
    text_3:
      'In einer Reihe von Top-Level-Keynotes, interaktiven Podiumsdiskussionen und lösungsbasierten Fallstudien mit dem Fokus auf Lernen und den Aufbau von Partnerschaften im aufstrebenden Blockchain-Bereich untersuchte die Blockchain Expo die Branchen, die durch diese neue Technologie am stärksten gestört werden , einschließlich; Herstellung, Einzelhandel, Finanzdienstleistungen, Recht, Gesundheit, Versicherung, Energie, Musik, Regierung, Immobilien und mehr.',
    text_4:
      'Das Team sammelte in nur zwei Tagen viel Erfahrung und Einblicke in neue Projekte der Branche. Wir möchten den Organisatoren der Blockchain Expo Europe offiziell danken und sie ermutigen, unsere offiziellen Social-Media-Kanäle für weitere Informationen und exklusives Material von der Veranstaltung zu überprüfen!'
  },
  zh: {
    title: '“Blockchain Expo Europe回顾',
    text_1:
      '区块链博览会于2018年6月27日至28日在阿姆斯特丹RAI举行，汇集了8000多个主要行业的区块链行业参与者，为来自领先品牌的两天世界级内容提供并开发尖端区块链技术。',
    text_2:
      'Bixtrim是该活动的赞助商和参与者，由首席产品开发官Iuri Sadoev领导。我们的团队与超过8,000名与会者交换了联系信息 - 这为了解最具破坏性的技术及其免费整合提供了绝佳机会。',
    text_3:
      'Blockchain Expo展示了一系列顶级主题演讲，互动式小组讨论和基于解决方案的案例研究，重点是在新兴的区块链空间学习和建立伙伴关系，探索了这项新技术将被破坏最多的行业， 包含;制造业，零售业，金融服务业，法律，医疗保健，保险，能源，音乐，政府，房地产等。',
    text_4:
      '该团队在短短两天内获得了丰富的经验以及对该行业新项目的见解。我们要正式感谢并感谢欧洲区块链博览会的组织者，并鼓励我们的读者查看我们的官方社交媒体频道，以获取更多信息和活动的独家资料！“'
  }
}

class NewsItem extends Component {
  render() {
    const { lang } = this.props
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <Container>
            <MainSide>
              <Title>{content[lang].title}</Title>
              <TextContainer>
                <Text>
                  {content[lang].text_1} <br /> <br />
                  {content[lang].text_2}
                  <br /> <br />
                  {content[lang].text_3}
                  <br /> <br />
                  {content[lang].text_4}
                </Text>
              </TextContainer>
            </MainSide>
            <LeftSide>
              <Img src={img} />
              <Shares />
            </LeftSide>
          </Container>
        </Wrapper>
        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps({ lang }) {
  return { lang }
}

export default connect(mapStateToProps)(NewsItem)
