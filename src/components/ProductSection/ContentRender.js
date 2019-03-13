import React, { Component } from 'react'
import {
  ContentContainer,
  ContentItem,
  SecondaryHeading,
  ContentText
} from './styles'
import ProductModal from './ProductModal'
import bg_1 from '../../assets/products/1.png'
import bg_2 from '../../assets/products/2.png'

import { FormattedMessage } from 'react-intl'

class ContentRender extends Component {
  renderContent() {
    const { tabNum } = this.props
    switch (tabNum) {
      case 1:
        return (
          <ContentItem>
            <SecondaryHeading>
              <FormattedMessage
                id="product.crypto-title"
                defaultMessage="Crypto Pawn Shop"
              />
            </SecondaryHeading>
            <ContentText>
              <FormattedMessage
                id="product.crypto-text"
                defaultMessage="Bixtrim will develop a crypto pawn shop where coin owners can pawn
                them for a period of time and get them back after paying off the
                commitment. This possibility gives customers an opportunity to
                keep coins, as well as get the needed cash for a short-term and
                profit in a long term. Imagine a customer that has one coin which
                is worth $ 10.0K today. They need extra appliances to work out the
                additional cryptocurrency, so they decide to pawn the coin for 80%
                of its price, i.e. $8.0K. They use cash to expand mining, earn
                money and after a month pay off the pawn for $8.4K. By this time,
                the price of coin has risen to $20.0K. If they exchange the coin
                into cash they will get $9.6K profit from the transaction. Please
                note, that actual rates may vary."
              />
            </ContentText>
            <ProductModal
              url="https://www.youtube.com/embed/aZ7SzWcR2f8"
              bg={bg_2}
            />
          </ContentItem>
        )
      case 2:
        return (
          <ContentItem>
            <SecondaryHeading>
              <FormattedMessage
                id="product.futures-title"
                defaultMessage="Futures Contracts"
              />
            </SecondaryHeading>
            <ContentText>
              <FormattedMessage
                id="product.futures-text"
                defaultMessage="We will develop an exclusive feature - futures contracts on Bixtrim platform supporting pre-defined date of transactions.
                Every user of platform will be able to use this feature and
                trade/play with ease. All the coins traded on Bixtrim platform
                will have futures support. While buyers/sellers are anonymous and
                the agreement between them will not be legally binding Bixtrim
                platform will serve as a guarantee and freeze some amounts of
                money for both parties. Imagine, a coin with current price of
                $1000. Customer X assumes that the price of coin will increase in
                a month from $1000 to $1200, while customer Y thinks it will
                decrease to $800. They agree to make transaction on predetermined
                date, after a month and Bixtrim platform freezes guaranteed
                amounts from both parties. On agreed date, the winner party will
                get the profit and the loser will pay off all the liabilities."
              />
            </ContentText>
            <ProductModal
              url="https://www.youtube.com/embed/aZ7SzWcR2f8"
              bg={bg_2}
            />
          </ContentItem>
        )
      case 3:
        return (
          <ContentItem>
            <SecondaryHeading>
              <FormattedMessage
                id="product.escrow-title"
                defaultMessage="Escrow Future"
              />
            </SecondaryHeading>
            <ContentText>
              <FormattedMessage
                id="product.escrow-text"
                defaultMessage="Issuing cryptocurrency supporting exclusive and innovative Escrow
                feature. The coin issued by Bixtrim will have the option where the
                third party, independent predetermined or randomly chosen
                principal, will ensure the transaction. While the transactions are
                made via Bitxrim coin, system itself will guarantee the protection
                of deal - principal will not be able to make any other transaction
                to coins – they should make obligatory transfer to seller or buyer
                after a period of time. This will be unprecedented service - a new
                word in crypto market. For example, a customer buys a vehicle on a
                car auction abroad. Before they receive the car, they are not sure
                whether or not the car will be delivered or whether it will be in
                condition they saw in pictures. With Bixtrim Escrow feature, the
                principal will be responsible for checking the car before it
                arrives and decide whether it is in a satisfactory state."
              />
            </ContentText>
            <ProductModal
              url="https://www.youtube.com/embed/XkZOXvjDfMI"
              bg={bg_1}
            />
          </ContentItem>
        )
      case 4:
        return (
          <ContentItem>
            <SecondaryHeading>
              <FormattedMessage
                id="product.debit-title"
                defaultMessage="Debit Card"
              />
            </SecondaryHeading>
            <ContentText>
              <FormattedMessage
                id="product.debit-text"
                defaultMessage="We will issue a revolutionary plastic card, linked directly to
                Bixtrim coin and other cryptocurrencies. The card will be
                serviceable in online shops, ATMs, PoS terminals and have a high
                daily limit. Owners of plastic cards will be able to do shopping
                or make transactions anytime, anywhere. Another benefit of owning
                the plastic card will be the following - coins will be directly
                converted to cash at current price in real time, real value
                without any transactions and exchanges needed. For example, a
                customer has 10 coins with current sales price of $100 each. If
                they decide to cash out coins right away, they should transfer it
                from their wallet and will get $1000 on bank account. If next day
                the price of the coin rises to $120, they had lost the potential
                profit. With Bixtrim plastic card this will not happen and card
                owner will have the amount equal to coin price at the moment,
                which is $1200."
              />
            </ContentText>
            <ProductModal
              url="https://www.youtube.com/embed/XkZOXvjDfMI"
              bg={bg_1}
            />
          </ContentItem>
        )

      default:
    }
  }
  render() {
    return <ContentContainer>{this.renderContent()}</ContentContainer>
  }
}

export default ContentRender
