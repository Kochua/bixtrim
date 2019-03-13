import React, { Component } from 'react'
import {
  SectionWrapper,
  Container,
  ProductTextWrapper,
  PrimaryHeading,
  Line,
  ProductChooserContainer,
  ProductChooserItem,
  ProductImg,
  ProductTitle,
  ProductInner
} from './styles'
import { FormattedMessage } from 'react-intl'
import Content from './ContentRender'
import { Element } from 'react-scroll'
import MobileChooser from './MobileChooser'

class ProductSection extends Component {
  state = {
    tab: 1
  }

  mobileSwitcher = tab => {
    this.setState({ tab })
  }

  render() {
    return (
      <Element name="product">
        <SectionWrapper>
          <Container>
            <ProductTextWrapper>
              <PrimaryHeading>
                <FormattedMessage
                  id="product.title"
                  defaultMessage="Our Products"
                />
              </PrimaryHeading>
              <Line />
              <MobileChooser mobileSwitcher={this.mobileSwitcher} />
              <Content tabNum={this.state.tab} />
            </ProductTextWrapper>
            <ProductChooserContainer>
              <ProductChooserItem
                y="-125"
                bgImage="0deg, rgb(234,145,137) 0%, rgb(219,88,158) 100%"
                onClick={() => {
                  this.setState({ tab: 1 })
                }}
              >
                <ProductInner>
                  <ProductImg nums="0 0" />
                  <ProductTitle>
                    {' '}
                    <FormattedMessage
                      id="product.crypto-title"
                      defaultMessage="Crypto Pawn Shop"
                    />
                  </ProductTitle>
                </ProductInner>
              </ProductChooserItem>
              <ProductChooserItem
                x="25"
                bgImage="0deg, rgb(246,211,101) 0%, rgb(253,160,133) 100%"
                onClick={() => {
                  this.setState({ tab: 2 })
                }}
              >
                <ProductInner>
                  <ProductImg nums="244px 0" />
                  <ProductTitle>
                    <FormattedMessage
                      id="product.futures-title"
                      defaultMessage="Futures Contracts"
                    />
                  </ProductTitle>
                </ProductInner>
              </ProductChooserItem>

              <ProductChooserItem
                x="-125"
                bgImage="0deg, rgb(131,194,242) 0%, rgb(99,72,207) 100%"
                onClick={() => {
                  this.setState({ tab: 3 })
                }}
              >
                <ProductInner>
                  <ProductImg nums="-320px 0" />
                  <ProductTitle>
                    <FormattedMessage
                      id="product.escrow-title"
                      defaultMessage="Escrow Future"
                    />
                  </ProductTitle>
                </ProductInner>
              </ProductChooserItem>
              <ProductChooserItem
                y="25"
                bgImage="0deg, rgb(0,241,164) 0%, rgb(56,103,214) 100%"
                onClick={() => {
                  this.setState({ tab: 4 })
                }}
              >
                <ProductInner>
                  <ProductImg nums="-128px 0" />
                  <ProductTitle>
                    <FormattedMessage
                      id="product.debit-title"
                      defaultMessage="Debit Card"
                    />
                  </ProductTitle>
                </ProductInner>
              </ProductChooserItem>
            </ProductChooserContainer>
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default ProductSection
