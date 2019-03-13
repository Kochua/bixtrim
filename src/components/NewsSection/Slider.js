import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import { NewsWrapper, NewsTop, NewsBottom, Bg } from './styles'
import News from './newsData'

class SliderNews extends Component {
  state = {
    slidetoShow: 3
  }
  componentDidMount() {
    if (window.matchMedia('(max-width: 600px)').matches) {
      this.setState({
        slidetoShow: 1
      })
    } else if (window.matchMedia('(max-width: 900px)').matches) {
      this.setState({
        slidetoShow: 2
      })
    } else {
      this.setState({
        slidetoShow: 3
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
    const { lang } = this.props
    return (
      <div>
        <Slider {...settings}>
          {News[lang].map(({ id, title, img }) => {
            return (
              <NewsWrapper key={id}>
                <NewsTop to={`${lang}/news/${id}`}>
                  <div style={{ width: '100%', height: ' 18.5rem' }}>
                    <img src={img} style={{ width: '100%' }} alt="1" />
                    <Bg />
                  </div>
                </NewsTop>
                <NewsBottom>{title}</NewsBottom>
              </NewsWrapper>
            )
          })}
        </Slider>
      </div>
    )
  }
}
const mapStateToProps = ({ lang }) => {
  return { lang }
}
export default connect(mapStateToProps)(SliderNews)
