import React, { Component } from 'react'
import {
  SectionWrapper,
  Container,
  HeaderWrapper,
  PrimaryHeading,
  Line,
  Text,
  Slider,
  ArrowContainer
} from './styles'
import { FormattedMessage } from 'react-intl'
import RoadImg from '../../assets/roadmap-en.png'
import { Element } from 'react-scroll'
class Roadmap extends Component {
  scrollRight() {
    document.getElementById('scroll').scrollLeft += 35
  }
  scrollLeft() {
    document.getElementById('scroll').scrollRight += 35
  }
  render() {
    return (
      <Element name="roadmap">
        <SectionWrapper>
          <Container>
            <HeaderWrapper>
              <PrimaryHeading>
                <FormattedMessage
                  id="roadmap.title"
                  defaultMessage="Road Map"
                />
              </PrimaryHeading>
              <Line />
              <Text>
                <FormattedMessage
                  id="roadmap.text"
                  defaultMessage="Bixtrim defines 4 main stages/goals on which funds will be
              allocated. After reaching each stage, the goals will be revised
              and changed accordingly, depending on the funds raised. The next
              stage will start as soon as the previous one is completed."
                />
              </Text>
            </HeaderWrapper>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '4rem',
                marginBottom: '2rem'
              }}
            >
              <ArrowContainer
                onClick={() => {
                  this.scrollLeft()
                }}
              >
                <i className="fas fa-angle-left" />
              </ArrowContainer>
              <Slider id="scroll" ref="scroll">
                <img src={RoadImg} alt="roadmap" />
              </Slider>
              <ArrowContainer
                onClick={() => {
                  this.scrollRight()
                }}
              >
                <i className="fas fa-angle-right" />
              </ArrowContainer>
            </div>
            {/* <Btn>Subscribe</Btn> */}
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Roadmap
