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
import img from '../../assets/news/Bixtrim at Blockchain _ Bitcoin Conference France..jpg'

const content = {
  en: {
    title: 'Bixtrim at Blockchain & Bitcoin Conference France.',
    text_1:
      'Today, on the 18th of July, Blockchain & BitcoinConference was held in Paris.',
    list_1: {
      title: 'Key topics of the conference included:',
      items: [
        'Cryptocurrencies: investments and prospects in France',
        'Blockchain in business processes',
        'ICO',
        'Cryptocurrency regulation',
        'Cryptocurrency analytics and predictions'
      ]
    },
    list_2: {
      title: 'The participants ranged from many industries and included:',
      items: [
        'Cryptocurrency market leaders',
        'Best experts in industry',
        'Blockchain enthusiasts',
        'Investors',
        'Entrepreneurs',
        'Developers'
      ]
    },
    text_2:
      'team members Chief Executive Officer- Artur Arabian, Chief Operations Officer - Paata Avdaliani and Digital Marketing Manager - Mariam Nozadze attended the event. The Digital Marketing Manager of Bixtrim, Mariam Nozadze had a speech and talked about our company, projects and our mission as a team. She also talked about the crypto-market positions in Georgia and their importance.',
    text_3:
      'It is also worth mentioning that Bixtrim was a general sponsor of Blockchain {aso} Bitcoin Conference Georgia which was organized by the same international company - Smile-Expo.'
  },
  ka: {
    title: 'Bixtrim at Blockchain & Bitcoin Conference France',
    text_1:
      'დღეს, 18 ივლისს, პარიზში ჩატარდა კრიპტო ივენთი - Blockchain & Bitcoin Conference France.',
    list_1: {
      title: 'კონფერენციის მთავარი თემები იყო:',
      items: [
        'კრიპტოვალუტები: ინვესტიციები და შესაძლებლობები საფრანგეთში',
        'ბლოკჩეინი ბიზნეს პროცესებში',
        'ICO',
        'კრიპტოვალუტების რეგულაცია'
      ]
    },
    list_2: {
      title: 'კრიპტოვალუტების ანალიტიკა და წინასწარი ვარაუდები:',
      items: [
        'კონფერენციაში მონაწილეობდნენ კრიპტო ბაზრის ლიდერები',
        'ინდუსტრიის ექსპერტები',
        'ინვესტორები და დეველოპერები ისეთი კომპანიებიდან, როგორებიცაა: Microsoft, IBM Cloud France, East-West Digital News და ა.შ.'
      ]
    },
    text_2:
      'Bixtrim-ის გუნდის წევრები: აღმასრულებელი დირექტორი - არტურ არაბიანი, ოპერაციების მთავარი სპეციალისტი - პაატა ავდალიანი და ციფრული მარკეტინგის მენეჯერი - მარიამ ნოზაძე. ჩვენი ციფრული მარკეტინგის მენეჯერი კონფერენციაზე ერთ-ერთი მომხსენებელი იყო. მან ისაუბრა კომპანიისა, პროექტებისა და მიზნების შესახებ, ასევე განიხილა საქართველოს კრიპტო ბაზრის მდგომარეობა.',
    text_3:
      'მნიშვნელოვანია ისიც, რომ ბიქსტრიმი ამავე ორგანიზაციის მიერ თბილისში ჩატარებული ღონისძიების, Blockchain & Bitcoin Conference Georgia, გენერალური სპონსორი იყო.'
  },
  ru: {
    title: 'Bixtrim на Blockchain & Bitcoin Conference во Франции.',
    text_1:
      'Сегодня, 18 июля, в Париже состоялась конференция Blockchain & Bitcoin. ',
    list_1: {
      title: 'Ключевые темы конференции были: ',
      items: [
        'Криптовалюты: инвестиции и перспективы во Франции',
        'Блокчейн в бизнес-процессах ● ICO ● Регулирование криптовалют',
        'Аналитика криптовалют и прогнозы '
      ]
    },
    list_2: {
      title: 'В конференции принимали участие: ',
      items: [
        'Лидеры криптовалютного рынка',
        'Лучшие эксперты в индустрии',
        'Блокчейн энтузиасты',
        'Инвесторы',
        'Предприниматели',
        'Разработчики'
      ]
    },
    text_2:
      'Члены команды Bixtrim, главный исполнительный директор - Артур Арабиан, главный операционный директор - Паата Авдалиани и менеджер по цифровому          маркетингу - Мариам Нозадзе присутствовали на мероприятии. Менеджер по         цифровому маркетингу Мариам Нозадзе выступила с речью и рассказала о нашей компании, проектах и ​​нашей миссии.  Стоит также отметить, что Bixtrim был генеральным спонсором конференции Blockchain & Bitcoin Georgia, организованной той же международной компанией Smile-Expo.',
    text_3: ''
  },

  fr: {
    title: 'Bixtrim à la Blockchain & Bitcoin Conference France.',
    text_1:
      "Aujourd'hui, le 18 juillet, s'est tenue à Paris la conférence Blockchain & Bitcoin.",
    list_1: {
      title: 'Les sujets clés de la conférence comprenaient:',
      items: [
        'Crypto-monnaies: investissements et perspectives en France',
        'Blockchain dans les processus métier',
        'ICO',
        'Régulation de la crypto-monnaie',
        'Analyse de cryptomonnaie et prévisions'
      ]
    },
    list_2: {
      title:
        'Les participants venaient de nombreuses industries et comprenaient:',
      items: [
        'Leaders du marché de la crypto-monnaie',
        "Meilleurs experts de l'industrie",
        'Amateurs de blockchain',
        'Les investisseurs',
        'Entrepreneurs',
        'développeurs'
      ]
    },
    text_2:
      "Les membres de l'équipe de Bixtrim, Chief Executive Officer - Artur Arabian, Chief Operations Officer - Paata Avdaliani et Digital Marketing Manager - Mariam Nozadze ont assisté à l'événement. Le directeur marketing de Bixtrim, Mariam Nozadze, a prononcé un discours et a parlé de notre entreprise, de nos projets et de notre mission en équipe. Elle a également parlé des positions sur le marché cryptographique en Géorgie et de leur importance.",
    text_3:
      'Il convient également de mentionner que Bixtrim était un sponsor général de Blockchain & Bitcoin Conference Georgia, organisée par la même société internationale - Smile-Expo. '
  },
  de: {
    title: 'Bixtrim bei Blockchain & Bitcoin Conference Frankreich.',
    text_1:
      'Heute, am 18. Juli, fand die Blockchain & Bitcoin Conference in Paris statt.',
    list_1: {
      title: 'Wichtige Themen der Konferenz waren:',
      items: [
        'Kryptowährungen: Investitionen und Perspektiven in Frankreich',
        'Blockchain in Geschäftsprozessen',
        'ICO',
        'Kryptowährungsregulierung',
        'Kryptowährungsanalysen und Vorhersagen'
      ]
    },
    list_2: {
      title: 'Die Teilnehmer kamen aus vielen Branchen und beinhalteten:',
      items: [
        'Marktführern für Kryptowährung',
        'Beste Experten in der Industrie',
        'Blockchain-Enthusiasten',
        'Investoren',
        'Unternehmer',
        'Entwickler'
      ]
    },
    text_2:
      'Bixtrim Teammitglieder Chief Executive Officer - Artur Arabian, Chief Operations Officer - Paata Avdaliani und Digital Marketing Manager - Mariam Nozadze nahmen an der Veranstaltung teil. Der Digital Marketing Manager von Bixtrim, Mariam Nozadze, hielt eine Rede und sprach über unser Unternehmen, unsere Projekte und unsere Mission als Team. Sie sprach auch über die Kryptomarktpositionen in Georgien und ihre Bedeutung.',
    text_3:
      'Es ist auch erwähnenswert, dass Bixtrim Generalsponsor der Blockchain & Bitcoin Conference Georgia war, die von der gleichen internationalen Firma - Smile-Expo - organisiert wurde.'
  },
  zh: {
    title: '“Bixtrim在Blockchain＆Bitcoin Conference France。',
    text_1: '今天，7月18日，区块链和比特币会议在巴黎举行。',
    list_1: {
      title: '会议的主要议题包括：',
      items: [
        '加密货币：法国的投资和前景',
        '业务流程中的区块链',
        'ICO',
        '加密货币监管',
        '加密货币分析和预测'
      ]
    },
    list_2: {
      title: '参与者包括许多行业，包括：',
      items: [
        '加密货币市场领导者',
        '最好的行业专家',
        '区块链爱好者',
        '投资者',
        '企业家',
        '开发商'
      ]
    },
    text_2:
      'Bixtrim团队成员首席执行官 - Artur Arabian，首席运营官 - Paata Avdaliani和数字营销经理 - Mariam Nozadze参加了此次活动。 Bixtrim的数字营销经理Mariam Nozadze发表了演讲，并谈到了我们的公司，项目以及我们团队的使命。她还谈到了格鲁吉亚的加密市场地位及其重要性。',
    text_3:
      '值得一提的是，Bixtrim是Blockchain＆Bitcoin Conference Georgia的总赞助商，该会议由同一家国际公司Smile-Expo组织。'
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
                  {content[lang].list_1.title}
                  <ul style={{ marginLeft: '5rem' }}>
                    {content[lang].list_1.items.map(item => {
                      return <li>{item}</li>
                    })}
                  </ul>
                  <br />
                  {content[lang].list_2.title}
                  <ul style={{ marginLeft: '5rem' }}>
                    {content[lang].list_2.items.map(item => {
                      return <li>{item}</li>
                    })}
                  </ul>
                  <br />
                  <strong>Bixtrim </strong>
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
