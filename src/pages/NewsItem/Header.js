import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LanguangeChanger from '../../components/Header/LanguangeChanger'

import {
  HeaderTop,
  LogoContainer,
  Logo,
  Nav,
  NavItem,
  BtnWrapper,
  Btn
} from '../../components/Header/styles'
import { FormattedMessage } from 'react-intl'
import { Menu } from '@material-ui/icons'
import LogoImg from '../../assets/logo-white.png'

class Navigation extends Component {
  render() {
    const { lang } = this.props
    return (
      <HeaderTop bg>
        <Link to={`/${lang}`}>
          <LogoContainer>
            <Logo src={LogoImg} alt="bimtrix" />
          </LogoContainer>
        </Link>
        <Nav>
          <NavItem href="#">
            <FormattedMessage id="nav.1" defaultMessage="Products" />
          </NavItem>
          <NavItem href="#">
            <FormattedMessage id="nav.2" defaultMessage="Investment" />
          </NavItem>
          <NavItem href="#">
            <FormattedMessage id="nav.3" defaultMessage="News" />
          </NavItem>
          <NavItem href="#">
            <FormattedMessage id="nav.4" defaultMessage="Tokens" />
          </NavItem>
          <NavItem href="#">
            <FormattedMessage id="nav.5" defaultMessage="Roadmap" />
          </NavItem>
          <NavItem href="#">
            <Menu style={{ fontSize: '1.8rem' }} />
          </NavItem>
        </Nav>
        <BtnWrapper>
          <Btn href="#">Subscribe</Btn>
        </BtnWrapper>
        <LanguangeChanger />
      </HeaderTop>
    )
  }
}

const mapStateToProps = ({ lang }) => {
  return { lang }
}
export default connect(mapStateToProps)(Navigation)
