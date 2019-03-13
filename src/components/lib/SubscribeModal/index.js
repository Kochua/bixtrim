import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { FormattedMessage } from 'react-intl'
import {
  Btn,
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
        <Btn
          onClick={() => {
            this.handleClickOpen()
          }}
        >
          <FormattedMessage id="global.subscribe" defaultMessage="Subscribe" />
        </Btn>
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
