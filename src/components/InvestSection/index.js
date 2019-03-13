import React, { Component } from 'react'
import {
  SectionWrapper,
  Container,
  ContentWrapper,
  ContentContainer,
  ImgContainer,
  PrimaryHeading,
  SecondaryHeading,
  TextContainer,
  Text
} from './styles'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import InvestOneImg from '../../assets/invest-hand-1.png'
import InvestTwoImg from '../../assets/invest-hand-cup.png'

class Invest extends Component {
  render() {
    return (
      <Element name="invest">
        <SectionWrapper>
          <Container>
            <ContentWrapper>
              <ContentContainer>
                <ImgContainer img={InvestOneImg} />
              </ContentContainer>
              <ContentContainer>
                <PrimaryHeading>
                  <FormattedMessage
                    id="invest.1-titlePrimary"
                    defaultMessage="Blokchain technology gives us infinite possibilities!"
                  />
                </PrimaryHeading>
                <SecondaryHeading>
                  <FormattedMessage
                    id="invest.1-titleSecondary"
                    defaultMessage="WHY SHOULD YOU INVEST IN BIXTRIM?"
                  />
                </SecondaryHeading>
                <TextContainer>
                  <Text>
                    <FormattedMessage
                      id="invest.1-text-1"
                      defaultMessage="The Bixtrim team has an innovative vision of a future with simplified usage of crypto in every day life and we want our customers to be a part of it."
                    />
                  </Text>
                  <Text>
                    <FormattedMessage
                      id="invest.1-text-2"
                      defaultMessage="The popularity and quick success of cryptocurrencies has made it crucial for infrastructure and functionality to keep up. That is exactly why we found so many obstacles and issues that needed to be solved. Our team of like-minded people rallied in order to make these revolutionary ideas a reality."
                    />
                  </Text>
                </TextContainer>
              </ContentContainer>
            </ContentWrapper>
            <ContentWrapper>
              <ContentContainer order="2">
                <PrimaryHeading>
                  <strong>
                    <FormattedMessage
                      id="invest.2-title-strong"
                      defaultMessage="Value"
                    />
                  </strong>
                  <FormattedMessage
                    id="invest.2-tittle"
                    defaultMessage=" of Tokens"
                  />
                </PrimaryHeading>
                <TextContainer>
                  <Text>
                    <FormattedMessage
                      id="invest.2-text-1"
                      defaultMessage="A token refers to a digital asset that is sold for fiat currency (USD, EUR) or crypto currency of liquid value
                  (Bitcoin, Ethereum, etc.). Tokens can have various functions,
                  for example, they can give access to services of the company."
                    />
                  </Text>
                  <Text>
                    <FormattedMessage
                      id="invest.2-text-2"
                      defaultMessage="Bixtrim tokens can save you up to 60% on transaction fees on other exchange markets. In this case, the tokens of Bixtrim
                    have the cost of $1 (not including various discounts during
                    the ICO period) and can have the value of the money you save
                    on transaction fees, which makes it's value significantly
                    higher than the cost."
                    />
                  </Text>
                </TextContainer>
              </ContentContainer>
              <ContentContainer>
                <ImgContainer img={InvestTwoImg} />
              </ContentContainer>
            </ContentWrapper>
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Invest
