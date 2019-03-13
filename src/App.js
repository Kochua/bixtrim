import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import messages from './messages'
import { IntlProvider } from 'react-intl'
import Routes from './Routes'
import ParticlesFixed from './components/Particles/ParticlesFixed'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/global'

class App extends Component {
  render() {
    const { lang } = this.props

    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Fragment>
          <ParticlesFixed />
          <Routes />
        </Fragment>
      </IntlProvider>
    )
  }
}

function mapStateToProps({ lang }) {
  return { lang }
}

export default connect(mapStateToProps)(App)
