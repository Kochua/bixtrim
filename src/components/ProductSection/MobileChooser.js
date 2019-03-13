import React, { Component } from 'react'
import { MobileProductChooser, MobileProductItem } from './styles'

class MobileChooser extends Component {
  state = {
    active: 1
  }
  render() {
    const { mobileSwitcher } = this.props
    return (
      <MobileProductChooser>
        <MobileProductItem
          onClick={() => {
            mobileSwitcher(1); this.setState({ active: 1 })
          }}
          bg={
            this.state.active === 1 &&
            '0deg, rgb(234,145,137) 0%, rgb(219,88,158) 100%'
          }
        >
          Crypto Pawn Shop
        </MobileProductItem>
        <MobileProductItem
          onClick={() => {
            mobileSwitcher(2); this.setState({ active: 2 })
          }}
          bg={
            this.state.active === 2 &&
            '0deg, rgb(131,194,242) 0%, rgb(99,72,207) 100%'
          }
        >
          Futures Contracts
        </MobileProductItem>
        <MobileProductItem
          onClick={() => {
            mobileSwitcher(3); this.setState({ active: 3 })
          }}
          bg={
            this.state.active === 3 &&
            '0deg, rgb(0,241,164) 0%, rgb(56,103,214) 100%'
          }
        >
          Debit Card
        </MobileProductItem>
        <MobileProductItem
          onClick={() => {
            mobileSwitcher(4); this.setState({ active: 4 })
          }}
          bg={
            this.state.active === 4 &&
            '0deg, rgb(246,211,101) 0%, rgb(253,160,133) 100%'
          }
        >
          Escrow Future
        </MobileProductItem>
      </MobileProductChooser>
    )
  }
}

export default MobileChooser
