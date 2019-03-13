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
import img from '../../assets/news/team-building.jpg'

const content = {
  en: {
    title: 'Team Building',
    text_1:
      '29th of June Bixtrim and Vip Trade combined forces for the team building activity. Vip trade is new georgian platform , Minimum commission fee and high liquidity makes environment comfortable for traders. As you already know, we are a startup and success often comes down to the strength of the team.',
    text_2:
      'So we decided to bring our employees together along with our future partner company VIP Trade and conduct our team building, The event consisted of 40 employees being formally introduced to each other, playing various ice breaker and bonding exercises along with a fun round of bowling.',
    text_3:
      'We can definitely say this team building has given us the opportunity to bond as employees and see our main goal once again through the motivation of each and every person. This is the prerequisite of our work to become more comfortable, pleasant and productive as a team.'
  },
  ka: {
    title: 'ბიქსტიმის გუნდის შეკრება',
    text_1:
      '29 ივნისს ბიქსტრიმმა და Vip Trade-მა გააერთიანეს ძალები team building-ისთვის. Vip Trade არის ახალი ქართული პლატფორმა, მინიმალური საკომისიოთი და მაღალი ლიკვიდურობით, რაც მოვაჭრეებისთვის გარემოს უფრო კომფორტულს ხდის.',
    text_2:
      'როგორც იცით, ჩვენი კომპანია არის სტარტაპი და წარმატებაც გუნდის სიძლიერეზეა დამოკიდებული. ამიტომ, გადავწყვიტეთ გაგვეერთიანებინა ჩვენი თანამშრომლები ჩვენს მომავალ პარტნიორ Vip Trade-თან და მათთან ერთად ჩაგვეტარებინა გუნდის მამოტივირებელი აქტივობები. Team Building-ზე 40 თანამშრომელი გაეცნო ერთმანეთს, ვითამაშეთ გუნდური თამაშები და დავასრულეთ ბოულინგის სახალისო ტურნირით.',
    text_3:
      'Team buliding-მა მოგვცა შესაძლებლობა, მეტად დავახლოვებოდით ერთმანეთს და მკვეთრად დაგვენახა ჩვენი საერთო მიზანი. ეს არის წინაპირობა იმისა, რომ ჩვენი სამუშაო უფრო სასიამოვნო და კომფორტული გახდება. ჩვენ კი, როგორც გუნდი, ვიქნებით უფრო ერთიანები და პროდუქტიულები.'
  },
  ru: {
    title: 'Командообразование',
    text_1:
      '29 июня Bixtrim и Vip Trade объединились для командообразования. Vip Trade - новая грузинская платформа: минимальная комиссия и высокая ликвидность делают среду удобной для трейдеров. Как вы уже знаете, мы стартап, и успех часто сводится к силе команды.',
    text_2:
      'Поэтому мы решили объединить наших сотрудников вместе с нашим будущим партнером - VIP Trade и вместе с ними провести командообразование. На мероприятии были 40 сотрудников, которые официально познакомились друг с другом, играли различные ледоколы и стимулирующие игры в том числе и боулинг.',
    text_3:
      'Мы можем сказать, что командообразование дал нам возможность объединить сотрудников и снова увидеть нашу главную цель благодаря мотивации каждого человека. Это является предварительным условием нашей работы, чтобы стать более дружной и продуктивной командой.'
  },
  fr: {
    title: "Construction d'équipe",
    text_1:
      "Le 29 juin, Bixtrim et Vip Trade ont uni leurs forces pour l’activité de team building. Le commerce Vip est une nouvelle plate-forme géorgienne. Des commissions minimales et une liquidité élevée rendent l'environnement confortable pour les traders. Comme vous le savez déjà, nous sommes une startup et le succès dépend souvent de la force de l’équipe.",
    text_2:
      'Nous avons donc décidé de réunir nos employés avec notre future société partenaire VIP Trade et de mener notre équipe de travail.',
    text_3:
      "Nous pouvons affirmer que cet esprit d'équipe nous a permis de créer des liens en tant qu'employés et de voir notre objectif principal une fois de plus grâce à la motivation de chacun. C'est la condition préalable de notre travail pour devenir plus confortable, agréable et productif en équipe."
  },
  de: {
    title: 'Teambildung',
    text_1:
      '29. Juni Bixtrim und Vip Trade vereinten Kräfte für die Teambuilding-Aktivität. VIP-Handel ist eine neue georgische Plattform, minimale Provisionsgebühr und hohe Liquidität machen die Umwelt für Trader komfortabel. Wie Sie bereits wissen, sind wir ein Startup und der Erfolg hängt oft von der Stärke des Teams ab.',
    text_2:
      'Deshalb haben wir uns entschlossen, unsere Mitarbeiter mit unserem zukünftigen Partnerunternehmen VIP Trade zusammen zu bringen und unser Teambuilding durchzuführen. Die Veranstaltung bestand aus 40 Mitarbeitern, die sich formell miteinander bekannt machten, verschiedene Eisbrecher und Bonding-Übungen sowie eine Runde Bowling spielten.',
    text_3:
      'Wir können definitiv sagen, dass dieses Teambuilding uns die Möglichkeit gegeben hat, sich als Mitarbeiter zu binden und unser Hauptziel durch die Motivation jedes Einzelnen wieder zu sehen. Dies ist die Voraussetzung unserer Arbeit, um als Team komfortabler, angenehmer und produktiver zu werden.'
  },
  zh: {
    title: '团队建设',
    text_1:
      '6月29日Bixtrim和Vip Trade合力为团队建设活动。 贵宾交易是新格鲁吉亚平台，最低佣金和高流动性使交易者感到舒适。 正如您所知，我们是一家创业公司，成功往往取决于团队的力量。',
    text_2:
      '因此，我们决定将我们的员工与我们未来的合作伙伴公司VIP Trade联系在一起，并进行我们的团队建设。该活动由40名员工正式介绍，进行各种破冰和粘合练习以及一轮有趣的保龄球。',
    text_3:
      '我们可以肯定地说，这个团队建设让我们有机会以员工的身份结合，并通过每个人的动力再次看到我们的主要目标。 这是我们工作的先决条件，使团队变得更加舒适，愉快和富有成效。'
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
                  <br /> <br /> {content[lang].text_2}
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
