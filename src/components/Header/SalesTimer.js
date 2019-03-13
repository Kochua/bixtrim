import React, { Component } from 'react'
import {
  SalesTimerWrapper,
  TimerHeading,
  TimerUnitsContainer,
  Unit,
  ProgressBarOutter,
  ProgressInnver,
  MoneyCollectWrapper,
  MoneyCollect,
  TimerBtn,
  TextBottom
} from './styles'
import { FormattedMessage } from 'react-intl'

const endTime = new Date('October 25, 2018 12:00:0').getTime()

class SalesTimer extends Component {
  state = {
    day: '',
    hour: '',
    min: '',
    sec: ''
  }

  componentDidMount() {
    setInterval(() => {
      var curTime = new Date().getTime()
      var difference = endTime - curTime
      var day = Math.floor(difference / (1000 * 60 * 60 * 24))
      var hour = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      var sec = Math.floor((difference % (1000 * 60)) / 1000)
      this.setState({ day, hour, min, sec })
    })
  }

  render() {
    const { day, hour, min, sec } = this.state
    return (
      <SalesTimerWrapper>
        <TimerHeading>
          <FormattedMessage
            id="header.sales-title"
            defaultMessage="SALES PHASE 3 WILL END IN:"
          />
        </TimerHeading>
        <TimerUnitsContainer>
          <Unit>{day}</Unit>
          <span style={{ fontSize: '1.8rem' }}>
            <FormattedMessage id="header.day" defaultMessage="Days" />
          </span>
        </TimerUnitsContainer>
        <TimerUnitsContainer>
          <Unit>{hour}</Unit> : <Unit>{min}</Unit> : <Unit>{sec}</Unit>
        </TimerUnitsContainer>
        <ProgressBarOutter>
          <ProgressInnver />
        </ProgressBarOutter>
        <MoneyCollectWrapper>
          <MoneyCollect>
            <strong>
              <FormattedMessage id="header.raised" defaultMessage="Raised" />
            </strong>
            : $468,000
          </MoneyCollect>
          <MoneyCollect>$600,000</MoneyCollect>
        </MoneyCollectWrapper>
        <TimerBtn href="https://ico.bixtrim.com/">
          <FormattedMessage id="header.buy-token" defaultMessage="Buy Token" />
        </TimerBtn>
        <TextBottom>
          <i style={{ margin: '0 1rem' }} className="fas fa-info-circle" />
          <FormattedMessage
            id="header.bottom-msg"
            defaultMessage="More than 75% of Private Sale Cap is done"
          />
        </TextBottom>
      </SalesTimerWrapper>
    )
  }
}
export default SalesTimer
