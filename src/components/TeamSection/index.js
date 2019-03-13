import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import {
  SectionWrapper,
  Container,
  HeaderWrapper,
  PrimaryHeading,
  ContentWrapper,
  ContentItemWrapper,
  TeamInfo,
  TeamName,
  TeamPoisition,
  TeamImg,
  DialogWrapper,
  DialogLeft,
  DialogImg,
  DialogRight,
  DialogPosition,
  DialogName,
  Description
} from './styles'
import { Element } from 'react-scroll'
import { FormattedMessage } from 'react-intl'
import Members from './teamMembers'

class Team extends Component {
  state = {
    open: false,
    choosedMember: {}
  }

  handleClickOpen = choosedMember => {
    this.setState({ open: true, choosedMember })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <Element name="team">
        <SectionWrapper>
          <Container>
            <HeaderWrapper>
              <PrimaryHeading>
                <strong>
                  <FormattedMessage
                    id="team.title-strong"
                    defaultMessage="Bixtrim"
                  />
                </strong>
                <FormattedMessage id="team.title" defaultMessage="Team" />
              </PrimaryHeading>
            </HeaderWrapper>
            <ContentWrapper>
              {Members.map((member, i) => {
                return (
                  <ContentItemWrapper
                    key={i}
                    // onClick={() => this.handleClickOpen(member)}
                  >
                    <TeamImg img={member.img} />
                    <TeamInfo>
                      <TeamName>
                        <FormattedMessage
                          id={member.name.formatedId}
                          defaultMessage={member.name.defaultMsg}
                        />
                      </TeamName>
                      <TeamPoisition>
                        <FormattedMessage
                          id={member.pos.formatedId}
                          defaultMessage={member.pos.defaultMsg}
                        />
                      </TeamPoisition>
                    </TeamInfo>
                  </ContentItemWrapper>
                )
              })}
            </ContentWrapper>
          </Container>
        </SectionWrapper>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogWrapper>
            <DialogLeft>
              <DialogImg src={this.state.choosedMember.img} />
            </DialogLeft>
            <DialogRight>
              <DialogPosition>Position</DialogPosition>
              <DialogName>name</DialogName>
              <Description>description</Description>
            </DialogRight>
          </DialogWrapper>
        </Dialog>
      </Element>
    )
  }
}

export default Team
