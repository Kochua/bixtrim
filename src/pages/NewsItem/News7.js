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
import img from '../../assets/news/Bixtrim Bounty Campaign Started.jpg'

const content = {
  en: {
    title: 'Bixtrim Bounty Campaign Started!',
    text_1:
      'As of June 27th, Bixtrim started its bounty campaign. A bounty campaign essentially refers to incentivized reward mechanisms offered by companies to individuals. What this means is that a company introducing a product or a service offers some rewards to people in exchange for performing certain tasks.',
    list: {
      title:
        'We are allocating 1% tokens (720 000 BXM) for our bounty campaign.',
      items: [
        'Signatures campaign 17%',
        'Twitter campaign 24%',
        'Facebook campaign 22%',
        'Articles campaign 15%',
        'Youtube campaign 17%',
        'LinkedIn campaign 5%'
      ]
    },
    text_2:
      'Other general rules and questions about the bounty campaign can be asked here:'
  },
  ka: {
    title: 'ბიქსტრიმის Bounty კამპანია დაიწყო!',
    text_1:
      '27 ივნისს ბიქსტრიმმა დაიწყო Bounty კამპანია. ის მოიცავს წახალისების მექანიზმებს, რომლებიც გთავაზობენ კომპანიები. ეს ნიშნავს იმას, რომ კომპანია, რომელიც წარადგენს პროდუქტს ან სერვისს, ხალხს ჯილდოს სთავაზობს, გარკვეული ამოცანების შესრულების სანაცვლოდ.',
    list: {
      title:
        'ჩვენ გამოვყოფთ ტოკენების 1%-ს (720 000 BXM) ჩვენი Bounty კამპანიისთვის.',
      items: [
        'ხელმოწერების კამპანია 17%',
        'Twitter კამპანია 24%',
        'Facebook კამპანია 22%',
        'სტატიების კამპანია 15 %',
        'Youtube კამპანია 17%',
        'LinkedIn კამპანია 5%'
      ]
    },
    text_2:
      'მოცემულ ბმულზე შეგიძლიათ გაეცნოთ ზოგად წესებს და დაგვისვათ კითხვები Bounty კამპანიის შესახებ: '
  },
  ru: {
    title: 'Началась Bounty кампания! ',
    text_1:
      'По состоянию на 27 июня Bixtrim начал Bounty кампанию. Она в основном            относится к стимулированным механизмам вознаграждения, предлагаемым      компаниями для физических лиц. Это означает, что компания, представляющая продукт или услугу, предлагает вознаграждение людям в обмен на выполнение определенных задач.',
    list: {
      title:
        'Мы выделяем 1% токенов (720 000 BXM). Наша кампания разделена на следующие категории: ',
      items: [
        'Кампания подписи 17%',
        'Кампания в Twitter 24%',
        'Кампания в Facebook 22%',
        'Кампания новостей 15%',
        'Кампания в Youtube 17%',
        'Кампания в LinkedIn 5%'
      ]
    },
    text_2:
      'Здесь можно узнать об общих правилах и задавать вопросы о Bounty кампании: '
  },
  fr: {
    title: 'La campagne Bixtrim Bounty a commencé!',
    text_1:
      "Le 27 juin, Bixtrim a lancé sa campagne de primes. Une campagne de primes fait essentiellement référence aux mécanismes de récompenses offerts par les entreprises aux individus. Cela signifie qu'une entreprise introduisant un produit ou un service offre des récompenses aux personnes en échange de l'exécution de certaines tâches.",
    list: {
      title:
        'Nous allouons 1% de jetons (720 000 BXM) pour notre campagne de primes.',
      items: [
        'Campagne de signatures 17%',
        'Campagne Twitter 24%',
        'Campagne Facebook 22%',
        "Campagne d'articles 15%",
        'Campagne Youtube 17%',
        'Campagne LinkedIn 5%'
      ]
    },
    text_2:
      "D'autres règles générales et questions sur la campagne de primes peuvent être posées ici: "
  },
  de: {
    title: 'Bixtrim Bounty Kampagne gestartet!',
    text_1:
      'Am 27. Juni startete Bixtrim seine Bounty-Kampagne. Eine Bounty-Kampagne bezieht sich im Wesentlichen auf incentivierte Belohnungsmechanismen, die Einzelpersonen von Unternehmen angeboten werden. Dies bedeutet, dass ein Unternehmen, das ein Produkt oder eine Dienstleistung einführt, Menschen im Gegenzug für bestimmte Aufgaben belohnt.',
    list: {
      title: 'Wir vergeben 1% Tokens (720 000 BXM) für unsere Bounty-Kampagne.',
      items: [
        'Unterschriftenkampagne 17%',
        'Twitter-Kampagne 24%',
        'Facebook-Kampagne 22%',
        'Artikel Kampagne 15%',
        'Youtube-Kampagne 17%',
        'LinkedIn-Kampagne 5%'
      ]
    },
    text_2:
      'Weitere allgemeine Regeln und Fragen zur Bounty-Kampagne können hier gestellt werden: '
  },
  zh: {
    title: '“Bixtrim Bounty活动开始了！',
    text_1:
      '截至6月27日，Bixtrim开始了它的赏金活动。 赏金活动实质上是指公司向个人提供的激励奖励机制。 这意味着引入产品或服务的公司为人们提供一些奖励以换取执行某些任务。',
    list: {
      title: '我们为赏金活动分配了1％的代币（720 000 BXM）',
      items: [
        '签名活动17％',
        '推特活动24％',
        'Facebook活动22％',
        '文章活动15％',
        'Youtube活动17％',
        'LinkedIn广告系列5％'
      ]
    },
    text_2: '关于赏金活动的其他一般规则和问题可以在这里询问:'
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
                  <br />
                  <br />
                  {content[lang].list.title} <br />
                  <ul style={{ marginLeft: '5rem' }}>
                    {content[lang].list.items.map(item => {
                      return <li>{item} </li>
                    })}
                  </ul>
                  <br />
                  <br />
                  {content[lang].text_2}
                  <a
                    href="https://bitcointalk.org/index.php?topic=4552453"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://bitcointalk.org/index.php?topic=4552453
                  </a>
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
