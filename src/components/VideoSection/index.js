import React, { Component } from 'react'
import {
  SectionWrapper,
  Container,
  HeadingWrapper,
  Heading,
  ContentWrapper,
  LeftSide,
  VideosContainer,
  RightSide
} from './styles'
import { FormattedMessage } from 'react-intl'
import { Element } from 'react-scroll'
import VideoModal from './VideoModal'

import img_1 from '../../assets/media/video/screens/1.png'
import img_2 from '../../assets/media/video/screens/2.png'
import img_3 from '../../assets/media/video/screens/3.png'
import img_4 from '../../assets/media/video/screens/4.png'
import img_5 from '../../assets/media/video/screens/5.png'
import img_6 from '../../assets/media/video/screens/6.png'
import PlayImg from '../../assets/video-play-icon.png'

class Video extends Component {
  state = {
    img: img_1,
    videoLink: ''
  }

  render() {
    return (
      <Element name="video">
        <SectionWrapper>
          <Container>
            <HeadingWrapper>
              <Heading>
                <strong>
                  <FormattedMessage
                    id="video.title-strong"
                    defaultMessage="Video"
                  />
                </strong>{' '}
                <FormattedMessage id="video.title" defaultMessage="Gallery" />
              </Heading>
            </HeadingWrapper>
            <ContentWrapper>
              <LeftSide>
                <VideosContainer
                  img={img_1}
                  onClick={() => {
                    this.setState({
                      img: img_1,
                      videoLink:
                        'https://www.youtube.com/embed/CmC6-XKzieg?autoplay=1'
                    })
                  }}
                >
                  <span style={{ zIndex: 10 }}>
                    <FormattedMessage
                      id="video.adv"
                      defaultMessage="Advertisement"
                    />
                  </span>
                  <div
                    style={{
                      zIndex: 10,
                      alignSelf: 'flex-end',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '1.3rem'
                    }}
                  >
                    <img
                      src={PlayImg}
                      alt="watch"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <FormattedMessage id="video.watch" defaultMessage="Watch" />
                  </div>
                </VideosContainer>
                <VideosContainer
                  img={img_2}
                  onClick={() => {
                    this.setState({
                      img: img_2,
                      videoLink:
                        'https://www.youtube.com/embed/jPiOkZfgrPU?autoplay=1'
                    })
                  }}
                >
                  <span style={{ zIndex: 10 }}>
                    <FormattedMessage
                      id="video.adv"
                      defaultMessage="Advertisment"
                    />
                  </span>
                  <div
                    style={{
                      zIndex: 10,
                      alignSelf: 'flex-end',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={PlayImg}
                      alt="watch"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <FormattedMessage id="video.watch" defaultMessage="Watch" />
                  </div>
                </VideosContainer>
                <VideosContainer
                  img={img_3}
                  onClick={() => {
                    this.setState({
                      img: img_3,
                      videoLink:
                        'https://www.youtube.com/embed/ntEx4P1S_aI?autoplay=1'
                    })
                  }}
                >
                  <span style={{ zIndex: 10 }}>
                    <FormattedMessage
                      id="video.adv"
                      defaultMessage="Advertisment"
                    />
                  </span>
                  <div
                    style={{
                      zIndex: 10,
                      alignSelf: 'flex-end',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={PlayImg}
                      alt="watch"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <FormattedMessage id="video.watch" defaultMessage="Watch" />
                  </div>
                </VideosContainer>
                <VideosContainer
                  img={img_4}
                  onClick={() => {
                    this.setState({
                      img: img_4,
                      videoLink:
                        'https://www.youtube.com/embed/YaX4zab6-0c?autoplay=1'
                    })
                  }}
                >
                  <span style={{ zIndex: 10 }}>
                    <FormattedMessage
                      id="video.adv"
                      defaultMessage="Advertisment"
                    />
                  </span>
                  <div
                    style={{
                      zIndex: 10,
                      alignSelf: 'flex-end',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={PlayImg}
                      alt="watch"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <FormattedMessage id="video.watch" defaultMessage="Watch" />
                  </div>
                </VideosContainer>
                <VideosContainer
                  img={img_5}
                  onClick={() => {
                    this.setState({
                      img: img_5,
                      videoLink:
                        'https://www.youtube.com/embed/VSecUcb6lek?autoplay=1'
                    })
                  }}
                >
                  <span style={{ zIndex: 10 }}>
                    <FormattedMessage
                      id="video.adv"
                      defaultMessage="Advertisment"
                    />
                  </span>
                  <div
                    style={{
                      zIndex: 10,
                      alignSelf: 'flex-end',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={PlayImg}
                      alt="watch"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <FormattedMessage id="video.watch" defaultMessage="Watch" />
                  </div>
                </VideosContainer>
                <VideosContainer
                  img={img_6}
                  onClick={() => {
                    this.setState({
                      img: img_6,
                      videoLink:
                        'https://www.youtube.com/embed/pcOpoqZqVV0?autoplay=1'
                    })
                  }}
                >
                  <span style={{ zIndex: 10 }}>
                    <FormattedMessage
                      id="video.adv"
                      defaultMessage="Advertisment"
                    />
                  </span>
                  <div
                    style={{
                      zIndex: 10,
                      alignSelf: 'flex-end',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={PlayImg}
                      alt="watch"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <FormattedMessage id="video.watch" defaultMessage="Watch" />
                  </div>
                </VideosContainer>
              </LeftSide>
              <RightSide>
                <VideoModal
                  bgImg={this.state.img}
                  videoLink={this.state.videoLink}
                />
              </RightSide>
            </ContentWrapper>
          </Container>
        </SectionWrapper>
      </Element>
    )
  }
}

export default Video
