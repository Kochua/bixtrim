import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import PlayImg from '../../assets/hero-video-play.png'
import { FormattedMessage } from 'react-intl'

import { VideoContainer, VideoLogo, VideoText } from './styles'

class VideoDialog extends Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <Fragment>
        <VideoContainer onClick={this.handleClickOpen}>
          <VideoLogo img={PlayImg} />
          <VideoText>
            <FormattedMessage id="header.watch" defaultMessage="Watch" />
            <strong style={{ color: '#fff' }}>
              <FormattedMessage id="header.video" defaultMessage="Video" />
            </strong>
          </VideoText>
        </VideoContainer>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <iframe
            title='video'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WamEGkYoETY?autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </Dialog>
      </Fragment>
    )
  }
}

export default VideoDialog
