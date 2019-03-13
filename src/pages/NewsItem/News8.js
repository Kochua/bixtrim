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
import img from '../../assets/news/Our Team at Start Up Grind.jpg'

const content = {
  en: {
    title: 'Our Team at Start Up Grind',
    text_1:
      'Startup Grind is the biggest autonomous startup network, currently teaching, moving, and interfacing in excess of 1,000,000 business people in more than 365 cities. They nurture startup ecosystems in 120 nations through occasions, media, and partnerships with organizations like Google for Entrepreneurs. The foundation of our worldwide network are month to month occasions highlighting effective nearby authors, trailblazers, teachers and speculators who share exercises learned making progress toward building awesome organizations. Established in Silicon Valley, Startup Grind facilitated more than 7,000 fireside visits in 2017. To date, Startup Grind has helped a large number of business people discover mentorship, interface with accomplices and contracts, seek after subsidizing, and achieve new clients.',
    text_2:
      'On 25th of June event took place in Georgia,Tbilisi. Speaker of the event was Zachery Coelius an early stage investor and advisor. His notable investments include Cruise Automation,Branch Metrics,Skysafe and over two dozen other startups.He is an advisor to twventy companies including Hellosign,Swam,Balanced Payments and Many other. ',
    text_3:
      'Bixtrim took part in this event and our team is glad to be in an environment like this. As a startup and a dedicated team of entrepreneurs we believe it is important to support each other and stand for what we believe in.'
  },
  ka: {
    title: 'ჩვენი გუნდი Start Up Grind კონფერენციაზე',
    text_1:
      'Start Up Grind არის უდიდესი, დამოუკიდებელი სტარტაპი, რომელიც ასწავლის და აერთიანებს 1 000 000-ზე მეტ ბიზნესმენს 365 ქვეყნის მასშტაბით. Start Up Grind-ის გუნდი აყალიბებს ეკოსისტემებს მოვლენების, მედიისა და პარტნიორობის მეშვეობით ისეთ ორგანიზაციებთან ერთად, როგორიცაა Google for Entrepreneurs. Start Up Grind აერთიანებს ავტორებს, ნოვატორებს, მასწავლებლებსა და მოაზროვნეებს, რომლებიც უზიარებენ ერთმანეთს საკუთარ გამოცდილებას, რათა შექმნან ძლიერი ორგანიზაცია.  2017 წელს, სილიკონ ველში დაარსებულმა Start Up Grind-მა უმასპინძლა 7000-ზე მეტ სტუმარს. კომპანია დღემდე ეხმარება უამრავ ადამიანს მენტორების აღმოჩენაში, პარტნიორებთან დაკავშირებასა და ახალი მომხმარებლების პოვნაში.',
    text_2:
      '25 ივნისს ღონისძიება ჩატარდა საქართველოში, კერძოდ თბილისში. ღონისძიების სპიკერი იყო ზაქარი კოელიუსი. მისი ინვესტიციებიდან აღსანიშნავია: Cruise Automation, Branch Metrics, Skysafe და კიდევ უამრავი სტარტაპი. იგი არის 20 კომპანიის მრჩეველი, მათ შორისაა: Hellosign, Swam, Balanced Payments და სხვა. ',
    text_3:
      'ბიქსტრიმი მოხარულია ამ ღონისძიებაში მონაწილეობით. როგორც სტარტაპსა და მეწარმეთა გუნდს, გვჯერა, რომ ძალიან მნიშვნელოვანია ერთმანეთის მხარდაჭერა და ერთად დგომა, იმ საერთო მიზნისთვის,  რომელსაც ვემსახუებით.'
  },
  ru: {
    title: 'Бикстрим на конференции Start Up Grind ',
    text_1:
      'Startup Grind - это крупнейшая автономная стартап сеть, которая в настоящее время обучает, направляет и взаимодействует с более чем 1 000 000 бизнесменов в более чем 365 городах. Они развивают стартап экосистемы в 120 странах с помощью СМИ и партнерства с такими организациями, как Google for Entrepreneurs. Основой нашей всемирной сети являются ежемесячные мероприятия, в которых подчеркиваются эффективные близлежащие авторы, первопроходцы и преподаватели, которые разделяют полученные навыки, добиваясь прогресса в создании замечательных организаций. Startup Grind, основанная в Силиконовой долине, в 2017 году способствовала более 7 000 визитов у костра. На сегодняшний день Startup Grind помогла большому числу деловых людей найти наставничество, взаимодействие с сообщниками и контрактами, искать субсидии и добиваться новых клиентов. ',
    text_2:
      '25 июня мероприятие состоялось в Тбилиси. Спикером мероприятия был Захери Коэлиус, давний инвестор и советник. Его заметные инвестиции включают Cruise Automation, Branch Metrics, Skysafe и более двух десятков других стартапов. Он является советником множество компаний, включая Hellosign, Swam, Balanced Payments и многих других. ',
    text_3:
      'Bixtrim принял участие в этом мероприятии и наша команда рада быть в такой обстановке. В качестве стартапа и специализированной команды предпринимателей мы считаем важным поддерживать друг друга и выступать за то, во что мы верим.'
  },
  fr: {
    title: 'Notre équipe à Start Up Grind',
    text_1:
      "Startup Grind est le plus grand réseau de démarrage autonome, enseignant, déplaçant et connectant actuellement plus de 1 000 000 d’entreprises dans plus de 365 villes. Ils alimentent des écosystèmes de démarrage dans 120 pays à travers des occasions, des médias et des partenariats avec des organisations telles que Google for Entrepreneurs. Les fondements de notre réseau mondial sont des mois en mois, mettant en évidence des auteurs, des pionniers, des enseignants et des spéculateurs à proximité efficaces qui partagent des exercices appris pour progresser vers la création d’organisations impressionnantes. Établi dans la Silicon Valley, Startup Grind a facilité plus de 7 000 visites au coin du feu en 2017. À ce jour, Startup Grind a aidé un grand nombre de gens d'affaires à découvrir le mentorat, l'interface avec les complices et les contrats, à rechercher de nouveaux clients.",
    text_2:
      "Le 25 juin, l'événement s'est déroulé en Géorgie, à Tbilissi. Zachery Coelius, un investisseur et conseiller en début de Parmi ses investissements notables, citons Cruise Automation, Branch Metrics, Skysafe et plus d'une vingtaine d'autres startups. Il est conseiller auprès de deux sociétés, dont Hellosign, Swam, Balanced Payments et bien d'autres.",
    text_3:
      "Bixtrim a pris part à cet événement et notre équipe est heureuse d’être dans un environnement comme celui-ci. En tant que start-up et une équipe dédiée d'entrepreneurs, nous pensons qu'il est important de nous soutenir mutuellement et de défendre ce en quoi nous croyons. "
  },
  de: {
    title: 'Unser Team bei Start Up Grind',
    text_1:
      'Startup Grind ist das größte autonome Startup-Netzwerk, das derzeit mehr als 1.000.000 Geschäftsleute in mehr als 365 Städten unterrichtet, bewegt und vernetzt. Sie fördern Startup-Ökosysteme in 120 Ländern durch Anlässe, Medien und Partnerschaften mit Organisationen wie Google for Entrepreneurs. Die Grundlage unseres weltweiten Netzwerks sind monatliche Gelegenheiten, bei denen effektive Autoren in der Nähe, Wegbereiter, Lehrer und Spekulanten hervorgehoben werden, die gemeinsam erlernte Übungen machen, um Fortschritte beim Aufbau von großartigen Organisationen zu erzielen. Startup Grind wurde im Silicon Valley gegründet und ermöglichte im Jahr 2017 mehr als 7.000 Besuche am Kamin. Bis heute hat Startup Grind einer großen Anzahl von Geschäftsleuten geholfen, Mentorenschaft zu finden, mit Komplizen und Verträgen zu interagieren, nach Subventionen zu suchen und neue Kunden zu gewinnen.',
    text_2:
      'Am 25. Juni fand die Veranstaltung in Georgia, Tiflis statt. Sprecher der Veranstaltung war Zachery Coelius, ein Frühphaseninvestor und -berater. Seine bemerkenswerten Investitionen umfassen Cruise Automation, Branch Metrics, Skysafe und mehr als zwei Dutzend andere Start-ups. Er ist Berater von zwei Firmen wie Hellosign, Swam, Balanced Payments und viele andere.',
    text_3:
      'Bixtrim nahm an dieser Veranstaltung teil und unser Team freut sich, in einer solchen Umgebung zu sein. Als Startup und engagiertes Team von Unternehmern ist es wichtig, sich gegenseitig zu unterstützen und für das zu stehen, woran wir glauben.'
  },
  zh: {
    title: '“我们的团队在Start Up Grind Startup ',
    text_1:
      'Grind是最大的自主创业网络，目前在超过365个城市的超过1,000,000名商务人士进行教学，移动和接口。他们通过场合，媒体以及与Google for Entrepreneurs等组织的合作伙伴关系，在120个国家培育创业生态系统。我们全球网络的基础是每月一次，突出有效的附近作者，开拓者，教师和投机者，他们分享了在建立令人敬畏的组织方面取得进展的演习。 2017年，Startup Grind成立于硅谷，为超过7,000次火灾访问提供了便利。迄今为止，Startup Grind帮助大量商业人士发现了指导，与同谋和合同的接触，寻求补贴以及获得新客户。',
    text_2:
      '6月25日，在第比利斯的格鲁吉亚举行了活动。该活动的发言人是Zachery Coelius，他是早期投资者和顾问。他值得注意的投资包括Cruise Automation，Branch Metrics，Skysafe以及其他二十多家初创公司。他是包括Hellosign，Swam，Balanced Payments和其他许多公司在内的30家公司的顾问。',
    text_3:
      'Bixtrim参加了这次活动，我们的团队很高兴能够在这样的环境中工作。作为一个创业公司和一个专注的企业家团队，我们相信相互支持并代表我们所信仰的东西非常重要。“'
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
                  {content[lang].text_1}
                  <br /> <br />
                  {content[lang].text_2}
                  <br /> <br />
                  {content[lang].text_3}
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
