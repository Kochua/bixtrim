import React, { Component } from 'react'
import { SectionWrapper, Heading, Container } from './styles'
import Slider from './SliderIco'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'

class Ico extends Component {
  render() {
    return (
      <Element name="ico">
        <SectionWrapper>
          <Container>
            <Heading>
              <FormattedMessage
                id="ico.title"
                defaultMessage="OUR ICO IS LISTED"
              />
            </Heading>
            <Slider />
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Ico
