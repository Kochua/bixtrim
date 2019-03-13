import React, { Component } from 'react'
import {
  SectionWrapper,
  Container,
  HeadingWrapper,
  Heading,
  ContentWrapper,
  PressItemContainer
} from './styles'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import img_1 from '../../assets/press/bexchange.png'
import img_2 from '../../assets/press/bitcoin-com.png'
import img_3 from '../../assets/press/coin-news.png'
import img_4 from '../../assets/press/coindiary.png'
import img_5 from '../../assets/press/cryptototem.png'
import img_6 from '../../assets/press/cryptovest.png'
import img_7 from '../../assets/press/finance-magnates.png'
import img_8 from '../../assets/press/forbes.jpg'
import img_9 from '../../assets/press/fork-news.png'
import img_10 from '../../assets/press/irish-tech.png'
import img_11 from '../../assets/press/marketer.png'
import img_12 from '../../assets/press/mediamal.png'
import img_13 from '../../assets/press/medium.png'
import img_14 from '../../assets/press/navigator.png'
import img_15 from '../../assets/press/neironix.png'
import img_16 from '../../assets/press/newbium.png'
import img_17 from '../../assets/press/news-am.png'
import img_18 from '../../assets/press/Sputnik.png'

const Images = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
  img_11,
  img_12,
  img_13,
  img_14,
  img_15,
  img_16,
  img_17,
  img_18
]

class Press extends Component {
  render() {
    return (
      <Element name="press">
        <SectionWrapper>
          <Container>
            <HeadingWrapper>
              <Heading>
                <strong>
                  <FormattedMessage
                    id="press.title-strong"
                    defaultMessage="Press"
                  />
                </strong>{' '}
                <FormattedMessage id="press.title" defaultMessage="Media" />
              </Heading>
            </HeadingWrapper>
            <ContentWrapper>
              {Images.map((img, i) => {
                return (
                  <PressItemContainer key={i} href="#">
                    <img src={img} alt="press" />
                  </PressItemContainer>
                )
              })}
            </ContentWrapper>
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Press
