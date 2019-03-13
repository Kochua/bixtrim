import React, { Component } from 'react'
import Sticky from 'react-sticky-el'

import Navigation from './Navigation'
import HeaderContent from './HeaderContent'
import { Wrapper, Container } from './styles'
import Particles from '../Particles/Particles'
import MobileNavigation from './MobileNavigation'

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Particles />
        <Container>
          <Sticky
            topOffset={550}
            style={{
              position: 'relative',
              zIndex: '9999'
            }}
            stickyClassName="fixed-sticky"
          >
            <Navigation />
          </Sticky>
          <MobileNavigation />
          <HeaderContent />
        </Container>
      </Wrapper>
    )
  }
}

export default Header
