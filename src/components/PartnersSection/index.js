import React, { Component } from 'react'
import {
  SectionWrapper,
  Container,
  Heading,
  AdvisorHeading,
  AdvisorSection,
  AdvisorItemContainer,
  AdvisorImg,
  AdvisorFullName,
  AdvisorName
} from './styles'
import Slider from './SliderPartners'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import linenkoImg from '../../assets/advisors/alex-linenko-sm.jpg'
import pavlovImg from '../../assets/advisors/alexander-pavlov-sm.jpg'
import korotkovImg from '../../assets/advisors/andrey-korotkov-sm.jpg'
import fiedurImg from '../../assets/advisors/bogdanfiedur-sm.png'
import condenazaImg from '../../assets/advisors/brian-condenanza-sm.jpg'
import asatianiImg from '../../assets/advisors/david-asatiani-sm.jpg'
import biswasImg from '../../assets/advisors/devashish-biswas-sm.jpg'
import nanobashviliImg from '../../assets/advisors/levan-nanobashvili-sm.jpg'
import liImg from '../../assets/advisors/paul-li-sm.png'
import karimovImg from '../../assets/advisors/roman-karimov-sm.png'
import cockingImg from '../../assets/advisors/simon-cocking-sm.jpg'
import gogokhiaImg from '../../assets/advisors/vakhtang-gogokhia-sm.jpg'
import fujikawaImg from '../../assets/advisors/yo-fujikawa-sm.jpg'

const Advisors = [
  {
    name: (
      <FormattedMessage
        id="advisor.alexander"
        defaultMessage="Alexander Pavlov"
      />
    ),
    img: pavlovImg
  },
  {
    name: (
      <FormattedMessage id="advisor.roman" defaultMessage="Roman Karimov" />
    ),
    img: karimovImg
  },
  {
    name: <FormattedMessage id="advisor.paul" defaultMessage="Paul Li" />,
    img: liImg
  },
  {
    name: (
      <FormattedMessage id="advisor.simon" defaultMessage="Simon Cocking" />
    ),
    img: cockingImg
  },
  {
    name: <FormattedMessage id="advisor.alex" defaultMessage="Alex Linenko" />,
    img: linenkoImg
  },
  {
    name: (
      <FormattedMessage id="advisor.brian" defaultMessage="Brian Condenanza" />
    ),
    img: condenazaImg
  },
  {
    name: (
      <FormattedMessage id="advisor.andrey" defaultMessage="Andrey Korotkov" />
    ),
    img: korotkovImg
  },
  {
    name: (
      <FormattedMessage
        id="advisor.devashish"
        defaultMessage="Devashish Biswas"
      />
    ),
    img: biswasImg
  },
  {
    name: <FormattedMessage id="advisor.yo" defaultMessage="Yo Fujikawa" />,
    img: fujikawaImg
  },
  {
    name: (
      <FormattedMessage id="advisor.david" defaultMessage="David Asatiani" />
    ),
    img: asatianiImg
  },
  {
    name: (
      <FormattedMessage
        id="advisor.vakhtang"
        defaultMessage="Vakhtang Gogokhia"
      />
    ),
    img: gogokhiaImg
  },
  {
    name: (
      <FormattedMessage
        id="advisor.levan"
        defaultMessage="Levan Nanobashvili"
      />
    ),
    img: nanobashviliImg
  },
  {
    name: (
      <FormattedMessage id="advisor.bogdan" defaultMessage="Bogdan Fiedur" />
    ),
    img: fiedurImg
  }
]

class Partners extends Component {
  render() {
    return (
      <Element name="partners">
        <SectionWrapper>
          <Container>
            <Heading>
              <FormattedMessage id="partners.title" defaultMessage="Partners" />
            </Heading>
            <Slider />
            <Element name="advisors">
              <AdvisorHeading>
                <FormattedMessage
                  id="advisor.title"
                  defaultMessage="Advisors"
                />
              </AdvisorHeading>
              <AdvisorSection>
                {Advisors.map(({ name, img }, i) => {
                  return (
                    <AdvisorItemContainer key={i}>
                      <AdvisorImg src={img} />
                      <AdvisorFullName>{name}</AdvisorFullName>
                      <AdvisorName>
                        <FormattedMessage
                          id="advisor.advisor"
                          defaultMessage="Advisor"
                        />
                      </AdvisorName>
                    </AdvisorItemContainer>
                  )
                })}
              </AdvisorSection>
            </Element>
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Partners
