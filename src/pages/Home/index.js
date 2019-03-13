import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import {
  Header,
  InvestSection,
  ProductSection,
  FaqSection,
  IcoSection,
  NewsSection,
  PartnersSection,
  PressSection,
  RoadmapSection,
  RoadshowSection,
  TeamSection,
  TokenSection,
  VideoSection,
  Footer
} from '../../components'

class Home extends Component {
  componentDidMount() {
    const { changeLang_a, history, location } = this.props

    //change domain name for langs
    const lang = location.pathname
    if (lang === '/') {
      changeLang_a('en')
    } else if (
      lang === '/en' ||
      lang === '/ru' ||
      lang === '/ka' ||
      lang === '/fr' ||
      lang === '/de' ||
      lang === '/zh'
    ) {
      // cuting "/" and pass lang
      const cuttedLang = location.pathname.substring(1)
      changeLang_a(cuttedLang)
    } else {
      history.push('/en')
      changeLang_a('en')
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <InvestSection />
        <ProductSection />
        <NewsSection />
        <VideoSection />
        <PressSection />
        <RoadmapSection />
        <TeamSection />
        <IcoSection />
        <TokenSection />
        <RoadshowSection />
        <PartnersSection />
        <FaqSection />
        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps({ lang }) {
  return { lang }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(Home))
