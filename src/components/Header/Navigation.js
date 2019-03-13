import React, { Component } from 'react'
import LanguangeChanger from './LanguangeChanger'
import {
  HeaderTop,
  LogoContainer,
  Logo,
  Nav,
  NavItem,
  BtnWrapper,
  MenuMini,
  MenuMiniItem
} from './styles'
import { FormattedMessage } from 'react-intl'
import { Menu } from '@material-ui/icons'
import LogoImg from '../../assets/logo-white.png'
import SubsrcibeButton from '../lib/SubscribeModal'

class Navigation extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    var x = document.getElementById('root')
    x.addEventListener('click', () => {
      this.setState({ isOpen: false })
    })
  }

  render() {
    return (
      <HeaderTop>
        <LogoContainer>
          <Logo src={LogoImg} alt="bimtrix" />
        </LogoContainer>
        <Nav>
          <NavItem
            activeClass="active"
            to="product"
            spy={true}
            smooth={true}
            offset={210}
            duration={600}
          >
            <FormattedMessage id="nav.1" defaultMessage="Products" />
          </NavItem>

          <NavItem
            activeClass="active"
            to="invest"
            spy={true}
            smooth={true}
            offset={130}
            duration={600}
          >
            <FormattedMessage id="nav.2" defaultMessage="Investment" />
          </NavItem>

          <NavItem
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            offset={170}
            duration={600}
          >
            <FormattedMessage id="nav.3" defaultMessage="News" />
          </NavItem>

          <NavItem
            activeClass="active"
            to="tokens"
            spy={true}
            smooth={true}
            offset={220}
            duration={600}
          >
            <FormattedMessage id="nav.4" defaultMessage="Tokens" />
          </NavItem>

          <NavItem
            activeClass="active"
            to="roadmap"
            spy={true}
            smooth={true}
            offset={220}
            duration={600}
          >
            <FormattedMessage id="nav.5" defaultMessage="Roadmap" />
          </NavItem>

          <NavItem
            to="/"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            <Menu style={{ fontSize: '1.8rem' }} />

            <MenuMini isOpen={this.state.isOpen}>
              {/* <MenuMiniItemHref href="https://ico.bixtrim.com/">
                <FormattedMessage id="nav.6" defaultMessage="Buy Token" />
              </MenuMiniItemHref> */}

              <MenuMiniItem
                activeClass="active"
                to="video"
                spy={true}
                smooth={true}
                offset={180}
                duration={600}
              >
                <FormattedMessage id="nav.7" defaultMessage="Video" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="press"
                spy={true}
                smooth={true}
                offset={200}
                duration={600}
              >
                <FormattedMessage id="nav.8" defaultMessage="Press Media" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={210}
                duration={600}
              >
                <FormattedMessage id="nav.9" defaultMessage="Our Team" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="ico"
                spy={true}
                smooth={true}
                offset={170}
                duration={600}
              >
                <FormattedMessage id="nav.10" defaultMessage="ICO Listings" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="meet"
                spy={true}
                smooth={true}
                offset={200}
                duration={600}
              >
                <FormattedMessage id="nav.11" defaultMessage="Meet us" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="partners"
                spy={true}
                smooth={true}
                offset={210}
                duration={600}
              >
                <FormattedMessage id="nav.12" defaultMessage="Partners" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="advisors"
                spy={true}
                smooth={true}
                offset={180}
                duration={600}
              >
                <FormattedMessage id="nav.13" defaultMessage="Advisors" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={200}
                duration={600}
              >
                <FormattedMessage id="nav.14" defaultMessage="F.A.Q" />
              </MenuMiniItem>

              <MenuMiniItem
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={100}
                duration={600}
              >
                <FormattedMessage id="nav.15" defaultMessage="Subscribe" />
              </MenuMiniItem>
            </MenuMini>
          </NavItem>
        </Nav>
        <BtnWrapper>
          <SubsrcibeButton />
        </BtnWrapper>
        <LanguangeChanger />
      </HeaderTop>
    )
  }
}

export default Navigation
