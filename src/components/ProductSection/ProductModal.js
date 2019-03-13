import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { PlayButton, VideoLogo } from './styles'

import PlayImg from '../../assets/hero-video-play.png'

class ProductModal extends Component {
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
    const { url, bg } = this.props
    return (
      <Fragment>
        <div
          style={{
            margin: '4rem auto 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <PlayButton
            onClick={() => {
              this.handleClickOpen()
            }}
            bg={bg}
          >
            <VideoLogo img={PlayImg} />
          </PlayButton>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <iframe
            title="video"
            width="560"
            height="315"
            src={`${url}?autoplay=1`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </Dialog>
      </Fragment>
    )
  }
}

export default ProductModal
