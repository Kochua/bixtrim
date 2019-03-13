import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCountryFlag from 'react-country-flag'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'
import {
  MobileWrapper,
  LogoContainer,
  Logo,
  MobileContent,
  Side,
  MobileLink,
  MobileLang
} from './styles'
import LogoImg from '../../assets/logo-white.png'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-scroll'

const Langs = [
  { lang: 'en', body: { name: 'English', flag: 'us' } },
  { lang: 'ru', body: { name: 'Русский', flag: 'ru' } },
  { lang: 'ka', body: { name: 'ქართული', flag: 'ge' } },
  { lang: 'fr', body: { name: 'Le français', flag: 'fr' } },
  { lang: 'de', body: { name: 'Deutsche', flag: 'de' } },
  { lang: 'zh', body: { name: '中國', flag: 'cn' } }
]

class MobileNavigation extends Component {
  state = {
    isActive: false
  }

  langChangeHandler = lang => {
    const { changeLang_a, history } = this.props
    history.push(`/${lang}`)
    changeLang_a(lang)
  }
  render() {
    return (
      <div>
        <MobileWrapper>
          <LogoContainer href="/">
            <Logo src={LogoImg} alt="bimtrix" />
          </LogoContainer>
          <i
            className="fas fa-bars"
            style={{ fontSize: 24, color: '#fff' }}
            onClick={() => this.setState({ isActive: !this.state.isActive })}
          />
        </MobileWrapper>
        <MobileContent isActive={this.state.isActive}>
          <Side border>
            <Link
              activeClass="active"
              to="product"
              spy={true}
              smooth={true}
              offset={210}
              duration={600}
            >
              <MobileLink href="#">
                <FormattedMessage id="nav.1" defaultMessage="Products" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="invest"
              spy={true}
              smooth={true}
              offset={130}
              duration={600}
            >
              <MobileLink href="#investment">
                <FormattedMessage id="nav.2" defaultMessage="Investment" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              offset={170}
              duration={600}
            >
              <MobileLink href="#news">
                <FormattedMessage id="nav.3" defaultMessage="News" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="tokens"
              spy={true}
              smooth={true}
              offset={220}
              duration={600}
            >
              <MobileLink href="#tokens">
                <FormattedMessage id="nav.4" defaultMessage="Tokens" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={220}
              duration={600}
            >
              <MobileLink href="#roadmap">
                <FormattedMessage id="nav.5" defaultMessage="Roadmap" />
              </MobileLink>
            </Link>

            <MobileLink href="https://ico.bixtrim.com/">
              <FormattedMessage id="nav.6" defaultMessage="Buy Token" />
            </MobileLink>

            <Link
              activeClass="active"
              to="video"
              spy={true}
              smooth={true}
              offset={180}
              duration={600}
            >
              <MobileLink href="#video">
                <FormattedMessage id="nav.7" defaultMessage="Video" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="press"
              spy={true}
              smooth={true}
              offset={200}
              duration={600}
            >
              <MobileLink href="#press">
                <FormattedMessage id="nav.8" defaultMessage="Press Media" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={210}
              duration={600}
            >
              <MobileLink href="#team">
                <FormattedMessage id="nav.9" defaultMessage="Our Team" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="ico"
              spy={true}
              smooth={true}
              offset={170}
              duration={600}
            >
              <MobileLink href="#ico">
                <FormattedMessage id="nav.10" defaultMessage="ICO Listings" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="meet"
              spy={true}
              smooth={true}
              offset={200}
              duration={600}
            >
              <MobileLink href="#meet">
                <FormattedMessage id="nav.11" defaultMessage="Meet us" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="partners"
              spy={true}
              smooth={true}
              offset={210}
              duration={600}
            >
              <MobileLink href="#partners">
                <FormattedMessage id="nav.12" defaultMessage="Partners" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="advisors"
              spy={true}
              smooth={true}
              offset={180}
              duration={600}
            >
              <MobileLink href="#advisors">
                <FormattedMessage id="nav.13" defaultMessage="Advisors" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={200}
              duration={600}
            >
              <MobileLink href="#faq">
                <FormattedMessage id="nav.14" defaultMessage="F.A.Q" />
              </MobileLink>
            </Link>

            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={100}
              duration={600}
            >
              <MobileLink href="#footer">
                <FormattedMessage id="nav.15" defaultMessage="Subscribe" />
              </MobileLink>
            </Link>
          </Side>
          <Side>
            {Langs.map((lang, i) => {
              return (
                <MobileLang
                  onClick={() => this.langChangeHandler(lang.lang)}
                  key={i}
                >
                  <div style={{ marginRight: '0.5rem' }}>
                    <ReactCountryFlag code={lang.body.flag} svg />
                  </div>

                  {lang.body.name}
                </MobileLang>
              )
            })}
          </Side>
        </MobileContent>
      </div>
    )
  }
}

function mapStateToProps({ lang }) {
  return { lang }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(MobileNavigation))
