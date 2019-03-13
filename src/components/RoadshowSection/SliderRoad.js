import React, { Component } from 'react'
import Slider from 'react-slick'
import {
  SliderElementWrapper,
  SliderCalendar,
  SiderContentWrapper,
  SliderTitle,
  Text,
  BotContainer,
  EventBtn,
  AddressContainer,
  SliderBtnsWrapper,
  SliderBtn
} from './styles'

const MeetData = [
  {
    sDate: '27 Feb , 2018',
    d: '27',
    m: 'February',
    y: '2018',
    title: 'Blockchain and Bitcon Conference Belarus',
    text:
      'The first large-scale conference in Belarus dedicated to decentralized technologies. Future prospects of the country concerning the legalization of cryptocurrency, blockchain and ICO.',
    where: 'Yerevan, Armenia'
  },
  {
    sDate: '19 March, 2018',
    d: '19',
    m: 'March',
    y: '2018',
    title: 'Bixtrim Conference and Support',
    text: '',
    where: 'Minsk, Belarus'
  },
  {
    sDate: '22 April, 2018',
    d: '22',
    m: 'April',
    y: '2018',
    title: 'Blockchain and ICO Conference Yerevan',
    text:
      'The first international Armenian Blockchain forum will take place in Yerevan and convene blockchain-experts from 20 countries.',
    where: 'Yerevan, Armenia'
  },

  {
    sDate: '19 May, 2018',
    d: '19',
    m: 'May',
    y: '2018',
    title: 'Next Block Conference (Sponsor)',
    text:
      'Highly targeted, qualified audience, passionate about Blockchain technology and cryptocurrencies. Ukrainіan and world investors.',
    where: ' Kyiev, Ukraine'
  },
  {
    sDate: '28 May, 2018',
    d: '28',
    m: 'May',
    y: '2018',
    title: 'Block Show Europe 2018',
    text:
      'Top Blockchain experts around the globe claim 2018 to be the year of global Blockchain regulations, so there is no way BlockShow won’t raise this question at the main stage of the upcoming event. Our greatest aspiration is to reach balance and fairness for the global Blockchain Law, and this is our way to contribute to one of the main Blockchain topics of 2018.',
    where: 'Berlin, Germany'
  },

  {
    sDate: '4 June, 2018',
    d: '4',
    m: 'June',
    y: '2018',
    title: 'Blockchain Conference Armenia',
    text: '',
    where: ' Yerevan, Armenia'
  },
  {
    sDate: '14 June, 2018',
    d: '14',
    m: 'June',
    y: '2018',
    title: 'Blockchain Conference Astana',
    text:
      'Astana will host for the second time the main blockchain conference of the Central Asia region – Blockchain Conference Astana (B Conference), which will bring together representatives of the Blockchain and Cryptocurrency industry from around the world to talk about their successful experience of using the technology in the most relevant areas for the region.',
    where: 'Astana, Kazakhstan'
  },
  {
    sDate: '20 June, 2018',
    d: '20',
    m: 'June',
    y: '2018',
    title: 'Blockchain and Bitcoin Conference',
    text:
      "The first international conference in Georgia organized by Smile-Expo. We discuss the country's prospects in legalization of cryptocurrencies, blockchain tech and ICO.",
    where: 'Tbilisi, Georgia'
  },
  {
    sDate: '27 June, 2018',
    d: '27',
    m: 'June',
    y: '2018',
    title: 'Blockchain Expo Europe',
    text:
      'As Europe’s largest established business Blockchain event, with over 4000 blockchain people attending in Berlin 2017, the Blockchain Expo will be arriving RAI Amsterdam on 27-28 June 2018, bringing together 6000+ dedicated blockchain industry attendees across key industries for two days of world-class content from leading brands embracing and developing cutting edge blockchain technologies.',
    where: 'Amsterdam, NL'
  },
  {
    sDate: '18 Jule, 2018',
    d: '18',
    m: 'Jule',
    y: '2018',
    title: 'Blockchain and Bitcoin Conference',
    text:
      'Blockchain & Bitcoin Conference France is a big conference in Paris covering cryptocurrencies, blockchain and ICOs. The organizer of the conference is Smile-Expo, the international company which coordinates business events in the advanced technologies sphere.',
    where: 'Paris, France'
  }
]

export default class SliderRoad extends Component {
  state = {
    slideIndex: 0,
    updateCount: 0
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    }
    return (
      <div>
        <SliderBtnsWrapper>
          {MeetData.map(({ sDate }, i) => {
            return (
              <SliderBtn key={i} onClick={() => this.slider.slickGoTo(i)}>
                {sDate}
              </SliderBtn>
            )
          })}
        </SliderBtnsWrapper>

        <div style={{ width: '95%' }}>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {MeetData.map( ({ d, m, y, title, text, where },i) => {
              return (
                <div key={i} >
                  <SliderElementWrapper>
                    <SliderCalendar>
                      <span style={{ fontSize: '5rem', marginTop: '1.4rem' }}>
                        {d}
                      </span>
                      <span style={{ fontSize: '2.5rem' }}>{m}</span>
                      <span style={{ fontSize: '1.5rem' }}>{y}</span>
                    </SliderCalendar>
                    <SiderContentWrapper>
                      <SliderTitle>{title}</SliderTitle>
                      <Text>{text}</Text>
                      <BotContainer>
                        <EventBtn>Event Websites</EventBtn>
                        <AddressContainer>{where}</AddressContainer>
                      </BotContainer>
                    </SiderContentWrapper>
                  </SliderElementWrapper>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}
