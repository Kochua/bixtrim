import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import {
  ContentWrapper,
  PrimaryHeading,
  SecondaryHeading,
  VideoWrapper,
  PaperWrapper,
  PapperTop,
  PapperBottom,
  RaitingsWrapper,
  RaitingContainer,
  RaitingTop,
  RaitingLogo,
  RaitingBottom,
  RaitingNumber,
  SocialsWrapper,
  SocialItem,
  MainWrapper
} from './styles'
import Sticky from 'react-sticky-el'
import IcoMarkLogo from '../../assets/ratings/icomarks.png'
import IcoBrenchLogo from '../../assets/ratings/icobrench.png'
import TrackLogo from '../../assets/ratings/track.png'
import WhitePapperEN from '../../assets/docs/whitepaper-en.pdf'
import WhitePapperGE from '../../assets/docs/whitepaper-ge.pdf'
import WhitePapperRU from '../../assets/docs/whitepaper-ru.pdf'
import OnePager from '../../assets/docs/bixtrim-one-pager.pdf'
import SalesTimer from './SalesTimer'

import VideoDialog from './VideoDialog'

class HeaderContent extends Component {
  renderWhitePapers(lang) {
    if (lang === 'en') {
      return WhitePapperEN
    } else if (lang === 'ru') {
      return WhitePapperRU
    } else {
      return WhitePapperGE
    }
  }

  render() {
    return (
      <MainWrapper>
        <ContentWrapper>
          <PrimaryHeading>
            <FormattedMessage
              id="header.titlePrimary"
              defaultMessage="FOR ORDINARY PEOPLE WITH EXTRAORDINARY DREAMS!"
            />
          </PrimaryHeading>
          <SecondaryHeading>
            <FormattedMessage
              id="header.titleSecondary"
              defaultMessage="An innovative crypto-exchange platform with simplified access for everyone."
            />
          </SecondaryHeading>
          <VideoWrapper>
            <VideoDialog />
            <PaperWrapper
              href={this.renderWhitePapers(this.props.lang)}
              target="_blank"
            >
              <PapperTop>
                <FormattedMessage
                  id="header.whitePapper"
                  defaultMessage="White Paper"
                />
              </PapperTop>
              <PapperBottom>
                68 <FormattedMessage id="header.pages" defaultMessage="Pages" />
              </PapperBottom>
            </PaperWrapper>
            <PaperWrapper href={OnePager} target="_blank">
              <PapperTop>
                <FormattedMessage
                  id="header.onePager"
                  defaultMessage="One Pager"
                />
              </PapperTop>
              <PapperBottom>
                2 <FormattedMessage id="header.pages" defaultMessage="Pages" />
              </PapperBottom>
            </PaperWrapper>
          </VideoWrapper>

          <RaitingsWrapper>
            <RaitingContainer
              href="https://icomarks.com/ico/bixtrim"
              target="_blank"
            >
              <RaitingTop>
                <RaitingLogo src={IcoMarkLogo} />
              </RaitingTop>
              <RaitingBottom>
                <RaitingNumber>9.4/10</RaitingNumber>
              </RaitingBottom>
            </RaitingContainer>

            <RaitingContainer
              href="https://icobench.com/ico/bixtrim"
              target="_blank"
            >
              <RaitingTop>
                <RaitingLogo src={IcoBrenchLogo} />
              </RaitingTop>
              <RaitingBottom>
                <RaitingNumber>4.0/5.0</RaitingNumber>
              </RaitingBottom>
            </RaitingContainer>

            <RaitingContainer
              href="https://www.trackico.io/ico/bixtrim/"
              target="_blank"
            >
              <RaitingTop>
                <RaitingLogo src={TrackLogo} />
              </RaitingTop>
              <RaitingBottom>
                <RaitingNumber>5.0/5.0</RaitingNumber>
              </RaitingBottom>
            </RaitingContainer>
          </RaitingsWrapper>

          <Sticky topOffset={100} stickyClassName="fixed-sticky-social">
            <SocialsWrapper>
              <SocialItem
                href="https://www.facebook.com/bixtrim/"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </SocialItem>
              <SocialItem
                href="https://twitter.com/bixtrim_llc"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </SocialItem>
              <SocialItem
                href="https://www.instagram.com/bixtrim/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </SocialItem>
              <SocialItem
                href="https://www.youtube.com/channel/UCVXmlGo6wDMsG_kkYFWZwvQ"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </SocialItem>
              <SocialItem href="https://t.me/bixtrim_ico" target="_blank">
                <i className="fab fa-telegram-plane" />
              </SocialItem>
              <SocialItem
                href="https://bitcointalk.org/index.php?topic=4417058.80"
                target="_blank"
              >
                <i className="fab fa-btc" />
              </SocialItem>
              <SocialItem href="https://medium.com/@bixtrim" target="_blank">
                <i className="fab fa-medium-m" />
              </SocialItem>
              <SocialItem
                href="https://www.reddit.com/user/bixtrim"
                target="_blank"
              >
                <i className="fab fa-reddit-alien" />
              </SocialItem>
              <SocialItem href="https://steemit.com/@bixtrim" target="_blank">
                <i className="far fa-list-alt" />
              </SocialItem>
              <SocialItem
                href="https://www.linkedin.com/company/bixtrim/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </SocialItem>
            </SocialsWrapper>
          </Sticky>
        </ContentWrapper>
        <div style={{ flex: 1, marginTop: '6rem' }}>
          <SalesTimer />
        </div>
      </MainWrapper>
    )
  }
}

function mapStateToProps({ lang }) {
  return { lang }
}
export default connect(mapStateToProps)(HeaderContent)
