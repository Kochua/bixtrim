import React, { Component } from 'react'
import { SectionWrapper, Container, Heading } from './styles'
import { FormattedMessage } from 'react-intl'
import Slider from './SliderRoad'
import { Element } from 'react-scroll'

class Roadshow extends Component {
  render() {
    return (
      <Element name="meet">
        <SectionWrapper>
          <Container>
            <Heading>
              <strong>
                <FormattedMessage
                  id="meet.title-strong"
                  defaultMessage="Meet"
                />
              </strong>{' '}
              <FormattedMessage id="meet.title" defaultMessage="Us" />
            </Heading>

            <Slider />
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Roadshow
