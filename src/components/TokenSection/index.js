import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import {
  SectionWrapper,
  HeadingWrapper,
  Heading,
  Line,
  Text,
  Container,
  LeftSide,
  TokenImg,
  ContentTitle,
  MethodsWrapper,
  MethodTitle,
  Method,
  CapsContainer,
  CapsItem,
  CapsTop,
  CapsBot,
  InfoList,
  InfoItem
} from './styles'
import chart_1_en from '../../assets/charts/token-en.png'
import chart_2_en from '../../assets/charts/fund-4-en.png'
import chart_1_ka from '../../assets/charts/token-ka.png'
import chart_2_ka from '../../assets/charts/fund-4-ka.png'
import chart_1_ru from '../../assets/charts/token-ru.png'
import chart_2_ru from '../../assets/charts/fund-4-ru.png'

import crypto_1 from '../../assets/pay-icon-dollar.png'
import crypto_2 from '../../assets/pay-icon-btc.png'
import crypto_3 from '../../assets/pay-icon-eth.png'
import crypto_4 from '../../assets/pay-icon-ltc.png'

const Charts = {
  en: {
    chart_1: chart_1_en,
    chart_2: chart_2_en
  },
  ka: {
    chart_1: chart_1_ka,
    chart_2: chart_2_ka
  },
  ru: {
    chart_1: chart_1_ru,
    chart_2: chart_2_ru
  },
  fr: {
    chart_1: chart_1_en,
    chart_2: chart_2_en
  },
  de: {
    chart_1: chart_1_en,
    chart_2: chart_2_en
  },
  zh: {
    chart_1: chart_1_en,
    chart_2: chart_2_en
  }
}

class Token extends Component {
  render() {
    const { lang } = this.props
    return (
      <Element name="tokens">
        <SectionWrapper>
          <HeadingWrapper>
            <Heading>
              <FormattedMessage
                id="token.title"
                defaultMessage="Token Distribution"
              />
            </Heading>
            <Line />
            <Text>
              <FormattedMessage
                id="token.title-secondary"
                defaultMessage="Total emission volume is 72 000 000 tokens, which are divided into
              several parts"
              />
            </Text>
          </HeadingWrapper>
          <Container>
            <LeftSide order="2">
              <TokenImg
                src={Charts[lang].chart_1}
                alt="img"
                style={{ marginBottom: '10rem' }}
              />
              <ContentTitle>Ethereum ERC20</ContentTitle>
              <MethodsWrapper>
                <MethodTitle>
                  <FormattedMessage
                    id="token.payment-1"
                    defaultMessage="Purchase"
                  />
                  <br />
                  <FormattedMessage
                    id="token.payment-2"
                    defaultMessage="methods accepted"
                  />
                </MethodTitle>
                <Method src={crypto_1} alt="1" />
                <Method src={crypto_2} alt="2" />
                <Method src={crypto_3} alt="3" />
                <Method src={crypto_4} alt="4" />
              </MethodsWrapper>
              <CapsContainer>
                <CapsItem>
                  <CapsTop>
                    <FormattedMessage
                      id="token.cap-1"
                      defaultMessage="Hard cap"
                    />
                  </CapsTop>
                  <CapsBot>51,000,000 USD</CapsBot>
                </CapsItem>
                <CapsItem>
                  <CapsTop>
                    <FormattedMessage
                      id="token.cap-2"
                      defaultMessage="Soft cap"
                    />
                  </CapsTop>
                  <CapsBot>6,000,000 USD</CapsBot>
                </CapsItem>
                <CapsItem>
                  <CapsTop>
                    <FormattedMessage
                      id="token.cap-3"
                      defaultMessage="Cost of 1 BXM Token"
                    />
                  </CapsTop>
                  <CapsBot>0.40 - 1.00 USD</CapsBot>
                </CapsItem>
              </CapsContainer>
              <InfoList>
                <InfoItem>
                  <FormattedMessage
                    id="token.1-1"
                    defaultMessage="New Token emissions"
                  />
                  :
                  <strong style={{ color: '#fff' }}>
                    <FormattedMessage
                      id="token.1-2"
                      defaultMessage="unavailable"
                    />
                  </strong>
                </InfoItem>
                <InfoItem>
                  <FormattedMessage
                    id="token.2-1"
                    defaultMessage="Bonus system"
                  />
                  :
                  <strong style={{ color: '#fff' }}>
                    <FormattedMessage id="token.2-2" defaultMessage="YES" />
                  </strong>
                </InfoItem>
                <InfoItem>
                  <FormattedMessage
                    id="token.3-1"
                    defaultMessage="Presale or Private Sale"
                  />
                  :
                  <strong style={{ color: '#fff' }}>
                    <FormattedMessage id="token.3-2" defaultMessage="YES" />
                  </strong>
                </InfoItem>
                <InfoItem>
                  <FormattedMessage
                    id="token.4-1"
                    defaultMessage=" Know Your Customer (KYC)"
                  />
                  :
                  <strong style={{ color: '#fff' }}>
                    <FormattedMessage id="token.4-2" defaultMessage="YES" />
                  </strong>
                </InfoItem>
                <InfoItem>
                  <FormattedMessage
                    id="token.5-1"
                    defaultMessage="Min/Max Personal Cap"
                  />
                  :
                  <strong style={{ color: '#fff' }}>
                    <FormattedMessage
                      id="token.5-2"
                      defaultMessage="0.01 ETH (or equivalent) / no limit"
                    />
                  </strong>
                </InfoItem>
                <InfoItem>
                  <FormattedMessage id="token.6-1" defaultMessage="Whitelist" />
                  :
                  <strong style={{ color: '#fff' }}>
                    <FormattedMessage id="token.6-2" defaultMessage="YES" />
                  </strong>
                </InfoItem>
              </InfoList>
            </LeftSide>
            <LeftSide order="1" mb>
              <TokenImg src={Charts[lang].chart_2} alt="img" />
            </LeftSide>
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

function mapStateToProps({ lang }) {
  return { lang }
}

export default connect(mapStateToProps)(Token)
