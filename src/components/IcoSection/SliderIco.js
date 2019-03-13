import React, { Component } from 'react'
import Slider from 'react-slick'
import { SliderItem } from './styles'
import ico_1 from '../../assets/ico/coinlist.jpg'
import ico_2 from '../../assets/ico/cryptonext.jpg'
import ico_3 from '../../assets/ico/findico.jpg'
import ico_4 from '../../assets/ico/foxico.jpg'
import ico_5 from '../../assets/ico/fundico.jpg'
import ico_6 from '../../assets/ico/icoalert.jpg'
import ico_7 from '../../assets/ico/icobazaar.png'
import ico_8 from '../../assets/ico/icobench.jpg'
import ico_9 from '../../assets/ico/icobuffer.jpg'
import ico_10 from '../../assets/ico/icocreed.jpg'
import ico_11 from '../../assets/ico/icoholder.jpg'
import ico_12 from '../../assets/ico/icomark.jpg'
import ico_13 from '../../assets/ico/icopointer.jpg'
import ico_14 from '../../assets/ico/icostock.jpg'
import ico_15 from '../../assets/ico/icovote.png'
import ico_16 from '../../assets/ico/initial.jpg'
import ico_17 from '../../assets/ico/investfuture.jpg'
import ico_18 from '../../assets/ico/neironix.jpg'
import ico_19 from '../../assets/ico/trackico.jpg'

const Icos = [
  { img: ico_1, href: 'http://forbes.ge/news/4553/Vision-Of-The-Future' },
  { img: ico_2, href: 'https://cryptonext.com/ico/bixtrim' },
  { img: ico_3, href: 'http://forbes.ge/news/4553/Vision-Of-The-Future' },
  { img: ico_4, href: 'https://foxico.io/project/bixtrim' },
  { img: ico_5, href: 'https://findico.io/ico/bixtrim/rating' },
  { img: ico_6, href: 'https://www.icoalert.com/?q=bixtrim' },
  { img: ico_7, href: 'https://icobazaar.com/v2/bixtrim#ico-profile' },
  { img: ico_8, href: 'https://icobench.com/ico/bixtrim' },
  { img: ico_9, href: 'https://icobuffer.com/projects/bixtrim' },
  {
    img: ico_10,
    href: 'https://www.icocreed.com/airdrop-bixtrim-airdrop-coin-419.html'
  },
  { img: ico_11, href: 'https://icoholder.com/en/bixtrim-21717' },
  { img: ico_12, href: 'https://icomarks.com/ico/bixtrim' },
  { img: ico_13, href: 'https://icopointer.com/bixtrim' },
  { img: ico_14, href: 'https://icostock24.com/projects/bixtrim/' },
  { img: ico_15, href: 'https://icovote.me/ico/19-Bixtrim' },
  { img: ico_16, href: 'https://www.initialcoinlist.com/ico/bxm/' },
  { img: ico_17, href: 'https://investfuture.ru/ico/rating/bixtrim' },
  { img: ico_18, href: 'https://neironix.io/ru/ico-rating/bixtrim/team' },
  { img: ico_19, href: 'https://www.trackico.io/ico/bixtrim/' }
]

export default class SliderIco extends Component {
  state = {
    slidetoShow: 5
  }

  componentDidMount() {
    if (window.matchMedia('(max-width: 600px)').matches) {
      this.setState({
        slidetoShow: 2
      })
    } else if (window.matchMedia('(max-width: 900px)').matches) {
      this.setState({
        slidetoShow: 4
      })
    } else {
      this.setState({
        slidetoShow: 5
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
      <div style={{ margin: '3rem 1rem' }}>
        <Slider {...settings}>
          {Icos.map((ico, i) => {
            return (
              <div key={i}>
                <SliderItem href={ico.href}>
                  <img src={ico.img} alt="1" style={{ width: '100%' }} />
                </SliderItem>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
