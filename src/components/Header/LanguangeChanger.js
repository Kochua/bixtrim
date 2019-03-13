import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { ExpandMore, ExpandLess } from '@material-ui/icons'
import * as actions from '../../actions'
import {
  FlagContainer,
  InsideFlagList,
  FlagsWrapper,
  InsideFlag
} from './styles'

const Langs = [
  { lang: 'en', body: { name: 'English', flag: 'us' } },
  { lang: 'ru', body: { name: 'Русский', flag: 'ru' } },
  { lang: 'ka', body: { name: 'ქართული', flag: 'ge' } },
  { lang: 'fr', body: { name: 'Le français', flag: 'fr' } },
  { lang: 'de', body: { name: 'Deutsche', flag: 'de' } },
  { lang: 'zh', body: { name: '中國', flag: 'cn' } }
]

class LanguangeChanger extends Component {
  state = {
    on: 0,
    lang: 'en'
  }

  renderMainLang() {
    return Langs.map((item, i) => {
      if (item.lang === this.props.lang) {
        return (
          <FlagContainer
            key={i}
            onClick={() => {
              this.setState({ lang: item.lang })
            }}
          >
            <ReactCountryFlag code={item.body.flag} svg />
            <span style={{ marginRight: '1rem', marginLeft: '0.5rem' }}>
              {item.body.name}
            </span>

            {this.state.on ? (
              <ExpandLess style={{ fontSize: 18 }} />
            ) : (
              <ExpandMore style={{ fontSize: 18 }} />
            )}
          </FlagContainer>
        )
      }
      return ''
    })
  }

  renderNotChosedLangs() {
    const { changeLang_a } = this.props

    return (
      <InsideFlagList>
        {Langs.map((item, i) => {
          if (item.lang === this.props.lang) {
            return ''
          }
          return (
            <InsideFlag
              key={i}
              onClick={() => {
                this.props.history.push(`/${item.lang}`)
                changeLang_a(item.lang)
              }}
            >
              <ReactCountryFlag code={item.body.flag} svg />
              <span style={{ marginLeft: '0.5rem' }}>{item.body.name}</span>
            </InsideFlag>
          )
        })}
      </InsideFlagList>
    )
  }

  render() {
    return (
      <FlagsWrapper>
        {this.renderMainLang()}
        {this.renderNotChosedLangs()}
      </FlagsWrapper>
    )
  }
}

function mapStateToProps({ lang }) {
  return { lang }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(LanguangeChanger))
