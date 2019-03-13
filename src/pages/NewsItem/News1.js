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
import img_1 from '../../assets/news/forbes.jpg'

const content = {
  en: {
    title: 'Bixtrim establishes partnership with Forbes',
    text_1:
      'Forbes is one of the most influential magazines in the Georgian business sector. Media Partners Georgia and Forbes Media LLC have made an agreement considering the Georgian printed copy of the magazine, which is now issued monthly. Forbes tells us about people, ideas and technology that changes the world.',
    text_2:
      'The goal of the magazine is showing the impact of Georgian business and economics as well as the stories of successful people. Bixtrim partnered up with Forbes and created an article about cryptocurrencies, our platform and the team behind it.',
    text_3:
      'As a Georgian startup we believe this is the first step towards raising awareness about Bixtrim and receiving trust from the people we so need, because we hope to be the idea that changes the world.'
  },
  ka: {
    title: 'ბიქსტრიმმა ფორბსთან თანამშობლობა დაიწყო',
    text_1:
      'ფორბსი ერთ-ერთი ყველაზე გავლენიანი ქართული ბიზნეს გამოცემაა. Media Partners Georgia-სა და Forbes Media LLC-ის შორის გაფორმებული სალიცენზიო შეთანხმების შესაბამისად, ჟურნალის ბეჭდური ვერსია ყოველთვიურად გამოიცემა ქართულ ენაზე.',
    text_2:
      'ფორბსი მკითხველს მოუთხრობს იმ ადამიანებზე, იდეებსა და ტექნოლოგიებზე, რომლებიც სამყაროს ცვლიან. გამოცემის მიზანი ქართული ბიზნესისა და ეკონომიკის მიღწევების წარმოჩენა და წარმატებული ადამიანების ისტორიების გამოქვეყნებაა.',
    text_3:
      'ბიქსტრიმმა Forbes-თან თანამშრომლობა დაიწყო. ჩვენ, როგორც ქართული სტარტაპი, ვთვლით, რომ ამით გადავდგით პირველი ნაბიჯი საზოგადოებაში ცნობიერების ამაღლებისა და მათი ნდობის მოპოვებისკენ. ვიმედოვნებთ - ჩვენი იდეები შეცვლის სამყაროს.'
  },
  ru: {
    title: 'Бикстрим сотрудничает с Forbes',
    text_1:
      'Forbes является одним из самых влиятельных журналов в бизнес-секторе Грузии. Media Partners Georgia и Forbes Media LLC заключили соглашение и грузинская печатная копия журнала выпускается ежемесячно. Forbes рассказывает нам о людях, идеях и технологиях, которые меняют мир.',
    text_2:
      'Цель журнала - рассказать новости бизнеса и экономики цтраны, а также истории успешных людей. Bixtrim сотрудничал с Forbes и создал статью о криптовалютах, нашей платформе и команде.',
    text_3:
      'Мы, как грузинский стартап, считаем, что это первый шаг в направлении повышения осведомленности о Бикстриме и получения доверия от людей, которые нам так нужны, потому что мы надеемся, что наша идея изменит мир.'
  },
  fr: {
    title: 'Bixtrim établit un partenariat avec Forbes',
    text_1:
      "Forbes est l'un des magazines les plus influents du secteur des affaires géorgien. Media Partners Georgia et Forbes Media LLC ont conclu un accord concernant la copie imprimée géorgienne du magazine, qui est maintenant publiée tous les mois. Forbes nous parle de personnes, d'idées et de technologies qui changent le monde.",
    text_2:
      "Le but du magazine est de montrer l’impact des affaires et de l’économie géorgiennes, ainsi que les histoires de personnes qui ont réussi. Bixtrim s'est associé à Forbes et a créé un article sur les crypto-monnaies, notre plateforme et l'équipe derrière elle.",
    text_3:
      "En tant que start-up géorgienne, nous pensons que c'est la première étape vers la sensibilisation à Bixtrim et la confiance des personnes dont nous avons besoin, car nous espérons être l'idée qui change le monde. "
  },
  de: {
    title: 'Bixtrim gründet Partnerschaft mit Forbes',
    text_1:
      'Forbes ist eines der einflussreichsten Magazine in der georgischen Wirtschaft. Media Partners Georgia und Forbes Media LLC haben eine Vereinbarung über die gedruckte Ausgabe des Magazins getroffen, die nun monatlich erscheint. Forbes erzählt uns von Menschen, Ideen und Technologien, die die Welt verändern.',
    text_2:
      'Das Ziel des Magazins ist es, die Auswirkungen der georgischen Wirtschaft und der Geschichten von erfolgreichen Menschen zu zeigen. Bixtrim hat sich mit Forbes zusammengetan und einen Artikel über Kryptowährungen, unsere Plattform und das Team dahinter erstellt.',
    text_3:
      'Als georgisches Startup glauben wir, dass dies der erste Schritt ist, um das Bewusstsein für Bixtrim zu erhöhen und Vertrauen von den Menschen zu bekommen, die wir so brauchen, denn wir hoffen, dass dies die Idee ist, die die Welt verändert.'
  },
  zh: {
    title: '“Bixtrim与福布斯建立了合作伙伴关系',
    text_1:
      '福布斯是格鲁吉亚商业领域最具影响力的杂志之一。 媒体合作伙伴格鲁吉亚和福布斯媒体有限公司已经就该杂志的格式印刷版本达成协议，该杂志现已每月发行。 福布斯告诉我们改变世界的人，思想和技术。',
    text_2:
      '该杂志的目标是展示格鲁吉亚商业和经济的影响以及成功人士的故事。 Bixtrim与福布斯合作，创建了一篇关于加密货币，我们的平台及其背后的团队的文章。',
    text_3:
      '作为一个格鲁吉亚创业公司，我们相信这是提高人们对Bixtrim的认识并从我们需要的人那里获得信任的第一步，因为我们希望成为改变世界的想法。“'
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
                  <br /> {content[lang].text_2} <br />
                  <br /> {content[lang].text_3}
                </Text>
              </TextContainer>
            </MainSide>
            <LeftSide>
              <Img src={img_1} />
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
