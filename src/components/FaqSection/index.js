import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import {
  SectionWrapper,
  Heading,
  AccordionsWrapper,
  Container,
  FAQWrapper
} from './styles'
import AccordionItem from './AccordionItem'
import Questions from './QuestionsData'

class Faq extends Component {
  state = {
    openId: ''
  }

  toggleQuestion = num => {
    this.setState({ openId: num })
  }

  render() {
    let firstIndexer = 0
    let secondIndexer = 8

    return (
      <Element name="faq">
        <SectionWrapper>
          <Container>
            <Heading>
              <strong>
                <FormattedMessage
                  id="faq.title-strong"
                  defaultMessage="Frequently"
                />
              </strong>
              <FormattedMessage
                id="faq.title"
                defaultMessage="Asked Questions"
              />
            </Heading>
            <FAQWrapper>
              <AccordionsWrapper>
                {Questions.left.map(({ q, a }, i) => {
                  return (
                    <AccordionItem
                      key={i}
                      num={++firstIndexer}
                      question={q}
                      answer={a}
                      toggle={this.toggleQuestion}
                      opened={this.state.openId}
                    />
                  )
                })}
              </AccordionsWrapper>
              <AccordionsWrapper>
                {Questions.right.map(({ q, a }, i) => {
                  return (
                    <AccordionItem
                      key={i}
                      num={++secondIndexer}
                      question={q}
                      answer={a}
                      toggle={this.toggleQuestion}
                      opened={this.state.openId}
                    />
                  )
                })}
              </AccordionsWrapper>
            </FAQWrapper>
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Faq
