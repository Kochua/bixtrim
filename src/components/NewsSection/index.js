import React, { Component } from 'react'
import {
  SectionWrapper,
  Container,
  HeaderWrapper,
  Heading,
  Dotts
} from './styles'
import Slider from './Slider'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'

class News extends Component {
  render() {
    return (
      <Element name="news">
        <SectionWrapper>
          <Container>
            <HeaderWrapper>
              <Heading>
                <strong>
                  <FormattedMessage
                    id="news.title-strong"
                    defaultMessage="Bixtrim"
                  />
                </strong>
                <FormattedMessage id="news.title" defaultMessage="News" />
              </Heading>
              {/* <Btn>
                <FormattedMessage id="news.btn" defaultMessage="  All news" />
              </Btn> */}
            </HeaderWrapper>
            <Slider />
            <Dotts />
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default News
