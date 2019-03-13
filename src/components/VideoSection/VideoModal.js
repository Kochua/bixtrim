import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import {
  BigVideoContainer,
  VideoPlayerIcon
} from './styles'
import BigVideoPlayer from '../../assets/main-video-play-icon.png'

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
    const { bgImg, videoLink } = this.props
    return (
      <Fragment>
        <BigVideoContainer
          img={bgImg}
          onClick={() => {
            this.handleClickOpen()
          }}
        >
          <VideoPlayerIcon>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-35%, -47%)'
              }}
            >
              <img src={BigVideoPlayer} alt="player" />
            </div>
          </VideoPlayerIcon>
        </BigVideoContainer>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <iframe
            title='videos'
            width="560"
            height="315"
            src={videoLink}
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
