import React, { Component } from 'react'
import {
  FooterWrapper,
  SubscribeWrapper,
  SubscribeLeft,
  SubscribeTitle,
  Text,
  SubscribeRight,
  Container,
  FooterMenuWrapper,
  List,
  ListTitle,
  ListItem,
  FooterBottom,
  CopyrightText,
  IconContainer
} from './styles'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import Subscribe from './Subscribe'
class Footer extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <Element name="footer">
        <FooterWrapper>
          <SubscribeWrapper>
            <SubscribeLeft>
              <SubscribeTitle>
                <FormattedMessage
                  id="global.subscribe"
                  deffaultMessage="Subscribe"
                />
              </SubscribeTitle>
              <Text>
                <FormattedMessage
                  id="footer.dont-miss"
                  deffaultMessage="Don't miss Our latest News"
                />
              </Text>
            </SubscribeLeft>
            <SubscribeRight>
              <Subscribe />
            </SubscribeRight>
          </SubscribeWrapper>
          <Container>
            <FooterMenuWrapper>
              <List>
                <ListTitle>
                  <FormattedMessage
                    id="footer.nav-title"
                    deffaultMessage="Navigation"
                  />
                </ListTitle>
                <ListItem>
                  <FormattedMessage
                    id="footer.nav-1"
                    deffaultMessage="Landing Page"
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="footer.nav-2"
                    deffaultMessage="White Paper"
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="footer.nav-3"
                    deffaultMessage="Contact Us"
                  />
                </ListItem>
              </List>
              <List>
                <ListTitle>
                  <FormattedMessage
                    id="footer.info-title"
                    deffaultMessage="Legal Info"
                  />
                </ListTitle>
                <ListItem>
                  <FormattedMessage
                    id="footer.info-1"
                    deffaultMessage="Privacy Policy"
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="footer.info-2"
                    deffaultMessage="Terms of Use"
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="footer.info-3"
                    deffaultMessage="KYC/AML Policy"
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="footer.info-4"
                    deffaultMessage="Token Sale Agreement"
                  />
                </ListItem>
              </List>
              <List>
                <ListTitle>
                  <FormattedMessage
                    id="footer.social"
                    deffaultMessage="Social"
                  />
                </ListTitle>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <IconContainer
                    href="https://www.facebook.com/bixtrim/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </IconContainer>
                  <IconContainer
                    href="https://twitter.com/bixtrim_llc"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </IconContainer>
                  <IconContainer
                    href="https://www.instagram.com/bixtrim/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </IconContainer>
                  <IconContainer
                    href="https://www.youtube.com/channel/UCVXmlGo6wDMsG_kkYFWZwvQ"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </IconContainer>
                  <IconContainer
                    href="https://t.me/bixtrim_ico"
                    target="_blank"
                  >
                    <i className="fab fa-telegram-plane" />
                  </IconContainer>
                  <IconContainer
                    href="https://medium.com/@bixtrim"
                    target="_blank"
                  >
                    <i className="fab fa-medium-m" />
                  </IconContainer>
                  <IconContainer
                    href="https://www.reddit.com/user/bixtrim"
                    target="_blank"
                  >
                    <i className="fab fa-reddit-alien" />
                  </IconContainer>

                  <IconContainer
                    href="https://steemit.com/@bixtrim"
                    target="_blank"
                  >
                    <i className="far fa-list-alt" />
                  </IconContainer>
                  <IconContainer
                    href="https://www.linkedin.com/company/bixtrim/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </IconContainer>
                </div>
              </List>
              {/* <div style={{ alignSelf: 'center' }}>
                <Btn>
                  <FormattedMessage
                    id="footer.watch"
                    deffaultMessage="Watch Video"
                  />
                </Btn>
              </div> */}
            </FooterMenuWrapper>
          </Container>
          <FooterBottom>
            <CopyrightText>
              <FormattedMessage
                id="footer.right"
                deffaultMessage="All Right Reserved (C) 2018"
              />
            </CopyrightText>
            <CopyrightText>
              <FormattedMessage
                id="footer.bixtrim"
                deffaultMessage="&quot;BIXTRIM&quot; LLC"
              />
            </CopyrightText>
          </FooterBottom>
        </FooterWrapper>
      </Element>
    )
  }
}

export default Footer
