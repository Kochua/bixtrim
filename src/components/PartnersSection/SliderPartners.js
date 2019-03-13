import React, { Component } from 'react'
import Slider from 'react-slick'
import { SliderItem, PartnerName, Line } from './styles.js'
import { FormattedMessage } from 'react-intl'

import partners_1 from '../../assets/partners/bitcoin-embassy.png'
import partners_2 from '../../assets/partners/blockchain-conf.png'
import partners_3 from '../../assets/partners/blockchain-georgia.png'
import partners_4 from '../../assets/partners/blockchainacademy.png'
import partners_5 from '../../assets/partners/carrot-spy.png'
import partners_6 from '../../assets/partners/cryptoacademy.jpg'
import partners_7 from '../../assets/partners/forbes.png'
import partners_8 from '../../assets/partners/gingers.png'
import partners_9 from '../../assets/partners/ledorub.png'
import partners_10 from '../../assets/partners/next-block.png'
import partners_11 from '../../assets/partners/smile-expo.png'

const Partners = [
  {
    name: (
      <FormattedMessage
        id="partners.bitcoin"
        defaultMessage="BITCOIN EMBASSY GEORGIA"
      />
    ),
    img: partners_1
  },
  {
    name: <FormattedMessage id="partners.france" defaultMessage="BBC FRANCE" />,
    img: partners_2
  },
  {
    name: (
      <FormattedMessage id="partners.georgia" defaultMessage="BBC GEORGIA" />
    ),
    img: partners_3
  },
  {
    name: (
      <FormattedMessage
        id="partners.block"
        defaultMessage="BLOCKCHAIN ACADEMY"
      />
    ),
    img: partners_4
  },
  {
    name: <FormattedMessage id="partners.carrot" defaultMessage="CARROT SPY" />,
    img: partners_5
  },
  {
    name: (
      <FormattedMessage
        id="partners.cryptoacademy"
        defaultMessage="CRYPTOACADEMY"
      />
    ),
    img: partners_6
  },
  {
    name: <FormattedMessage id="partners.forbes" defaultMessage="FORBES" />,
    img: partners_7
  },
  {
    name: <FormattedMessage id="partners.gingers" defaultMessage="GINGERS" />,
    img: partners_8
  },
  {
    name: <FormattedMessage id="partners.ledorub" defaultMessage="LEDORUB" />,
    img: partners_9
  },
  {
    name: (
      <FormattedMessage
        id="partners.next"
        defaultMessage="NEXT BLOCK CONFERENCE"
      />
    ),
    img: partners_10
  },
  {
    name: <FormattedMessage id="partners.smile" defaultMessage="SMILE EXPO" />,
    img: partners_11
  }
]

export default class SliderIco extends Component {
  state = {
    slidetoShow: 6
  }

  componentDidMount() {
    if (window.matchMedia('(max-width: 600px)').matches) {
      this.setState({
        slidetoShow: 2
      })
    } else if (window.matchMedia('(max-width: 900px)').matches) {
      this.setState({
        slidetoShow: 5
      })
    } else {
      this.setState({
        slidetoShow: 6
      })
    }
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.slidetoShow,
      slidesToScroll: 1
    }
    return (
      <div style={{ margin: '3rem 0' }}>
        <Slider {...settings}>
          {Partners.map(({ name, img }) => {
            return (
              <div key={name}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '2rem'
                  }}
                >
                  <SliderItem href="#">
                    <img src={img} alt="1" style={{ width: '100%' }} />
                  </SliderItem>
                  <PartnerName>{name}</PartnerName>
                  <Line />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
