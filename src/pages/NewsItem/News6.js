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
import img from '../../assets/news/Bixtrim and Blockchain Academy Georgia.jpg'

const content = {
  en: {
    title: 'Bixtrim and Blockchain Academy Georgia',
    text_1:
      'A Memorandum was signed by the Chief Executive Officer of Bixtrim LLC - Artur Arabyan and the Founder of Blockchain Academy Georgia - Davit Chumburidze. ',
    text_2:
      'From Bixtrim LLC - Nodar Lomouri and Paata Avdaliani took part in the memorandum and from Blockchain Academy Georgia - Vakhtang Gurgenidze and Phridon Stephnadze.',
    text_3:
      'The Goal of blockchain academy Georgia is to increase knowledge about Blockchain Technologies and contribute to establish professionals as well as collaborating with local and foreign investors. Strategy partners of Blockchain Academy are Blockchain Laboratory of "University of Georgia" and acting partners are " CryptoAcademy" in Amsterdam.',
    text_4:
      'Our team is glad to become a partner of Blockchain academy Georgia , accepting one of the many challenges of the crypto world and becoming one of the several companies , which are helping and giving directions to those, who are interested in crypto and blockchain technologies.'
  },
  ka: {
    title: 'Bixtrim და Blockchain Academy Georgia',
    text_1:
      'ბიქსტრიმსა და ბლოკჩეინ აკადემიას შორის თანამშრომლობის მემორანდუმი გაფორმდა. მემორანდუმს ხელი ბლოკჩეინ აკადემიის დამფუძნებელმა დავით ჭუმბურიძემ და ბიქსტრიმის აღმასრულებელმა დირექტორმა არტურ არაბიანმა მოაწერეს.',
    text_2:
      'მემორანდუმში მონაწილეობა მიიღეს ბიქსტრიმის წარმომადგენლებმა: ნოდარ ლომოურმა, და პაატა ადვალიანმა და ბლოკჩეინ აკადემიის წარმომადგენლებმა: ვახტანგ გურგენიძემ და ფრიდონ სტეფნაძემ.',
    text_3:
      'ბლოკჩეინ აკადემიის მიზანია აამაღლოს ცნობიერება ბლოკჩეინ ტექნოლოგიების მიმართულებით და ხელი შეუწყოს პროფესიონალი კადრების ჩამოყალიბებას. ისინი თანამშომლობენ ადგილობრივ და უცხოელ ექსპერტებთან. Blockchain Academy-ის სტრატეგიული პარტნიორები არიან “University of Georgia“-ს ბლოკჩეინ ლაბორატ',
    text_4:
      'ჩვენი გუნდი მოხარულია,გახდეს ბლოკჩეინ აკადემიის პარტნიორი, მასთან ერთად მიიღოს კრიპტოსამყაროს გამოწვევები და გახდეს ერთ-ერთი იმ კომპანიებიდან, რომლებიც დაინტერესებულ პირებს დაეხმარებიან და მიმართულებას მისცემენ ისეთი სწრაფად ცვალებადი საქმიანობისათვის, როგორიც არის ბლოკჩეინ ტექნოლოგიები.'
  },
  ru: {
    title: 'Bixtrim и Blockchain Academy Georgia ',
    text_1:
      'Бикстрим и Блокчеин Академия подписали меморандум о сотрудничистве. Меморандум был подписан Давидом Чумбуридзе, основателем Блокчейн Академии и генеральным директором Бикстрима Артуром Арабианом.',
    text_2:
      'В меморандуме приняли участие представители Бикстрима Нодар Ломоури и Паата Авдалиани, а также представители Блокчейн Академии: Вахтанг Гургенидзе и Фридон Степнадзе. ',
    text_3:
      'Цель Блокчеин Академии - повысить осведомленность о блокчейн технологиях и содействовать развитию профессионалов. Они сотрудничают с местными и зарубежными экспертами. Стратегическими партнерами Блокчейн Академии являются блокчейн лаборатория «University of Georgia» и «CryptoAcademy», действующий в Амстердаме. ',
    text_4:
      'Наша команда рада стать партнером Блокчейн Академии и одной из компаний,           которая поможет заинтересованным людям и даст им направление как быстро заработать с помощью блокчейн технологий. '
  },
  fr: {
    title: 'Académie Bixtrim et Blockchain Géorgie',
    text_1:
      'Un mémorandum a été signé par le directeur général de Bixtrim LLC - Artur Arabyan et le fondateur de Blockchain Academy Georgia - Davit Chumburidze.',
    text_2:
      'De Bixtrim LLC - Nodar Lomouri et Paata Avdaliani ont pris part au mémorandum et à la Blockchain Academy Georgia - Vakhtang Gurgenidze et Phridon Stephnadze.',
    text_3:
      'Le but de l’académie blockchain Georgia est d’accroître les connaissances sur les technologies Blockchain et de contribuer à la création de professionnels et à la collaboration avec des investisseurs locaux et étrangers. Les partenaires stratégiques de la Blockchain Academy sont Blockchain Laboratory de "" University of Georgia "" et des partenaires par intérim sont "" CryptoAcademy "" à Amsterdam.',
    text_4:
      'Notre équipe est heureuse de devenir partenaire de l’académie Blockchain en Géorgie, acceptant l’un des nombreux défis du monde de la cryptographie et devenant l’une des nombreuses entreprises qui aident et orientent ceux qui s’intéressent aux technologies de crypto et blockchain.'
  },
  de: {
    title: 'Bixtrim und Blockchain Academy Georgia',
    text_1:
      'Ein Memorandum wurde vom Chief Executive Officer von Bixtrim LLC - Artur Arabyan und dem Gründer der Blockchain Academy Georgia - Davit Chumburidze unterzeichnet.',
    text_2:
      'Von Bixtrim LLC nahmen Nodar Lomouri und Paata Avdaliani an dem Memorandum und von der Blockchain Academy Georgia - Vakhtang Gurgenidze und Phridon Stephnadze teil.',
    text_3:
      'Das Ziel der blockchain academy Georgia ist es, das Wissen über Blockchain Technologies zu erweitern und einen Beitrag zur Gründung von Fachleuten sowie zur Zusammenarbeit mit lokalen und ausländischen Investoren zu leisten. Strategy Partner der Blockchain Academy sind das Blockchain Laboratory der "University of Georgia" und die Kooperationspartner sind "CryptoAcademy" in Amsterdam.',
    text_4:
      'Unser Team freut sich, ein Partner der Blockchain Academy Georgia zu werden, eine der vielen Herausforderungen der Kryptowelt anzunehmen und zu einem der vielen Unternehmen zu werden, die denjenigen, die sich für Krypto- und Blockchain-Technologien interessieren, eine Orientierungshilfe geben.'
  },
  zh: {
    title: '“Bixtrim和Blockchain Academy Georgia',
    text_1:
      'Bixtrim LLC首席执行官Artur Arabyan和格鲁吉亚区块链学院创始人Davit Chumburidze签署了一份备忘录。',
    text_2:
      '来自Bixtrim LLC - Nodar Lomouri和Paata Avdaliani参加了备忘录，来自Blockchain Academy Georgia - Vakhtang Gurgenidze和Phridon Stephnadze。',
    text_3:
      '区块链学院格鲁吉亚的目标是增加对区块链技术的了解，并为建立专业人士以及与本地和外国投资者合作做出贡献。 区块链学院的战略合作伙伴是“乔治亚大学”的区块链实验室，“代理合作伙伴”是阿姆斯特丹的“CryptoAcademy”。',
    text_4:
      '我们的团队很高兴成为格鲁吉亚区块链学院的合作伙伴，接受加密世界的众多挑战之一，并成为几家公司之一，这些公司正在帮助并指导那些对加密和区块链技术感兴趣的人。“'
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
                  {content[lang].text_2}
                  <br />
                  <br />
                  {content[lang].text_3}
                  <br />
                  <br />
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
