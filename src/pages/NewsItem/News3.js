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
import img from '../../assets/news/Bixtrim_s Successful Private Sale.jpg'

const content = {
  en: {
    title: "Bixtrim's Successful Private Sale",
    text_1:
      'The Bixtrim Private Sale has recently finished with an astonishing amount of tokens sold! A number of investors bought 2 340 000 BXM while they still had the chance to use an 80% discount. The total amount of tokens released for sale during this stage of our sales was 3 000 000 BXM which means more than 75% of them were sold. ',
    text_2:
      'We are glad to have gained the trust of so many people and now are one step closer to a simplified future with every day use of cryptocurrency. Private sales can be an amazing opportunity for quick profits or for long-term believe in the project. They distribute capital easily and ensure the path forward for the project. Investors who participate in private sales usually get cheaper coins which boost their percentage profits. We congratulate the investors that have chosen Bixtrim as their preferred ICO of choice'
  },
  ka: {
    title: 'ბიქსტრიმის წარმატებული კერძო გაყიდვები',
    text_1:
      'ბიქსტრიმის კერძო გაყიდვები წარმატებით დასრულდა. გაიყიდა ტოკენების გასაოცარი რაოდენობა: ინვესტორებმა შეიძინეს 2 340 000 BXM 80%-იანი ფასდაკლებით. გასაყიდად გამოყოფილი იყო 3 000 000 BXM, რაც იმას ნიშნავს, რომ გაიყიდა 75%-ზე მეტი. ჩვენ მოხარულები ვართ, რომ დავიმსახურეთ უამრავი ადამიანის ნდობა და კიდევ ერთი ნაბიჯით მივუახლოვდით გამარტივებულ მომავალს, სადაც კრიპტოვალუტას ყოველდღიურად გამოვიყენებთ.',
    text_2:
      'კერძო გაყიდვები შესანიშნავი შესაძლებლობაა სწრაფი მოგებებისთვის.  ის მარტივად ანაწილებს კაპიტალს და უზრუნველყოფს გზას პროექტისთვის. ინვესტორები, რომლებიც კერძო გაყიდვებში მონაწილეობენ, მიიღებენ მონეტებს დაბალ ფასად, რაც მათი  მოგების ზრდას შეუწყობს ხელს. ჩვენ ვულოცავთ იმ ინვესტორებს, რომლებმაც აირჩიეს Bixtrim, როგორც მათთვის რჩეული ICO.'
  },
  ru: {
    title: 'Bixtrim провел успешные Частные Продажи ',
    text_1:
      'Недавно завершились Частные Продажи Bixtrim и по количеству проданных токенов они показали поразительный результат! Различные инвесторы приобрели 2 340 000 BXM, со скидкой 80%. Общее количество токенов, выпущенных для этого этапа, составило 3 000 000 BXM, а это значит, что более 75% из них было продано. Мы очень рады, что смогли завоевать доверие столь многих людей и сейчас мы еще на один шаг ближе к будущему, где ежедневное использование криптовалюты будет легко и просто. Частные ',
    text_2:
      'Продажи могут послужить удивительной возможностью для быстрой прибыли или для долгосрочной вовлеченности в проект. Они легко распределяют капитал и обеспечивают движение вперед для всего проекта. Инвесторы, которые принимают участие в Частных Продажах, обычно получают монеты со скидкой, что увеличивает их прибыль. Мы поздравляем инвесторов, которые выбрали Bixtrim как наиболее надежное ICO.'
  },
  fr: {
    title: 'La vente privée réussie de Bixtrim ',
    text_1:
      "La vente privée Bixtrim a récemment pris fin avec une quantité étonnante de jetons vendus! Un certain nombre d'investisseurs ont acheté 2 340 000 BXM alors qu'ils avaient encore la possibilité d'utiliser une réduction de 80%. Le montant total des jetons mis en vente à ce stade de nos ventes était de 3 000 000 BXM, ce qui signifie que plus de 75% d’entre eux ont été vendus.",
    text_2:
      "Nous sommes heureux d'avoir gagné la confiance de tant de personnes et nous sommes maintenant à un pas de plus vers un avenir simplifié avec l'utilisation quotidienne de la crypto-monnaie. Les ventes privées peuvent être une formidable opportunité pour des profits rapides ou pour croire au projet à long terme. Ils distribuent facilement le capital et assurent la voie à suivre pour le projet. Les investisseurs qui participent à des ventes privées obtiennent généralement des pièces moins chères, ce qui augmente leur pourcentage de profit. Nous félicitons les investisseurs qui ont choisi Bixtrim comme ICO préféré de leur choix "
  },
  de: {
    title: 'Bixtrims erfolgreicher privater Verkauf',
    text_1:
      'Der Bixtrim Private Sale wurde kürzlich mit erstaunlichen Token verkauft! Eine Reihe von Investoren kaufte 2 340 000 BXM, während sie immer noch die Möglichkeit hatten, einen Rabatt von 80% zu nutzen. Die Gesamtmenge der während dieser Verkaufsphase zum Verkauf freigegebenen Marken betrug 3 000 000 BXM, was bedeutet, dass mehr als 75% von ihnen verkauft wurden.',
    text_2:
      'Wir sind froh, das Vertrauen von so vielen Menschen gewonnen zu haben und sind nun der täglichen Nutzung der Kryptowährung einen Schritt näher. Privatverkäufe können eine fantastische Gelegenheit für schnelle Gewinne oder für eine langfristige Überzeugung des Projekts sein. Sie verteilen Kapital einfach und sichern den Weg für das Projekt. Anleger, die an privaten Verkäufen teilnehmen, erhalten in der Regel billigere Münzen, die ihren prozentualen Gewinn steigern. Wir gratulieren den Investoren, die sich für Bixtrim als bevorzugten ICO entschieden haben'
  },
  zh: {
    title: '“Bixtrim的成功私人销售',
    text_1:
      'Bixtrim私人特卖最近售出了惊人数量的代币！ 许多投资者买入2 340 000 BXM，但仍有机会使用80％的折扣。 在我们销售的这个阶段发售的代币总量为3 000 000 BXM，这意味着超过75％的销售。',
    text_2:
      '我们很高兴获得了这么多人的信任，现在距离加密货币每天使用都更接近简化的未来。 私人销售可以是快速获利或长期相信项目的绝佳机会。 他们可以轻松分配资金并确保项目的前进道路。 参与私人销售的投资者通常会获得更便宜的硬币，从而提高他们的百分比利润。 我们祝贺选择Bixtrim作为首选ICO的投资者“'
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
