import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { FormattedMessage } from 'react-intl'
import {
  FormContainer,
  SubscribeInput,
  FormBtn,
  Header,
  WrapperModal,
  Form,
  FormGroup,
  Input,
  SubmitBtn
} from './styles'

class SubrcribeModal extends Component {
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
        <FormContainer
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <SubscribeInput placeholder="Email Address" />

          <FormBtn onClick={this.handleClickOpen}>
            <FormattedMessage
              id="global.subscribe"
              deffaultMessage="Subscribe"
            />
          </FormBtn>
        </FormContainer>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <WrapperModal>
            <Header>Subsrcibe</Header>
            <Form>
              <FormGroup>
                <Input placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input placeholder="First Name (Optional)" />
              </FormGroup>
              <FormGroup>
                <Input placeholder="First Name (Optional)" />
              </FormGroup>
              <FormGroup>
                <SubmitBtn type="submit">Subscribe</SubmitBtn>
              </FormGroup>
            </Form>
          </WrapperModal>
        </Dialog>
      </Fragment>
    )
  }
}

export default SubrcribeModal
