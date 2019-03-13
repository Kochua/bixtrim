import React, { Component } from 'react'
import { AccordionWrapper, AccordionTop, AccordionInner, Num } from './styles'

class Accordion extends Component {
  state = {
    open: false
  }

  render() {
    const { question, answer, num, toggle, opened } = this.props
    return (
      <div>
        <AccordionWrapper>
          <AccordionTop onClick={() => toggle(num)} active={num === opened}>
            <Num>{num}</Num>
            {question}
          </AccordionTop>
          <AccordionInner open={num === opened}>
            <p>{answer}</p>
          </AccordionInner>
        </AccordionWrapper>
      </div>
    )
  }
}

export default Accordion
